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
  <div class="section-kicker">01 / URBAN INTELLIGENCE</div>
  <div class="showcase-heading">
    <div><h2 id="lab-heading">Chengdu, breathing in data.</h2><p>Live conditions, modelled air quality, and historical context translated into one expressive visual system.</p></div>
    <span class="data-state" id="data-status" role="status" aria-live="polite">Connecting to live sources…</span>
  </div>
  <div class="breathing-city">
    <div class="breathing-copy">
      <div class="section-kicker">LIVE CITY SIGNAL</div>
      <h3>One city. Three signals. One story.</h3>
      <p>Temperature changes the city's glow. Modelled air quality shapes its atmosphere. An archived baseline puts the current reading in context.</p>
      <div class="city-metrics">
        <div class="city-metric"><span class="metric-label">TEMPERATURE</span><strong id="city-temp">--°C</strong></div>
        <div class="city-metric"><span class="metric-label">US AQI · MODELLED</span><strong id="city-aqi">--</strong></div>
        <div class="city-metric"><span class="metric-label">VS 30-DAY MEAN</span><strong id="city-delta">--</strong></div>
      </div>
      <p class="city-supporting" id="city-summary" aria-live="polite">Loading observations…</p>
      <p class="city-method" id="city-method">Baseline: previous 30 archived daily mean temperatures, ending five days ago. Compared with current temperature, not a daily mean or climate anomaly.</p>
      <div class="lab-tags"><span>REST APIs</span><span>Validation</span><span>Historical context</span><span>SVG</span></div>
      <a class="city-link" href="https://github.com/Fredilly/big-data/blob/main/assets/js/chengdu-data.js">Inspect the data logic ↗</a>
    </div>
    <div class="breathing-visual-wrap">
      <div class="visual-topline"><span>CHENGDU / LIVE CITY STATE</span><span id="city-stamp">Asia/Shanghai</span></div>
      <div class="breathing-visual" id="breathing-visual" data-temp-band="mild" data-air-band="moderate">
        <svg id="breathing-city-svg" viewBox="0 0 860 520" role="img" aria-label="Stylized, data-responsive illustration of Chengdu's skyline, not a measured geographic map">
          <defs>
            <linearGradient id="city-sky" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#09172f"/><stop offset="1" stop-color="#152d55"/></linearGradient>
            <linearGradient id="city-towers" x1="0" y1="1" x2="0" y2="0"><stop stop-color="#16418b"/><stop offset="1" stop-color="#79c7ff"/></linearGradient>
            <filter id="city-blur"><feGaussianBlur stdDeviation="24"/></filter>
          </defs>
          <rect width="860" height="520" fill="url(#city-sky)"/>
          <circle id="ambient-orb" cx="615" cy="160" r="115" fill="#1769ff" opacity=".35" filter="url(#city-blur)"/>
          <g class="city-contours" fill="none" stroke="#4aa2fb"><path d="M0 380 Q130 295 260 360 T560 350 T860 355" stroke-width="3"/><path d="M0 414 Q155 344 310 415 T630 408 T860 390" stroke-width="2" opacity=".45"/><path d="M0 448 Q140 412 290 455 T590 451 T860 439" stroke-width="2" opacity=".25"/></g>
          <g id="city-buildings" fill="url(#city-towers)"></g>
          <g id="city-windows"></g>
          <g id="city-particles"></g>
          <path d="M10 446 Q180 413 360 453 T700 440 T850 444" fill="none" stroke="#8cd5ff" stroke-width="2" opacity=".32"/>
          <text x="40" y="58" fill="#cfe7ff" font-size="18" font-family="Inter,sans-serif">DATA → ATMOSPHERE</text>
          <text id="viz-caption" x="40" y="87" fill="#91c9ff" font-size="15" font-family="Inter,sans-serif">Waiting for live signals…</text>
        </svg>
      </div>
      <p class="city-footnote">Illustrative skyline, not a geographic rendering. Weather and US AQI from <a href="https://open-meteo.com/" target="_blank" rel="noopener noreferrer">Open-Meteo</a>; AQI is modelled, not a local sensor reading. Data updates on refresh.</p>
    </div>
  </div>
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
