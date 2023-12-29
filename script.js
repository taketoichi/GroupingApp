document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  gsap.to(".circle", {
    x: mouseX,
    y: mouseY,
    stagger: -0.1,
  });

  gsap.set(".cursor",{
    x: mouseX,
    y: mouseY,
  });
});

// ページ全体がクリックされたときに新しいページにリダイレクト
document.body.addEventListener('click', function() {
  window.location.href = 'http://127.0.0.1:5500/indexHP.html'; // ここに次のページのURLを入れる
});
