# Svelte Chrome Extension Template

A Chrome Extension template with [Svelte](https://svelte.dev) and [Rollup](https://rollupjs.org).

## Get Started

### Download

Create a new project based on this template using [degit](https://github.com/Rich-Harris/degit) (A tool to download github repositories without commit history by Rich Harris):

```bash
npx degit gatziourasd/svelte-chrome-extension-template <your-app-name>
```

_Note that you will need to have [Node.js](https://nodejs.org) installed._

### Install

```bash
cd <your-app-name>
npm i
```

### Run

```bash
npm run dev
```

### Load

To load your extension in chrome:

1. Navigate to **chrome://extensions/**
2. Toggle **Developer mode** on
3. Click **Load unpacked**
4. Select the folder **...\<your-app-name>/dist**

### Reload

Anytime you change the **background** or **foreground** code you need to reload the extension.

1. Navigate to **chrome://extensions/**
2. Click the **Reload Icon**

To reload the popup just close and open it again.
