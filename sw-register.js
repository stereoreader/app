if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/app/service-worker.js")
      .then(() => console.log("✅ Service Worker registered"))
      .catch((err) => console.error("SW registration failed:", err));
  });
}