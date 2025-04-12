# Backend – useragent.one

This is the **Fastify + TypeScript** backend for [useragent.one](https://useragent.one). It exposes a simple HTTP API powered by the excellent [`user-agents`](https://github.com/intoli/user-agents) package.

---

### 🧠 What It Does

- Serves random user-agent strings via a GET endpoint
- Accepts query params to filter results (device type, platform, etc.)
- Fetches a fresh user-agent list **daily** using `node-cron`
- Built for speed, lightweight, and deployed with Docker

---

### ⚙️ Tech Stack

- **Framework:** Fastify
- **Language:** TypeScript
- **Validation:** Zod
- **Scheduler:** node-cron
- **User-Agent source:** [`user-agents`](https://github.com/intoli/user-agents)

---

### 🔄 Fresh User-Agents

The `user-agents` package maintains an up-to-date list of real browser user-agent strings, updated daily. This backend uses `node-cron` to pull a fresh copy of the list every 24 hours, so you always get the latest without redeploying or reinstalling.

---

### 📦 Docker

To build and run:

```bash
docker build -t useragent-backend .
docker run -p 9001:3001 useragent-backend
