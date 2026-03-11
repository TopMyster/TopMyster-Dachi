# Claude Code + Chrome: Network Request Inspection

How to wire Claude Code up to Google Chrome to inspect, capture, or intercept network requests.

---

## Options at a Glance

| Approach | Network Capture | Setup Effort | Chrome Only? |
|----------|----------------|--------------|--------------|
| Playwright MCP | ✅ Full interception + logging | Medium | No (multi-browser) |
| Chrome DevTools MCP | ✅ Inspection + CDP | Low | Yes |
| `claude --chrome` flag | ❌ UI only, no network | Zero | Yes |
| Raw CDP via bash | ⚠️ Manual/fragile | High | Yes |

**Recommended:** Playwright MCP for network work.

---

## Option 1: Playwright MCP (Recommended)

Gives Claude full control over Chrome — including network interception, request/response logging, and CDP access.

### Install

```bash
claude mcp add --transport stdio playwright -- npx @playwright/mcp@latest
```

This adds it to your local Claude config. To share it with the team via the project:

```bash
claude mcp add --transport stdio --scope project playwright -- npx @playwright/mcp@latest
```

Or add `.mcp.json` to the project root manually:

```json
{
  "mcpServers": {
    "playwright": {
      "type": "stdio",
      "command": "npx",
      "args": ["@playwright/mcp@latest"]
    }
  }
}
```

### What you can ask Claude

- "Navigate to `https://example.com` and log all network requests"
- "Capture XHR/fetch calls to `/api/*` and show me the request bodies"
- "Block all requests to `analytics.js` and take a screenshot"
- "Intercept the next POST to `/transactions` and show me the payload"

### Capabilities

- ✅ Request/response interception (block or modify)
- ✅ Headers, body, status, timing per request
- ✅ Service worker blocking
- ✅ Chrome, Firefox, WebKit (Edge too)
- ✅ CDP endpoint access for advanced debugging

---

## Option 2: Chrome DevTools MCP

Lighter option. Uses Puppeteer under the hood with direct CDP access.

### Install

```bash
claude mcp add --transport stdio chrome-devtools -- npx -y chrome-devtools-mcp@latest
```

### What you can ask Claude

- "Open Chrome, go to `https://example.com`, and show me all network requests"
- "Run a Lighthouse audit on this page"
- "Capture console errors and stack traces"
- "Show me the performance trace for this page load"

### Capabilities

- ✅ Network request inspection (Chrome/Chromium only)
- ✅ Console message retrieval with source maps
- ✅ Performance tracing and Lighthouse audits
- ✅ Direct CDP access

---

## Option 3: `claude --chrome` (Built-in, limited)

Claude Code has a built-in Chrome integration via a browser extension.

```bash
claude --chrome
```

**Limitation:** This is UI/DOM focused — it does not capture network requests. Use Playwright MCP for that.

---

## Option 4: Chrome Remote Debugging (Manual CDP)

Launch Chrome with the remote debugging port open, then Claude can interact with it via bash:

```bash
# macOS
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
  --remote-debugging-port=9222 \
  --user-data-dir=/tmp/chrome-debug-profile

# Then hit the CDP endpoint
curl http://localhost:9222/json
```

Claude can then write and run Node.js scripts against the CDP WebSocket. This is the most flexible but most effort — use Playwright MCP instead unless you need something very custom.

---

## Verifying MCP Servers

```bash
# List configured MCP servers
claude mcp list

# Inspect a specific server
claude mcp get playwright

# Remove a server
claude mcp remove playwright
```

---

## Config File Locations

| Scope | File | When to use |
|-------|------|-------------|
| Project (shared) | `.mcp.json` in project root | Commit to git, share with team |
| User (personal) | `~/.claude.json` | Cross-project, personal tools |

---

## For This Project

Network request inspection is useful for:
- Inspecting SEND API (`send.app`) transaction calls in the browser
- Capturing request/response payloads during manual testing
- Debugging signing or crafting issues by comparing what the browser sends vs what the server expects

Setup once:
```bash
claude mcp add --transport stdio --scope project playwright -- npx @playwright/mcp@latest
```

Then in any session: *"Open Chrome, navigate to the app, and capture all requests to `/api/transactions`"*
