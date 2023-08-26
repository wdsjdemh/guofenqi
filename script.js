document.addEventListener("DOMContentLoaded", function () {
  const participants = [
    "user1",
    "user2",
    "user3",
    "user4",
    "user5"
    // 在这里添加更多参与者
  ];

  const drawButton = document.getElementById("drawButton");
  const participantList = document.getElementById("participantList");
  const winnerDisplay = document.getElementById("winner");

  participants.forEach((participant) => {
    const listItem = document.createElement("li");
    listItem.textContent = participant;
    participantList.appendChild(listItem);
  });

  drawButton.addEventListener("click", () => {
    if (participants.length > 0) {
      const randomIndex = Math.floor(Math.random() * participants.length);
      const winner = participants[randomIndex];
      winnerDisplay.textContent = `抽奖结果：恭喜 ${winner} 获奖！`;
    } else {
      winnerDisplay.textContent = "没有参与者可以抽奖。";
    }
  });
});
