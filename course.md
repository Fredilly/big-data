---
layout: default
title: Course
---

<div class="card" style="text-align: center; padding: 40px;">
  <span style="font-size: 3rem;">📖</span>
  <h2 style="border: none; text-align: center;">Advanced Programming for Data Science</h2>
  <p style="font-size: 1.2rem; color: var(--text-light);">64 Teaching Hours · 7 Weeks · On-site · Chengdu</p>
  <p style="color: var(--text-light);"><em>Python · Data Processing · Applied Machine Learning</em></p>
  <p style="margin-top: 12px;">September – December 2026 · Max 20 teaching hours/week</p>
</div>

<div class="card">
  <h2>Course Description</h2>
  <p>This course teaches students to write production-quality Python for data science — from fundamentals through to applied machine learning and data pipeline design. It emphasizes <strong>hands-on programming skills</strong>, <strong>reproducible workflows</strong>, and <strong>real-world data challenges</strong> at every stage. The course is designed for a 7-week intensive format with 8–10 teaching hours per week plus lab and project work.</p>

  <p>By the end of 64 hours, students will be able to:</p>
  <ul>
    <li>Write advanced Python for data manipulation, analysis, and visualization</li>
    <li>Use NumPy, Pandas, and Scikit-learn to solve data problems</li>
    <li>Build data pipelines: file I/O, APIs, databases, JSON, cleaning, validation</li>
    <li>Apply OOP and functional programming patterns to data science code</li>
    <li>Understand algorithmic efficiency and memory management with larger datasets</li>
    <li>Use Git, testing, and reproducible notebook practices</li>
    <li>Train and evaluate machine learning models end-to-end</li>
  </ul>
</div>

<div class="card">
  <h2>Prerequisites</h2>
  <p>Basic programming exposure (any language). No prior data science experience required. Students should be comfortable installing software and using basic command-line operations.</p>
</div>

<div class="card">
  <h2>Required Tools</h2>
  <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px;">
    <span style="background: #e3f2fd; padding: 6px 14px; border-radius: 20px; font-size: 0.85rem;">Python 3.10+</span>
    <span style="background: #e3f2fd; padding: 6px 14px; border-radius: 20px; font-size: 0.85rem;">Jupyter Notebook</span>
    <span style="background: #e3f2fd; padding: 6px 14px; border-radius: 20px; font-size: 0.85rem;">NumPy</span>
    <span style="background: #e3f2fd; padding: 6px 14px; border-radius: 20px; font-size: 0.85rem;">Pandas</span>
    <span style="background: #e3f2fd; padding: 6px 14px; border-radius: 20px; font-size: 0.85rem;">Matplotlib / Seaborn</span>
    <span style="background: #e3f2fd; padding: 6px 14px; border-radius: 20px; font-size: 0.85rem;">Scikit-learn</span>
    <span style="background: #e3f2fd; padding: 6px 14px; border-radius: 20px; font-size: 0.85rem;">Git / GitHub</span>
    <span style="background: #e3f2fd; padding: 6px 14px; border-radius: 20px; font-size: 0.85rem;">VS Code</span>
  </div>
</div>

<hr style="margin: 32px 0; border: none; border-top: 2px solid var(--border);">

<h2 style="text-align: center; font-size: 1.8rem;">📅 7-Week Syllabus (64 Hours)</h2>

<!-- Week 1 -->
<div class="card" style="border-left: 5px solid #1a73e8;">
  <h3 style="margin-top: 0; color: #1a73e8;">Week 1 — Python Foundations for Data Science (10 hrs)</h3>
  <table style="width:100%; border-collapse: collapse;">
    <tr style="border-bottom: 1px solid var(--border);">
      <th style="text-align: left; padding: 6px; width: 100px;">Session</th>
      <th style="text-align: left; padding: 6px;">Topics</th>
      <th style="text-align: left; padding: 6px;">Lab</th>
    </tr>
    <tr style="border-bottom: 1px solid var(--border);">
      <td style="padding: 6px;">1.1 (3 hrs)</td>
      <td style="padding: 6px;">Python review, Jupyter setup, VS Code, virtual environments, package management</td>
      <td style="padding: 6px;">Set up a reproducible Python environment. Write and run first notebook.</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border);">
      <td style="padding: 6px;">1.2 (3 hrs)</td>
      <td style="padding: 6px;">Advanced Python: comprehensions, generators, lambda, map/filter/reduce</td>
      <td style="padding: 6px;">Rewrite nested loops as comprehensions. Compare memory usage with generators.</td>
    </tr>
    <tr>
      <td style="padding: 6px;">1.3 (4 hrs)</td>
      <td style="padding: 6px;">OOP for data: classes, inheritance, dunder methods, context managers, decorators</td>
      <td style="padding: 6px;">Build a custom Dataset class with __len__, __getitem__, and a context manager.</td>
    </tr>
  </table>
</div>

<!-- Week 2 -->
<div class="card" style="border-left: 5px solid #0d47a1;">
  <h3 style="margin-top: 0; color: #0d47a1;">Week 2 — Numerical Computing & Data Manipulation (10 hrs)</h3>
  <table style="width:100%; border-collapse: collapse;">
    <tr style="border-bottom: 1px solid var(--border);">
      <th style="text-align: left; padding: 6px; width: 100px;">Session</th>
      <th style="text-align: left; padding: 6px;">Topics</th>
      <th style="text-align: left; padding: 6px;">Lab</th>
    </tr>
    <tr style="border-bottom: 1px solid var(--border);">
      <td style="padding: 6px;">2.1 (3 hrs)</td>
      <td style="padding: 6px;">NumPy: arrays, broadcasting, vectorization, linear algebra, random numbers</td>
      <td style="padding: 6px;">Compare vectorized vs loop operations on large arrays. Matrix operations.</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border);">
      <td style="padding: 6px;">2.2 (4 hrs)</td>
      <td style="padding: 6px;">Pandas: Series, DataFrames, reading/writing, indexing, filtering, groupby, merge</td>
      <td style="padding: 6px;">Load a real-world CSV. Clean, filter, group, aggregate. Write summary statistics.</td>
    </tr>
    <tr>
      <td style="padding: 6px;">2.3 (3 hrs)</td>
      <td style="padding: 6px;">Pandas advanced: multi-index, pivot tables, datetime handling, apply/map, missing data</td>
      <td style="padding: 6px;">Reshape messy survey data into tidy format. Parse dates. Handle nulls.</td>
    </tr>
  </table>
</div>

<!-- Week 3 -->
<div class="card" style="border-left: 5px solid #2e7d32;">
  <h3 style="margin-top: 0; color: #2e7d32;">Week 3 — Data Wrangling, Pipelines & Visualization (10 hrs)</h3>
  <table style="width:100%; border-collapse: collapse;">
    <tr style="border-bottom: 1px solid var(--border);">
      <th style="text-align: left; padding: 6px; width: 100px;">Session</th>
      <th style="text-align: left; padding: 6px;">Topics</th>
      <th style="text-align: left; padding: 6px;">Lab</th>
    </tr>
    <tr style="border-bottom: 1px solid var(--border);">
      <td style="padding: 6px;">3.1 (3 hrs)</td>
      <td style="padding: 6px;">Data cleaning: duplicates, outliers, schema validation, data quality checks</td>
      <td style="padding: 6px;">Write a validation pipeline checking data types, ranges, uniqueness, and missing rates.</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border);">
      <td style="padding: 6px;">3.2 (4 hrs)</td>
      <td style="padding: 6px;">File I/O, REST APIs, SQLite: reading CSV/JSON/Excel, API requests, database storage</td>
      <td style="padding: 6px;">Fetch data from a public API → parse JSON → clean with Pandas → store in SQLite.</td>
    </tr>
    <tr>
      <td style="padding: 6px;">3.3 (3 hrs)</td>
      <td style="padding: 6px;">Visualization: Matplotlib, Seaborn, Plotly Express — exploratory and explanatory plots</td>
      <td style="padding: 6px;">Build a multi-plot exploratory dashboard using faceting, color, and annotations.</td>
    </tr>
  </table>
</div>

<!-- Week 4 -->
<div class="card" style="border-left: 5px solid #e65100;">
  <h3 style="margin-top: 0; color: #e65100;">Week 4 — Machine Learning with Scikit-learn (10 hrs)</h3>
  <table style="width:100%; border-collapse: collapse;">
    <tr style="border-bottom: 1px solid var(--border);">
      <th style="text-align: left; padding: 6px; width: 100px;">Session</th>
      <th style="text-align: left; padding: 6px;">Topics</th>
      <th style="text-align: left; padding: 6px;">Lab</th>
    </tr>
    <tr style="border-bottom: 1px solid var(--border);">
      <td style="padding: 6px;">4.1 (3 hrs)</td>
      <td style="padding: 6px;">Scikit-learn workflows: estimator API, pipelines, preprocessing, feature engineering</td>
      <td style="padding: 6px;">Build a full pipeline with ColumnTransformer, OneHotEncoder, StandardScaler.</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border);">
      <td style="padding: 6px;">4.2 (4 hrs)</td>
      <td style="padding: 6px;">Supervised learning: linear/logistic regression, decision trees, random forests</td>
      <td style="padding: 6px;">Train classifiers. Compare accuracy, precision, recall. Visualize decision boundaries.</td>
    </tr>
    <tr>
      <td style="padding: 6px;">4.3 (3 hrs)</td>
      <td style="padding: 6px;">Model evaluation: cross-validation, grid search, ROC curves, confusion matrices</td>
      <td style="padding: 6px;">Run 5-fold CV grid search. Plot learning curves. Diagnose overfitting.</td>
    </tr>
  </table>
</div>

<!-- Week 5 -->
<div class="card" style="border-left: 5px solid #6a1b9a;">
  <h3 style="margin-top: 0; color: #6a1b9a;">Week 5 — Unsupervised Learning & Dimensionality Reduction (8 hrs)</h3>
  <table style="width:100%; border-collapse: collapse;">
    <tr style="border-bottom: 1px solid var(--border);">
      <th style="text-align: left; padding: 6px; width: 100px;">Session</th>
      <th style="text-align: left; padding: 6px;">Topics</th>
      <th style="text-align: left; padding: 6px;">Lab</th>
    </tr>
    <tr style="border-bottom: 1px solid var(--border);">
      <td style="padding: 6px;">5.1 (4 hrs)</td>
      <td style="padding: 6px;">Clustering: K-means, hierarchical clustering, silhouette analysis</td>
      <td style="padding: 6px;">Cluster customer data. Evaluate cluster quality. Interpret segment characteristics.</td>
    </tr>
    <tr>
      <td style="padding: 6px;">5.2 (4 hrs)</td>
      <td style="padding: 6px;">Dimensionality reduction: PCA, t-SNE, feature importance</td>
      <td style="padding: 6px;">Reduce high-dimensional data to 2D. Visualize with PCA + t-SNE. Compare results.</td>
    </tr>
  </table>
</div>

<!-- Week 6 -->
<div class="card" style="border-left: 5px solid #c62828;">
  <h3 style="margin-top: 0; color: #c62828;">Week 6 — Testing, Debugging & Professional Practice (8 hrs)</h3>
  <table style="width:100%; border-collapse: collapse;">
    <tr style="border-bottom: 1px solid var(--border);">
      <th style="text-align: left; padding: 6px; width: 100px;">Session</th>
      <th style="text-align: left; padding: 6px;">Topics</th>
      <th style="text-align: left; padding: 6px;">Lab</th>
    </tr>
    <tr style="border-bottom: 1px solid var(--border);">
      <td style="padding: 6px;">6.1 (3 hrs)</td>
      <td style="padding: 6px;">Testing data code with pytest: fixtures, edge cases, assertions for data pipelines</td>
      <td style="padding: 6px;">Write pytest tests for a data cleaning function. Test empty data, missing values, type errors.</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border);">
      <td style="padding: 6px;">6.2 (3 hrs)</td>
      <td style="padding: 6px;">Git workflows, branching strategy, reproducible environments, project structure</td>
      <td style="padding: 6px;">Structure a project with src/, tests/, notebooks/, and data/. Pin dependencies.</td>
    </tr>
    <tr>
      <td style="padding: 6px;">6.3 (2 hrs)</td>
      <td style="padding: 6px;">Algorithm efficiency: time complexity, profiling, memory management, when to optimize</td>
      <td style="padding: 6px;">Profile a slow Pandas operation. Identify bottleneck. Rewrite with vectorized approach.</td>
    </tr>
  </table>
</div>

<!-- Week 7 -->
<div class="card" style="border-left: 5px solid #f9a825;">
  <h3 style="margin-top: 0; color: #d4a017;">Week 7 — Final Project (8 hrs)</h3>
  <p>Students build and present an end-to-end data science project incorporating concepts from all six prior weeks.</p>

  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 16px 0;">
    <div style="background: #f0f7ff; padding: 12px; border-radius: 8px;">
      <strong>📊 Exploratory Analysis Project</strong><br>
      <span style="font-size: 0.85rem;">Find a dataset → clean it → explore it → visualize findings → present insights</span>
    </div>
    <div style="background: #fff3e0; padding: 12px; border-radius: 8px;">
      <strong>🤖 ML Prediction Project</strong><br>
      <span style="font-size: 0.85rem;">Build a pipeline → train models → evaluate → select the best → explain your choices</span>
    </div>
  </div>

  <h4>Deliverables</h4>
  <ul>
    <li>Working code in a GitHub repository with clear documentation</li>
    <li>10-minute presentation to the class with Q&A</li>
    <li>Peer feedback session</li>
  </ul>
</div>

<hr style="margin: 32px 0; border: none; border-top: 2px solid var(--border);">

<div class="card">
  <h2>Sample Lecture Slide</h2>
  <p style="color: var(--text-light); margin-bottom: 16px;"><em>From Week 2 — Pandas: The GroupBy Pattern</em></p>

  <div style="background: #1a1a2e; border-radius: 12px; padding: 32px; color: #e0e0e0; font-family: 'Courier New', monospace; max-width: 800px; margin: 0 auto;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 24px; font-size: 0.8rem; color: #888;">
      <span>Advanced Programming for Data Science — Week 2</span>
      <span>Slide 10 / 22</span>
    </div>
    <div style="border-left: 4px solid #00bfa5; padding-left: 20px; margin-bottom: 24px;">
      <div style="font-size: 1.5rem; font-weight: 700; color: #00bfa5; margin-bottom: 8px;">Split → Apply → Combine</div>
      <div style="color: #aaa; font-size: 0.9rem;">The GroupBy pattern is the most important data manipulation concept in Pandas</div>
    </div>

    <div style="background: #16213e; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
      <div style="color: #ffd700; margin-bottom: 8px; font-size: 0.85rem;">import pandas as pd</div>
      <div style="color: #7ec8e3; font-size: 0.85rem;">
        df = pd.read_csv("sales.csv")<br>
        <span style="color: #ffd700;">df.groupby("region")["revenue"].agg(["sum", "mean", "count"])</span>
      </div>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; font-size: 0.8rem;">
      <div style="background: #16213e; border-radius: 6px; padding: 12px; text-align: center;">
        <div style="font-size: 1.2rem; font-weight: 700; color: #00bfa5;">1. Split</div>
        <div style="color: #ccc;">Group rows by key</div>
      </div>
      <div style="background: #16213e; border-radius: 6px; padding: 12px; text-align: center;">
        <div style="font-size: 1.2rem; font-weight: 700; color: #00bfa5;">2. Apply</div>
        <div style="color: #ccc;">Run function per group</div>
      </div>
      <div style="background: #16213e; border-radius: 6px; padding: 12px; text-align: center;">
        <div style="font-size: 1.2rem; font-weight: 700; color: #00bfa5;">3. Combine</div>
        <div style="color: #ccc;">Merge into result</div>
      </div>
    </div>

    <div style="margin-top: 20px; font-size: 0.75rem; color: #666; border-top: 1px solid #333; padding-top: 12px;">
      Lab: Load sales.csv → group by region → total revenue per region → plot bar chart
    </div>
  </div>
</div>

<div class="card">
  <h2>Sample Lecture Slide</h2>
  <p style="color: var(--text-light); margin-bottom: 16px;"><em>From Week 4 — Comparing Classifiers</em></p>

  <div style="background: #1a1a2e; border-radius: 12px; padding: 32px; color: #e0e0e0; font-family: 'Courier New', monospace; max-width: 800px; margin: 0 auto;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 24px; font-size: 0.8rem; color: #888;">
      <span>Advanced Programming for Data Science — Week 4</span>
      <span>Slide 15 / 24</span>
    </div>
    <div style="border-left: 4px solid #bb86fc; padding-left: 20px; margin-bottom: 24px;">
      <div style="font-size: 1.5rem; font-weight: 700; color: #bb86fc; margin-bottom: 8px;">Choosing a Classifier</div>
      <div style="color: #aaa; font-size: 0.9rem;">There is no single best algorithm — it depends on your data</div>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-bottom: 16px;">
      <div style="background: #16213e; border-radius: 8px; padding: 12px; text-align: center;">
        <div style="color: #7ec8e3; font-size: 0.9rem;">Logistic Regression</div>
        <div style="color: #888; font-size: 0.75rem;">Fast, interpretable, linear boundary</div>
        <div style="color: #555; font-size: 0.7rem;">Good baseline</div>
      </div>
      <div style="background: #16213e; border-radius: 8px; padding: 12px; text-align: center;">
        <div style="color: #7ec8e3; font-size: 0.9rem;">Decision Tree</div>
        <div style="color: #888; font-size: 0.75rem;">Non-linear, easy to explain</div>
        <div style="color: #555; font-size: 0.7rem;">Prone to overfitting</div>
      </div>
      <div style="background: #16213e; border-radius: 8px; padding: 12px; text-align: center;">
        <div style="color: #7ec8e3; font-size: 0.9rem;">Random Forest</div>
        <div style="color: #888; font-size: 0.75rem;">Ensemble, robust, accurate</div>
        <div style="color: #555; font-size: 0.7rem;">Less interpretable</div>
      </div>
    </div>

    <div style="background: #16213e; border-radius: 8px; padding: 12px;">
      <div style="color: #ffd700; font-size: 0.85rem;">No Free Lunch Theorem</div>
      <div style="color: #ccc; font-size: 0.8rem;">The best classifier depends on data shape, sample size, and whether interpretability matters.</div>
    </div>

    <div style="margin-top: 20px; font-size: 0.75rem; color: #666; border-top: 1px solid #333; padding-top: 12px;">
      Lab: Train all three on the same dataset. Compare accuracy, training time, and interpretability.
    </div>
  </div>
</div>

<hr style="margin: 32px 0; border: none; border-top: 2px solid var(--border);">

<div class="card">
  <h2>Assessment</h2>
  <div style="display: flex; gap: 20px; flex-wrap: wrap; margin-top: 12px;">
    <div style="flex: 1; min-width: 150px; background: #f0f7ff; padding: 16px; border-radius: 8px;">
      <strong>30%</strong><br>Weekly Coding Assignments
    </div>
    <div style="flex: 1; min-width: 150px; background: #fff3e0; padding: 16px; border-radius: 8px;">
      <strong>20%</strong><br>Midterm Practical
    </div>
    <div style="flex: 1; min-width: 150px; background: #e8f5e9; padding: 16px; border-radius: 8px;">
      <strong>35%</strong><br>Final Project
    </div>
    <div style="flex: 1; min-width: 150px; background: #f3e5f5; padding: 16px; border-radius: 8px;">
      <strong>15%</strong><br>Participation & Lab Work
    </div>
  </div>
</div>
