document.addEventListener("DOMContentLoaded", function () {
  const wheel = document.getElementById("wheel");
  const drawButton = document.getElementById("drawButton");
  const winnerDisplay = document.getElementById("winner");

  let spinning = false;

  drawButton.addEventListener("click", () => {
    if (!spinning) {
      spinning = true;
      const randomRotation = 1800 + Math.floor(Math.random() * 1800); // Random rotation between 1800 and 3600 degrees
      wheel.style.transition = "transform 3s cubic-bezier(0.17, 0.67, 0.83, 0.67)";
      wheel.style.transform = `rotate(${randomRotation}deg)`;

      setTimeout(() => {
        const winnerIndex = Math.floor(randomRotation / 60) % 6;
        const items = document.querySelectorAll(".wheel-item");
        const winner = items[winnerIndex].textContent;
        winnerDisplay.textContent = `抽奖结果：恭喜您获得 ${winner}！`;
        spinning = false;
      }, 3000); // Wait for 3 seconds for the wheel to stop
    }
  });
});
