import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Detect if running as PWA
if (window.matchMedia("(display-mode: standalone)").matches) {
  document.documentElement.classList.add("pwa");
}

// Register service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {
      // Service worker registration failed, but app still works
    });
  });
}

createRoot(document.getElementById("root")!).render(<App />);
