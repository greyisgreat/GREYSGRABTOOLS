# GREY'S GRAB TOOLS

A collection of tools for GRAB VR players and creators.

## Features

- GRAB level tools
- Level downloading
- GRAB-related utilities
- Clean, modern interface
- PIN-protected access
- Dark graphite theme

## Deployment

This project is designed for **Cloudflare Pages**.

### Important

The project uses **Pages Functions**, so do not deploy it through Cloudflare's new **Upload and deploy** workflow, which says:

> Pages functions are not supported.

Instead, use the **legacy Pages workflow**.

### Deploying

1. Open the Cloudflare Dashboard.
2. Go to **Workers & Pages**.
3. Select **Create application**.
4. Choose **Pages**.
5. Choose **Upload assets**.
6. Upload the project ZIP.
7. Deploy.

## Project Structure

```text
GREY'S GRAB TOOLS/
├── index.html
├── assets/
│   ├── app.css
│   ├── app.js
│   ├── extra-tools.js
│   ├── leveljson-bundle.js
│   ├── midi2grab-bundle.js
│   └── bliss.jpg
├── api/
│   ├── grab-proxy.js
│   └── verify-pin.js
├── functions/
│   └── api/
│       ├── grab-proxy.js
│       └── verify-pin.js
└── fonts/
