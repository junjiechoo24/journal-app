# A Personal Journaling & Flourishing App

This project is a full-stack web application designed for a personalized, mixed-methods N=1 study. It combines a qualitative daily journal with validated psychometric scales to track and analyze the drivers of personal well-being, meaning, and authenticity.

## Core Features & Methodology

This application was built to facilitate a structured, single-case experimental design to test the impact of a daily journaling intervention on psychological flourishing.

### 1. Journal
A daily journaling prompt with four open-ended questions designed to foster self-reflection and narrative coherence.
*   *Something that happened*
*   *Something you did well*
*   *What did not go well*
*   *The bigger picture*

![Screenshot of the Journaling Page](https://github.com/user-attachments/assets/1786dac8-87af-4eac-b795-b817e08a80cf)

### 2. The Daily Flourishing Scale
A daily, 5-item questionnaire answered every evening. The items are adapted from the comprehensive Harvard Flourishing Measure to provide a sensitive, day-to-day "pulse" of well-being across five key domains.

![Screenshot of the Daily Flourishing Scale Page](https://github.com/user-attachments/assets/b6cc2690-34b1-40f6-9648-acd3340db111)

### 3. The Weekly Flourishing Scale
The full, 8-item Flourishing Scale (Diener et al., 2010) is administered once per week to track stable, long-term changes in overall psychological well-being.

![Screenshot of the Weekly Flourishing Scale Page](https://github.com/user-attachments/assets/b0fe63c3-30cf-4b72-9c57-3e84c1b1085e)
---

## Technical Architecture

This project is built with a modern, secure, and scalable full-stack architecture.

### Front-End
*   **Framework:** **React** (built with Vite)
*   **Routing:** **React Router** for multi-page navigation.
*   **Styling:** Custom CSS for a clean, minimal, and responsive UI.
*   **Deployment:** Hosted on **Netlify** with continuous deployment via GitHub.

### Back-End
*   **Database:** **Supabase** (PostgreSQL)
*   **Authentication:** **Supabase Auth** for secure user login.
*   **Security:** **Row Level Security (RLS)** is enabled on all tables, with policies that ensure users can only ever access their own data.

### Data & Analysis
*   The application saves qualitative (journal text) and quantitative (scale scores) data to a decoupled, relational database schema.
*   The data is designed to be analyzed in a separate environment (e.g., a Python Jupyter Notebook) to explore the relationship between the daily intervention and the flourishing outcomes over time.

