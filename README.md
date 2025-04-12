# useragent.one

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

### 🐳 Getting Started (Docker)

```bash
docker-compose up --build
