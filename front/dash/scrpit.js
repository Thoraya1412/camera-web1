document.addEventListener("DOMContentLoaded", () => {
  const cameraList = document.getElementById("camera-list");
  const cameraCount = document.getElementById("camera-count");
  const userCount = document.getElementById("user-count");
  const toggleBtn = document.getElementById("toggle-mode");

  let cameras = [];
  let users = ["admin", "viewer"];
  userCount.textContent = users.length;

  window.addCamera = function () {
    const newCam = `Camera ${cameras.length + 1}`;
    cameras.push(newCam);

    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = newCam;
    cameraList.appendChild(li);

    cameraCount.textContent = cameras.length;
  };

  toggleBtn.addEventListener("click", () => {
    const body = document.body;
    const isDark = body.classList.toggle("bg-dark");
    body.classList.toggle("text-light");
    body.classList.toggle("bg-light");
    body.classList.toggle("text-dark");
    toggleBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
    toggleBtn.classList.toggle("btn-outline-light");
    toggleBtn.classList.toggle("btn-outline-dark");
  });
});
