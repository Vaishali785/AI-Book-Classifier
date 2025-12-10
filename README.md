# 📘 Book Classifier — Vision API Experiment

_A tiny learning project to understand AI APIs, prompts, tokens, and structured output._

---

## 🌱 Overview

This is a small experimental project I built to understand how an AI **Vision API** behaves when used inside real code.
The goal wasn’t to create a polished app — just to learn:

- how to send images to an AI model
- how prompts affect the response
- how token usage works
- how to request structured JSON
- how models handle errors or unexpected inputs

The project classifies a **book cover image** and tries to extract basic details like:

- title
- author
- number of pages (if detectable)

It also displays:

- **input tokens used**
- **output tokens generated**

---

## 🖼️ Screenshots

> **Note:** The UI is intentionally simple — this project was built for learning, not design.

<img src='https://github.com/Vaishali785/AI-Book-Classifier/blob/main/public/Book_1_screenshot.png' width='500px' />
<img src='https://github.com/Vaishali785/AI-Book-Classifier/blob/main/public/Book_2_screenshot.png' width='500px' />
<img src='https://github.com/Vaishali785/AI-Book-Classifier/blob/main/public/Book_without_title_screenshot.png' width='500px' />
<img src='https://github.com/Vaishali785/AI-Book-Classifier/blob/main/public/Error_1_screenshot.png' width='500px' />

---

## 🔧 Features

- Upload a book cover image
- Vision model attempts to extract book details
- Handles incorrect images (non-books) gracefully
- Displays token usage for learning purposes
- Minimal UI — built only for experimentation

---

## 🚀 Running Locally

Create your `.env` file:

> The `.env.example` file shows the correct format.
> **Never commit your real API key.**

Install dependencies:

```
npm install
```

Run the project:

```
npm run dev
```

---

## 🔒 Security Note

This is a **learning experiment**, not production code.
The project uses `dangerouslyAllowBrowser: true` for quick local testing.
Do **not** expose real API keys in public repos or production builds.

---

## 🌿 Notes

- UI is intentionally minimal.
- Model behavior may vary depending on the image.
- The project is expected to evolve as I learn more about LLMs, prompting, and model parameters.

Here is the **updated README** with a clean, simple **Screenshots** section added.
It still keeps the same beginner-friendly, personal project tone.

You can paste this directly into your GitHub README.

---

# 📘 Book Classifier — Vision API Experiment

_A tiny learning project to understand AI APIs, prompts, tokens, and structured output._

---

## 🌱 Overview

This is a small experimental project I built to understand how an AI **Vision API** behaves when used inside real code.
The goal wasn’t to create a polished app — just to learn:

- how to send images to an AI model
- how prompts affect the response
- how token usage works
- how to request structured JSON
- how models handle errors or unexpected inputs

The project classifies a **book cover image** and tries to extract:

- title
- author
- number of pages (if detectable)
- a simple classification label

It also displays:

- **input tokens used**
- **output tokens generated**

---

**Upload Screen:**
_(Add your screenshot path here — example)_
`![Upload UI](./screenshots/upload.png)`

**Result Screen:**
_(Add screenshot)_
`![Result UI](./screenshots/result.png)`

**Error Handling (non-book image):**
_(Add screenshot)_
`![Error Handling](./screenshots/error.png)`

---
