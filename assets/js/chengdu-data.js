'use strict';
/* Chengdu data lab. No API keys, no hidden fallback values, no invented observations. */
(() => {
  const $ = id => document.getElementById(id);
  const put = (id,value) => { const el=$(id); if(el) el.textContent=String(value); };
  const latitude=30.5728, longitude=104.0668, tz='Asia/Shanghai';
  const weatherUrl='https://api.open-meteo.com/v1/forecast?latitude='+latitude+'&longitude='+longitude+'&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&forecast_days=2&timezone='+tz;
  const airUrl='https://air-quality-api.open-meteo.com/v1/air-quality?latitude='+latitude+'&longitude='+longitude+'&current=us_aqi,pm2_5,pm10&timezone='+tz;
  const finite=x=>typeof x==='number'&&Number.isFinite(x);
  const descriptions={0:'Clear sky',1:'Mainly clear',2:'Partly cloudy',3:'Cloudy',45:'Fog',48:'Fog',51:'Drizzle',53:'Drizzle',55:'Drizzle',61:'Rain',63:'Rain',65:'Heavy rain',71:'Snow',73:'Snow',75:'Heavy snow',80:'Rain showers',81:'Rain showers',82:'Heavy showers',95:'Thunderstorm',96:'Thunderstorm',99:'Thunderstorm'};
  const status=$('data-status');
  const setStatus=(label,kind)=>{status.textContent=label;status.className='data-state'+(kind?' is-'+kind:'');};
  const request=async url=>{const controller=new AbortController();const timeout=setTimeout(()=>controller.abort(),9000);try{const response=await fetch(url,{signal:controller.signal});if(!response.ok)throw new Error('HTTP '+response.status);return await response.json();}finally{clearTimeout(timeout);}};
  const condition=(code)=>descriptions[code]||'Current conditions';
  const aqiName=value=>value<=50?'Good':value<=100?'Moderate':value<=150?'Unhealthy for sensitive groups':value<=200?'Unhealthy':value<=300?'Very unhealthy':'Hazardous';
  const hourLabel=timestamp=>timestamp.slice(11,16);
  function drawTrend(times,values,from) {
    const points=[];
    for(let i=Math.max(from,0);i<values.length&&points.length<24;i++){if(finite(values[i]))points.push({time:times[i],value:values[i]});}
    if(points.length<3)throw new Error('Missing valid hourly forecast points');
    const nums=points.map(p=>p.value), low=Math.min(...nums),high=Math.max(...nums);
    const W=800,H=170,left=14,right=14,top=18,bottom=20;
    const x=i=>left+i*(W-left-right)/(points.length-1);
    const y=v=>H-bottom-((v-low)/(high-low||1))*(H-top-bottom);
    const coordinates=points.map((p,i)=>[x(i),y(p.value)]);
    const path=coordinates.map((p,i)=>(i?'L':'M')+p[0].toFixed(1)+','+p[1].toFixed(1)).join(' ');
    const fill=path+' L'+x(points.length-1).toFixed(1)+','+(H-bottom)+' L'+x(0)+','+(H-bottom)+' Z';
    const ns='http://www.w3.org/2000/svg',svg=document.createElementNS(ns,'svg');
    svg.setAttribute('viewBox','0 0 '+W+' '+H);svg.setAttribute('role','presentation');
    const element=(name,attributes)=>{const el=document.createElementNS(ns,name);Object.entries(attributes).forEach(([k,v])=>el.setAttribute(k,v));svg.appendChild(el);return el;};
    [0,.5,1].forEach(a=>{const yy=top+(H-top-bottom)*a;element('line',{x1:left,y1:yy,x2:W-right,y2:yy,stroke:'#e5edf5','stroke-dasharray':'4 6'});});
    element('path',{d:fill,fill:'#1273eb',opacity:'.09'});
    element('path',{d:path,fill:'none',stroke:'#176de0','stroke-width':'3.5','stroke-linecap':'round','stroke-linejoin':'round'});
    const last=coordinates[coordinates.length-1];
    element('circle',{cx:last[0],cy:last[1],r:5,fill:'#176de0',stroke:'#fff','stroke-width':2});
    const host=$('trend-chart');host.replaceChildren(svg);
    host.setAttribute('aria-label','Next 24 hours forecast temperature in Chengdu. Minimum '+low.toFixed(1)+' degrees Celsius, maximum '+high.toFixed(1)+' degrees Celsius.');
    const indices=[0,Math.floor((points.length-1)/3),Math.floor(2*(points.length-1)/3),points.length-1];
    const axis=$('trend-axis');axis.replaceChildren(...indices.map(i=>{const label=document.createElement('span');label.textContent=hourLabel(points[i].time);return label;}));
    put('trend-swing',(high-low).toFixed(1)+'°C');
  }
  async function weather() {
    const data=await request(weatherUrl),current=data?.current,daily=data?.daily,hourly=data?.hourly;
    if(!current||!finite(current.temperature_2m)||!finite(current.relative_humidity_2m))throw new Error('Invalid current weather payload');
    put('wx-temp',Math.round(current.temperature_2m)+'°C');
    put('wx-description',condition(current.weather_code));
    put('wx-humidity',Math.round(current.relative_humidity_2m)+'%');
    put('wx-feels',finite(current.apparent_temperature)?Math.round(current.apparent_temperature)+'°C':'Unavailable');
    if(finite(daily?.temperature_2m_min?.[0])&&finite(daily?.temperature_2m_max?.[0]))put('wx-range',Math.round(daily.temperature_2m_min[0])+'°–'+Math.round(daily.temperature_2m_max[0])+'°C');
    put('wx-time','Model time: '+(current.time||'unknown')+' ('+tz+')');
    if(!Array.isArray(hourly?.time)||!Array.isArray(hourly?.temperature_2m))throw new Error('Missing hourly series');
    // API timestamps use the requested local timezone; find first hour at/after current model timestamp.
    const currentHour=String(current.time||'').slice(0,13);
    const start=hourly.time.findIndex(t=>t.slice(0,13)>=currentHour);
    drawTrend(hourly.time,hourly.temperature_2m,start<0?0:start);
  }
  async function air() {
    const data=await request(airUrl),current=data?.current;
    if(!current||!finite(current.us_aqi))throw new Error('Invalid air-quality payload');
    put('air-aqi',Math.round(current.us_aqi));
    put('air-rating',aqiName(current.us_aqi));
    put('air-pm25',finite(current.pm2_5)?current.pm2_5.toFixed(1)+' µg/m³':'Unavailable');
    put('air-pm10',finite(current.pm10)?current.pm10.toFixed(1)+' µg/m³':'Unavailable');
  }

  async function history() {
    const today=new Date();
    const isoDaysAgo=d=>{const x=new Date(today.getTime()-d*86400000);return x.toISOString().slice(0,10);};
    const endpoint='https://archive-api.open-meteo.com/v1/archive?latitude=30.5728&longitude=104.0668&start_date='+isoDaysAgo(34)+'&end_date='+isoDaysAgo(5)+'&daily=temperature_2m_mean&timezone=Asia%2FShanghai';
    const data=await request(endpoint);
    const values=data?.daily?.temperature_2m_mean;
    const dates=data?.daily?.time;
    if(!Array.isArray(values)||!Array.isArray(dates))throw Error('Archive returned no daily values');
    const valid=values.map((v,i)=>({v,date:dates[i]})).filter(x=>finite(x.v));
    if(valid.length<20)throw Error('Not enough historical observations');
    const baseline=valid.reduce((sum,p)=>sum+p.v,0)/valid.length;
    const currentText=$('wx-temp').textContent;
    const current=parseFloat(currentText);
    if(finite(current)){
      const delta=current-baseline;
      put('urban-difference',(delta>=0?'+':'')+delta.toFixed(1)+'°C');
      put('urban-explain','Current: '+current.toFixed(1)+'°C · Historical mean: '+baseline.toFixed(1)+'°C · '+valid.length+' valid days');
    } else {
      put('urban-difference',baseline.toFixed(1)+'°C');
      put('urban-explain','30-day historical baseline. Current weather data unavailable for comparison.');
    }
    const ns='http://www.w3.org/2000/svg',svg=document.createElementNS(ns,'svg');
    svg.setAttribute('viewBox','0 0 780 155');svg.setAttribute('role','presentation');
    const low=Math.min(...valid.map(x=>x.v),baseline)-1,high=Math.max(...valid.map(x=>x.v),baseline)+1;
    const y=v=>140-(v-low)/(high-low)*120;
    const barWidth=740/valid.length;
    valid.forEach((p,i)=>{const bar=document.createElementNS(ns,'rect');bar.setAttribute('x',20+i*barWidth);bar.setAttribute('y',y(p.v));bar.setAttribute('width',Math.max(2,barWidth-5));bar.setAttribute('height',140-y(p.v));bar.setAttribute('rx',3);bar.setAttribute('fill','#2276d8');bar.setAttribute('opacity','.75');svg.appendChild(bar)});
    const mean=document.createElementNS(ns,'line');mean.setAttribute('x1',12);mean.setAttribute('x2',770);mean.setAttribute('y1',y(baseline));mean.setAttribute('y2',y(baseline));mean.setAttribute('stroke','#ef8d46');mean.setAttribute('stroke-width','2');mean.setAttribute('stroke-dasharray','5 6');svg.appendChild(mean);
    $('urban-history-chart').replaceChildren(svg);
    $('urban-history-chart').setAttribute('aria-label','Historical daily mean temperatures from '+valid[0].date+' to '+valid[valid.length-1].date+' with baseline '+baseline.toFixed(1)+' degrees Celsius');
  }
  Promise.allSettled([weather(),air()]).then(results=>{
    const successes=results.filter(r=>r.status==='fulfilled').length;
    if(successes===2)setStatus('● Live data loaded','live');
    else if(successes===1)setStatus('Partial data · refresh to retry','error');
    else setStatus('Live feeds unavailable · refresh to retry','error');
    if(results[0].status==='rejected'){$('trend-chart').textContent='Weather feed unavailable. Please refresh to retry.';put('wx-description','Weather feed unavailable');}
    if(results[1].status==='rejected')put('air-rating','Air quality feed unavailable');
  }).finally(()=>{history().catch(()=>{put('urban-difference','Unavailable');put('urban-explain','Historical data unavailable. Refresh to retry.');put('urban-history-chart','Archive feed could not be loaded.');});});
})();
