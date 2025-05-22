# Arxiv to AlphaXiv Linker Chrome Extension

This Chrome extension adds a convenient link to AlphaXiv on every arxiv.org abstract page, allowing you to quickly view the same paper on alphaxiv.org.

## Features

- Automatically inserts a "View on AlphaArxiv" link (with icon) at the top of the full-text links section on arxiv.org/abs/\* pages.
- Clicking the link takes you to the same paper on alphaxiv.org, replacing the current tab.
- Lightweight and fast, with no background scripts or extra permissions required.

## Installation (Development)

1. Clone or download this repository.
2. Run the build task to package the extension:
   - In VS Code: Press `Cmd+Shift+P` → `Tasks: Run Task` → select `Pack Chrome Extension`.
   - Or run in terminal:
     ```sh
     zip -r dist/arxiv-alpha-linker.zip manifest.json content.js
     ```
3. Open Chrome and go to `chrome://extensions`.
4. Enable **Developer mode** (top right).
5. Click **Load unpacked** and select the project folder.
6. Visit any arxiv.org abstract page (e.g., https://arxiv.org/abs/2001.08361) to see the new link.

## License

MIT
