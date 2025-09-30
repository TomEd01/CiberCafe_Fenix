// YouTube Button Script
document.addEventListener("DOMContentLoaded", function () {
  // Create button element
  const ytButton = document.createElement("a");
  ytButton.href = "https://linkly.link/2CJtA";
  ytButton.target = "_blank";
  ytButton.className = "youtube-button";

  // Add SVG icon
  ytButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z"/></svg>
    <span class="subscribe-text">Subscribe</span>
  `;

  // Create styles
  const style = document.createElement("style");
  style.textContent = `
    .youtube-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #3b5998;
  color: white;
  border-radius: 30px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0px;
  text-decoration: none;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  z-index: 99999;
  animation: float 3s ease-in-out infinite;
}

.youtube-button svg {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}
  
.youtube-button svg path{
  fill: #fff;
}

.subscribe-text {
  font-family: Arial, sans-serif;
  font-weight: 500;
  font-size: 0;
  max-width: 0;
  overflow: hidden;
  white-space: nowrap;
  transition: all 0.3s ease;
}

/* Hover Effects */
.youtube-button:hover {
  background-color: #6d84b4;
  width: 140px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.3);
  gap: 8px;
}

.youtube-button:hover .subscribe-text {
  font-size: 14px;
  max-width: 100px;
  padding-right: 8px;
}

.youtube-button:hover svg {
  transform: rotate(360deg);
}

/* Floating Animation */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* Click Ripple Effect */
.youtube-button:active::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,0.3);
  border-radius: 50%;
  animation: ripple 0.6s linear;
}

@keyframes ripple {
  from { transform: scale(0); opacity: 1; }
  to { transform: scale(2); opacity: 0; }
}

/* Mobile Responsive */
@media (max-width: 480px) {
  .youtube-button {
    bottom: 10px;
    right: 10px;
    width: 45px;
    height: 45px;
  }

  .youtube-button:hover {
    width: 120px;
  }

  .youtube-button svg {
    width: 20px;
    height: 20px;
  }

  .subscribe-text {
    font-size: 12px;
  }
}
  `;

  // Create intro overlay
  const overlay = document.createElement("div");
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,0.3);
    backdrop-filter: blur(5px);
    z-index: 9998;
    transition: opacity 0.5s ease;
  `;

  // Add elements to DOM
  document.head.appendChild(style);
  document.body.appendChild(overlay);
  document.body.appendChild(ytButton);

  // Intro animation
  setTimeout(() => {
    overlay.style.opacity = "0";
    setTimeout(() => overlay.remove(), 500);
    ytButton.style.animation = "float 3s ease-in-out infinite, none";
  }, 1000);

  // Initial hover simulation
  setTimeout(() => {
    ytButton.style.cssText = `width: 140px;gap: 8px;`;
    ytButton.querySelector(".subscribe-text").style.cssText = `
    font-size: 14px;
    max-width: 100px;
    padding-right: 8px;
  `;
  }, 100);
  setTimeout(() => {
    ytButton.style.cssText = "";
    ytButton.querySelector(".subscribe-text").style.cssText = "";
  }, 2000);
});