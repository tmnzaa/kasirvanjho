// maintenance.js
const isMaintenance = localStorage.getItem("maintenanceMode") === "on";
if (isMaintenance && !location.href.includes("admin.html")) {
  document.body.innerHTML = `
    <div style="display: flex; height: 100vh; align-items: center; justify-content: center; flex-direction: column; background: #121212; color: white; font-family: sans-serif; text-align: center;">
      <h1 style="font-size: 24px;">Website sedang dalam perbaikan</h1>
      <p style="color: #ccc;">Silakan kembali lagi nanti.</p>
    </div>
  `;
}
