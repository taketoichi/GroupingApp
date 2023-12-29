let lastTapTime = 0;
let touchDetected = false;

document.addEventListener("mousemove", handleMouseMove);
document.addEventListener("touchmove", handleTouchMove);
document.addEventListener("touchend", handleTouchEnd);
document.body.addEventListener('click', handleClick);

function handleMouseMove(e) {
  if (!touchDetected) {
    moveCursorAndCircles(e.clientX, e.clientY);
  }
}

function handleTouchMove(e) {
  touchDetected = true;
  e.preventDefault();
  const touchX = e.touches[0].clientX;
  const touchY = e.touches[0].clientY;
  moveCursorAndCircles(touchX, touchY);
}

function moveCursorAndCircles(x, y) {
  gsap.to(".circle", {
    x: x,
    y: y,
    stagger: -0.1,
  });

  gsap.set(".cursor", {
    x: x,
    y: y,
  });
}

function handleTouchEnd() {
  const currentTime = new Date().getTime();
  const tapLength = currentTime - lastTapTime;
  if (tapLength < 300 && tapLength > 0) {
    // ダブルタップ検出
    window.location.href = 'https://taketoichi.github.io/GroupingMain/';
  }
  lastTapTime = currentTime;
  setTimeout(() => {
    touchDetected = false;
  }, 300);
}

function handleClick() {
  if (!touchDetected) {
    // クリックイベント
    window.location.href = 'https://taketoichi.github.io/GroupingMain/';
  }
}
