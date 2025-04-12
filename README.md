[![Live API](https://img.shields.io/badge/API-live-brightgreen)](https://useragent.one)
[![Deployed](https://img.shields.io/badge/status-deployed-blue)](https://useragent.one)

# userAgent.one

This is the official repository for **useragent.one** — a simple, dockerized API for serving realistic user-agent strings to browser-based environments.

---

### 🔧 Tech Stack

- **Frontend:** Svelte
- **Backend:** Fastify
- **Powered by:** [`user-agents`](https://www.npmjs.com/package/user-agents) — doing all the heavy lifting

---

### 🚀 Why?

The `user-agents` package is excellent, but it depends on Node.js and can’t be used directly in the browser. This API exposes it via a simple GET endpoint, so you can use it in:

- Browser extensions
- Frontend-only apps
- Any JS environment without Node support

---

### 📘 API Guide

Example request:
```text
GET https://useragent.one/api/user-agents?deviceCategory=mobile&limit=1
```

View usage examples and filtering options at [**useragent.one**](https://useragent.one)
