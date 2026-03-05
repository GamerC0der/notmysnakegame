# Snake — Discord Activity (Multiplayer)

Multiplayer Snake game that runs as a [Discord Activity](https://docs.discord.com/developers/activities). Uses a **built-in Node.js + Socket.IO server** in this folder; no Flask backend.

## Quick start

```bash
cd discord-activity
npm install
npm run dev
```

This starts:
- **Vite** on http://localhost:5173 (frontend)
- **Game server** on port 3001 (Socket.IO). Vite proxies `/socket.io` to it.

Open http://localhost:5173, click PLAY to join, and open another tab/window to play with multiple snakes.

## Discord setup

1. Create an app in the [Discord Developer Portal](https://discord.com/developers/applications) and copy the **Client ID**.
2. Copy `.env.example` to `.env` and set `VITE_CLIENT_ID=your_client_id`.
3. Run a tunnel and set URL mapping:
   ```bash
   npm run tunnel
   ```
   In the portal: **Activities → URL Mappings** → Prefix `/`, Target = your tunnel host (e.g. `something.trycloudflare.com`).
4. **Activities → Settings** → Enable Activities.

Then launch the activity from a voice channel or DM in Discord.

## Scripts

| Command | Description |
|--------|-------------|
| `npm run dev` | Start Vite + game server (single command) |
| `npm run dev:client` | Vite only (port 5173) |
| `npm run dev:server` | Game server only (port 3001) |
| `npm run build` | Build frontend for production |
| `npm run tunnel` | Expose port 5173 via cloudflared |
