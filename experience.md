---
layout: default
title: Experience
---

<div class="card" style="text-align: center; padding: 40px;">
  <span style="font-size: 3rem;">💼</span>
  <h2 style="border: none; text-align: center;">Experience</h2>
  <p style="color: var(--text-light);"><strong>Teaching Experience first</strong> — data engineering and community work below</p>
</div>

<div class="card" style="border-left: 5px solid #c62828;">
  <h2>🎓 Teaching Experience</h2>

  <div class="timeline-item">
    <div class="date">2013</div>
    <div class="org">
      <strong>University Lecturer</strong><br>
      <span class="org-cn">University name to be confirmed — Chengdu area</span>
    </div>
    <ul>
      <li>Delivered classroom instruction in an English-medium environment at a Chinese university</li>
      <li>Responsible for complete course delivery: lesson planning, in-class presentation, student assessment, and grading</li>
      <li>Developed course materials and exercises for mixed-ability student groups</li>
      <li>Gained first-hand experience with Chinese university classroom dynamics, student expectations, and academic administration</li>
    </ul>
    <p><em>School name and course details to be updated once records are located — I am visiting the campus to confirm.</em></p>
  </div>

  <div class="timeline-item">
    <div class="date">2024–2025</div>
    <div class="org">
      <strong>Language & Technical Trainer</strong><br>
      <span class="org-cn">Midea Group · 美的集团 — Shunde, Guangdong</span>
    </div>
    <ul>
      <li>Designed and delivered English-medium technical training courses for Chinese professionals across legal, finance, R&D, and sales departments</li>
      <li>Created course materials, exercises, and assessments for adult learners with varying English proficiency levels</li>
      <li>Managed class sizes of 8–20 students per session</li>
      <li>Evaluated learner progress through regular assessments and adjusted teaching approach accordingly</li>
    </ul>
  </div>

  <div class="timeline-item">
    <div class="date">2024–2025</div>
    <div class="org">
      <strong>Language & Technical Trainer</strong><br>
      <span class="org-cn">Hisense Group · 海信集团 — Shunde, Guangdong</span>
    </div>
    <ul>
      <li>Developed and delivered English-medium corporate training for research, finance, legal, and sales departments</li>
      <li>Created lesson plans, classroom materials, and progress assessments for professional adult learners</li>
      <li>Provided bilingual documentation and technical communication support across departments</li>
    </ul>
  </div>

  <div class="timeline-item">
    <div class="date">2015–2018</div>
    <div class="org">
      <strong>Founder & Organizer — Technical Learning Community</strong><br>
      <span class="org-cn">Chengdu AI, Machine Learning & Data Science Meetup</span>
    </div>
    <ul>
      <li>Founded one of Chengdu's early dedicated AI and Machine Learning community groups</li>
      <li>Curated learning topics, recruited speakers (including Google engineers and Chinese AI researchers), and managed a cross-cultural membership</li>
      <li>Organized regular events that brought together international and local practitioners for knowledge sharing</li>
    </ul>
  </div>

  <p style="margin-top: 16px; font-size: 0.9rem; color: var(--text-light);"><strong>Total teaching & training experience:</strong> university classroom instruction and corporate training. All instruction delivered in English to Chinese learners.</p>
</div>

<div class="card">
  <h2>📸 Corporate Training — In the Field</h2>
  <p style="color: var(--text-light); margin-bottom: 16px;">On-site training sessions at Midea Group and Hisense Group, Shunde, Guangdong (2024–2025)</p>

  <div class="gallery">
    <div class="gallery-item">
      <a href="{{ '/assets/midea-training.jpg' | relative_url }}" target="_blank">
        <img src="{{ '/assets/midea-training.jpg' | relative_url }}" alt="Midea Group training session" loading="lazy">
      </a>
      <div class="gallery-caption">Midea Group · 美的集团 — Training Session</div>
    </div>
    <div class="gallery-item">
      <a href="{{ '/assets/hisense-training.jpg' | relative_url }}" target="_blank">
        <img src="{{ '/assets/hisense-training.jpg' | relative_url }}" alt="Hisense Group training session" loading="lazy">
      </a>
      <div class="gallery-caption">Hisense Group · 海信集团 — Training Session</div>
    </div>
  </div>
</div>

<style>
.gallery {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 12px;
}
.gallery-item {
  background: #f8f9fa;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: transform 0.2s ease;
}
.gallery-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
}
.gallery-item a {
  display: block;
  line-height: 0;
}
.gallery-item img {
  width: 100%;
  height: auto;
  display: block;
}
.gallery-caption {
  padding: 12px 16px;
  font-size: 0.9rem;
  color: var(--text-light);
  background: #fff;
  text-align: center;
  font-weight: 500;
  border-top: 1px solid #eee;
}
@media (max-width: 600px) {
  .gallery { grid-template-columns: 1fr; }
}
</style>

<div class="card" style="border-left: 5px solid #1565c0;">
  <h2>🧮 Data Engineering & Applied Python</h2>

  <div class="timeline-item">
    <div class="date">2024–Present</div>
    <div class="org"><strong>Data & Validation Engineer — Article6</strong></div>
    <ul>
      <li>Built Python-based document processing and validation workflows that convert long-form regulatory PDFs into structured JSON rule sets</li>
      <li>Designed deterministic validation tests covering data integrity, schema conformity, evidence provenance, and reproducibility</li>
      <li>Developed and maintained a production web application combining document extraction, data normalization, and AI-assisted analysis</li>
      <li>Worked with semi-structured data: multi-sheet spreadsheets, regulatory PDFs, JSON schemas</li>
    </ul>
    <p><em>Key tools: Python, Pandas, JSON, automated validation frameworks</em></p>
  </div>

  <div class="timeline-item">
    <div class="date">2018–Present</div>
    <div class="org"><strong>Independent Data Science Practice</strong></div>
    <ul>
      <li>Participated in 10+ Kaggle competitions covering regression, classification, feature engineering, and model evaluation</li>
      <li>Built personal projects in data analysis, machine learning, and computer vision</li>
      <li>Tools: NumPy, Pandas, Scikit-learn, Matplotlib, Seaborn, OpenCV, TensorFlow</li>
    </ul>
    <p><a href="https://kaggle.com/fredilly" target="_blank">→ Kaggle Profile</a> · <a href="https://github.com/Fredilly" target="_blank">→ GitHub Profile</a></p>
  </div>
</div>
