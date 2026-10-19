---
layout: default
title: Fred Egbuedike | Data Science and Technology Lecturer
---

<section class="portfolio-hero">
  <div class="portfolio-eyebrow"><span class="portfolio-pulse"></span> DATA SCIENCE · SOFTWARE · EDUCATION</div>
  <h1>Teaching data science.<br><span class="highlight">Building with data.</span></h1>
  <p class="portfolio-intro">I'm <strong>Fred Egbuedike</strong>, a computing-trained educator and software practitioner. I build practical data systems and explain complex ideas to learners in China.</p>
  <div class="portfolio-meta"><span>M.Sc. Information Security</span><span>Southwest Jiaotong University</span><span>Chengdu · 2027 Lecturer Application</span></div>
  <div class="portfolio-actions">
    <a class="cta-button" href="#data-lab">Explore live data ↓</a>
    <a class="cta-button outline" href="{{ '/course' | relative_url }}">Five course proposals</a>
    <a class="cta-button outline" href="https://github.com/Fredilly">GitHub ↗</a>
  </div>
</section>

<section class="showcase-section" id="data-lab" aria-labelledby="lab-heading">
  <div class="section-kicker">01 / LIVE DATA LAB</div>
  <div class="showcase-heading">
    <div><h2 id="lab-heading">Chengdu, by the numbers.</h2><p>A small data product: API ingestion, validation, transformations and visual storytelling. Real current conditions, not hardcoded figures.</p></div>
    <span class="data-state" id="data-status" role="status">Connecting to live sources…</span>
  </div>
  <div class="showcase-grid">
    <article class="dash-panel modern-panel">
      <div class="dash-panel-header"><span class="dot blue"></span> WEATHER TELEMETRY <span class="panel-source">Open-Meteo</span></div>
      <div class="weather-primary"><div><div class="metric-kicker">Current temperature</div><div class="weather-big" id="wx-temp">--<small>°C</small></div><div class="weather-sub" id="wx-description">Awaiting observations</div></div><div class="weather-symbol" aria-hidden="true">◌</div></div>
      <div class="weather-details"><div><span>Humidity</span><strong id="wx-humidity">--</strong></div><div><span>Feels like</span><strong id="wx-feels">--</strong></div><div><span>Today's range</span><strong id="wx-range">--</strong></div></div>
      <p class="data-footnote" id="wx-time">Local observation timestamp pending.</p>
    </article>
    <article class="dash-panel modern-panel">
      <div class="dash-panel-header"><span class="dot green"></span> AIR QUALITY <span class="panel-source">Open-Meteo</span></div>
      <div class="metric-kicker">US Air Quality Index (modelled)</div>
      <div class="weather-big" id="air-aqi">--</div>
      <div class="aqi-indicator" id="air-rating">Awaiting air-quality data</div>
      <div class="weather-details"><div><span>PM2.5</span><strong id="air-pm25">--</strong></div><div><span>PM10</span><strong id="air-pm10">--</strong></div></div>
      <p class="data-footnote">Particulate matter in µg/m³. Modelled conditions are not street-level sensor measurements.</p>
    </article>
  </div>
  <div class="trend-panel">
    <div class="trend-heading"><div><h3>Next 24 hours</h3><p>Hourly forecast · Chengdu local time</p></div><div class="trend-stat"><span>Expected temperature swing</span><strong id="trend-swing">--</strong></div></div>
    <div id="trend-chart" class="trend-chart" role="img" aria-label="Hourly forecast temperature chart. Loading."><span class="chart-loading">Loading forecast…</span></div>
    <div class="trend-axis" id="trend-axis"></div>
  </div>
  <section class="urban-history" aria-labelledby="urban-heading">
  <div class="section-kicker">HISTORICAL CONTEXT / 30-DAY BASELINE</div>
  <div class="urban-head"><div><h3 id="urban-heading">Is today warmer than usual?</h3><p>Compare today's temperature with the previous 30 available historical daily means. Historical data is not a prediction.</p></div><div class="urban-delta"><span>Compared with baseline</span><strong id="urban-difference">Loading…</strong></div></div>
  <div id="urban-history-chart" class="urban-history-chart" role="img" aria-label="Daily mean temperatures for the historical comparison window">Loading historical data…</div>
  <div class="urban-explain" id="urban-explain">Fetching archival series and computing the baseline.</div>
  <p class="urban-method">Method: archive daily mean temperatures, ending five days before today to reduce recent-data gaps; compare today's current temperature to the 30-day historical mean. This is a current-versus-historical comparison, not a climate anomaly or a like-for-like daily mean comparison. Data: Open-Meteo Historical Weather API.</p>
</section>
<div class="lab-bottom">
    <div class="mini-lab">
      <span class="section-kicker">CITY SYSTEMS / METRO</span>
      <h3>Chengdu's subway is a data problem.</h3>
      <p>Stations, lines, transfers and network topology are a real-world lesson in graph models and relational data. A useful follow-up project would calculate station counts, connections and interchange nodes from versioned OpenStreetMap data.</p>
      <p class="data-footnote">Transit network statistics need a dated dataset. This section does not claim live ridership or an unverified line length.</p>
      <a href="https://www.openstreetmap.org/#map=11/30.573/104.067" target="_blank" rel="noopener noreferrer">Explore Chengdu's mapped network ↗</a>
    </div>
    <div class="mini-lab">
      <span class="section-kicker">UNDER THE HOOD</span>
      <h3>Readable data, defensible results.</h3>
      <p>Two independent API calls, response-shape checks, timestamp-aware hourly aggregation, SVG plotting and visible error states. Data sources and calculation choices are exposed rather than disguised.</p>
      <div class="lab-tags"><span>REST APIs</span><span>JSON</span><span>Time series</span><span>Validation</span><span>SVG</span></div>
      <a href="https://github.com/Fredilly/big-data/blob/main/assets/js/chengdu-data.js">Read the data-processing code ↗</a>
    </div>
  </div>
  <p class="data-provenance">Weather and air quality: <a href="https://open-meteo.com/" target="_blank" rel="noopener noreferrer">Open-Meteo</a> (forecast/model data; not government-certified measurements). Forecast updates when the page is refreshed. Times shown in Asia/Shanghai.</p>
</section>

<section class="portfolio-section" id="experience">
  <div class="section-kicker">02 / EXPERIENCE</div><h2>Research classrooms. Corporate teams. Working software.</h2>
  <div class="portfolio-three">
    <article class="portfolio-card"><span class="card-number">01</span><h3>Research communication</h3><p>Delivered academic English presentation training to 60+ PhD researchers at the Chinese Academy of Sciences. This was communication instruction, not a data science course.</p></article>
    <article class="portfolio-card"><span class="card-number">02</span><h3>Professional teaching</h3><p>Over a decade of English-medium teaching and training in China, including engagements with Midea, Hisense and NetEase.</p></article>
    <article class="portfolio-card"><span class="card-number">03</span><h3>Applied engineering</h3><p>Builds data-validation workflows, retrieval and evaluation systems, and database-backed applications through Article6 and independent projects.</p></article>
  </div>
</section>

<section class="portfolio-section">
  <div class="section-kicker">03 / UNIVERSITY TEACHING</div><h2>Five tailored course proposals.</h2><p class="portfolio-section-intro">Designed for the advertised March–July 2027 Data Science and Big Data Technology programme. All syllabi are proposals, not claims of previous course delivery.</p>
  <div class="course-tiles">
    <a href="{{ '/course' | relative_url }}"><strong>Exploration in Data Science</strong><span>64 teaching hours →</span></a>
    <a href="{{ '/course' | relative_url }}"><strong>Database and Information Management</strong><span>64 teaching hours →</span></a>
    <a href="{{ '/course' | relative_url }}"><strong>Object-oriented Programming (Java)</strong><span>64 hours · preparation in progress →</span></a>
    <a href="{{ '/course' | relative_url }}"><strong>Organizational Website and Database Management</strong><span>64 teaching hours →</span></a>
    <a href="{{ '/course' | relative_url }}"><strong>Introduction to Programming and Machine Intelligence</strong><span>4 teaching hours →</span></a>
  </div>
</section>

<section class="portfolio-contact">
  <div><span class="section-kicker">LET'S TALK</span><h2>Teaching with practical evidence.</h2><p>Explore the syllabus, teaching experience and source code, or get in touch about the 2027 course programme.</p></div>
  <div class="portfolio-actions"><a class="cta-button" href="{{ '/cv' | relative_url }}">View academic CV</a><a class="cta-button outline" href="mailto:fredilly@gmail.com">Email me ↗</a></div>
</section>
<script src="{{ '/assets/js/chengdu-data.js' | relative_url }}" defer></script>
