'use strict';
/* Open-Meteo-driven illustrative city signal. Never substitute mock metrics for live data. */
(() => {
  const $=id=>document.getElementById(id);
  const set=(id,value)=>{if($(id))$(id).textContent=String(value)};
  const finite=n=>typeof n==='number'&&Number.isFinite(n);
  const lat=30.5728, lon=104.0668, tz='Asia/Shanghai';
  const base='latitude='+lat+'&longitude='+lon+'&timezone='+encodeURIComponent(tz);
  const weather='https://api.open-meteo.com/v1/forecast?'+base+'&current=temperature_2m,relative_humidity_2m,weather_code';
  const air='https://air-quality-api.open-meteo.com/v1/air-quality?'+base+'&current=us_aqi,pm2_5';
  const codes={0:'Clear skies',1:'Mainly clear',2:'Partly cloudy',3:'Cloudy',45:'Fog',48:'Fog',51:'Drizzle',53:'Drizzle',55:'Drizzle',61:'Rain',63:'Rain',65:'Heavy rain',71:'Snow',73:'Snow',75:'Heavy snow',80:'Showers',81:'Showers',82:'Heavy showers',95:'Thunderstorm',96:'Thunderstorm',99:'Thunderstorm'};
  const ns='http://www.w3.org/2000/svg';
  const svgEl=(type,attributes)=>{const el=document.createElementNS(ns,type);Object.entries(attributes).forEach(([k,v])=>el.setAttribute(k,String(v)));return el};
  const buildings=[[80,305,26,105],[115,270,30,140],[155,320,24,90],[189,240,34,170],[233,290,26,120],[277,213,40,197],[329,254,26,156],[369,290,28,120],[409,180,45,230],[466,260,29,150],[510,220,35,190],[554,295,22,115],[589,245,30,165],[629,195,40,215],[681,275,25,135],[722,231,35,179],[771,298,22,112]];
  function skyline(){
    const group=$('city-buildings'),windows=$('city-windows');if(!group||!windows)return;
    group.replaceChildren();windows.replaceChildren();
    for(const [x,y,w,h] of buildings){
      group.appendChild(svgEl('rect',{x,y,width:w,height:h,rx:5}));
      for(let yy=y+10;yy<y+h-8;yy+=16)for(let xx=x+6;xx<x+w-4;xx+=9){
        if(((xx*7+yy*13)%11)<4)continue;
        windows.appendChild(svgEl('rect',{x:xx,y:yy,width:3,height:6,rx:1,fill:'#d7f3ff',opacity:.3+((xx+yy)%6)/12}));
      }
    }
  }
  function particles(aqi){
    const group=$('city-particles');if(!group)return;
    const count=aqi<=50?18:aqi<=100?34:52;
    const rng=i=>{const v=Math.sin(i*127.1+4.71)*43758.5453;return v-Math.floor(v)};
    const items=Array.from({length:count},(_,i)=>svgEl('circle',{cx:35+rng(i+2)*790,cy:95+rng(i+100)*250,r:1.5+rng(i+200)*4,fill:'#b8dbff',opacity:.15+rng(i+300)*.25}));
    group.replaceChildren(...items);
  }
  async function get(url){
    const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),9000);
    try{const response=await fetch(url,{signal:controller.signal});if(!response.ok)throw Error('HTTP '+response.status);return await response.json()}finally{clearTimeout(timer)}
  }
  function archiveDates(){
    // Derive YYYY-MM-DD in the target city, avoiding visitor timezone differences.
    const today=new Intl.DateTimeFormat('en-CA',{timeZone:tz,year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
    const utc=Date.parse(today+'T00:00:00Z');
    return [34,5].map(days=>new Date(utc-days*86400000).toISOString().slice(0,10));
  }
  function status(message,kind){const el=$('data-status');if(el){el.textContent=message;el.className='data-state'+(kind?' is-'+kind:'')}}
  function airLabel(n){return n<=50?'Good':n<=100?'Moderate':n<=150?'Unhealthy for sensitive groups':n<=200?'Unhealthy':n<=300?'Very unhealthy':'Hazardous'}
  skyline();
  async function main(){
    const [start,end]=archiveDates();
    const historical='https://archive-api.open-meteo.com/v1/archive?'+base+'&start_date='+start+'&end_date='+end+'&daily=temperature_2m_mean';
    const results=await Promise.allSettled([get(weather),get(air),get(historical)]);
    const [w,a,h]=results.map(r=>r.status==='fulfilled'?r.value:null);
    const temp=w?.current?.temperature_2m,aqi=a?.current?.us_aqi;
    const temps=h?.daily?.temperature_2m_mean;
    const valid=Array.isArray(temps)?temps.filter(finite):[];
    const baseline=valid.length>=20?valid.reduce((sum,v)=>sum+v,0)/valid.length:null;
    const delta=finite(temp)&&finite(baseline)?temp-baseline:null;
    set('city-temp',finite(temp)?Math.round(temp)+'°C':'Unavailable');
    set('city-aqi',finite(aqi)?Math.round(aqi):'Unavailable');
    set('city-delta',finite(delta)?(delta>=0?'+':'')+delta.toFixed(1)+'°C':'Unavailable');
    const condition=codes[w?.current?.weather_code]||'Current conditions';
    const summary=[];
    if(finite(temp))summary.push(condition+' · '+temp.toFixed(1)+'°C');
    if(finite(aqi))summary.push('modelled US AQI '+Math.round(aqi)+' ('+airLabel(aqi)+')');
    if(finite(delta))summary.push((delta>=0?'+':'')+delta.toFixed(1)+'°C against archived 30-day mean');
    set('city-summary',summary.length?summary.join(' · ')+'.':'Live feeds unavailable. Refresh to retry.');
    if(finite(temp)&&finite(aqi)){
      const visual=$('breathing-visual');
      visual.dataset.tempBand=temp<12?'cool':temp<23?'mild':temp<30?'warm':'hot';
      visual.dataset.airBand=aqi<=50?'good':aqi<=100?'moderate':'poor';
      $('ambient-orb').setAttribute('fill',temp<12?'#51baff':temp<23?'#1769ff':temp<30?'#687fff':'#a77cff');
      $('ambient-orb').setAttribute('opacity',String(Math.min(.52,.2+Math.abs(finite(delta)?delta:0)*.025)));
      particles(aqi);
      set('viz-caption',condition+' · US AQI '+Math.round(aqi)+(finite(delta)?' · Δ '+(delta>=0?'+':'')+delta.toFixed(1)+'°C':''));
    }else{
      set('viz-caption','Some live feeds are unavailable');
    }
    const stamp=w?.current?.time||a?.current?.time;
    set('city-stamp',stamp?stamp.replace('T',' ')+' CST':'Asia/Shanghai');
    status(results.every(r=>r.status==='fulfilled')&&finite(temp)&&finite(aqi)&&finite(delta)?'● Live sources loaded':summary.length?'Partial data · some feeds unavailable':'Feeds unavailable · refresh to retry',summary.length?'live':'error');
  }
  main().catch(error=>{console.error('City visualization:',error);status('Feeds unavailable · refresh to retry','error');set('city-summary','Live feeds unavailable. Refresh to retry.')});
})();
