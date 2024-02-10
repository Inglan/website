const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 1000,
  },
});

function scrollDown() {
  const s = window.scrollY,
    e = Math.min(
      s + window.innerHeight,
      document.body.scrollHeight - window.innerHeight
    ),
    t = performance.now();
  requestAnimationFrame(function o(i) {
    const r = (i - t) / 1e3,
      c = r >= 1 ? 1 : 1 - Math.pow(2, -10 * r);
    window.scrollTo(0, s + (e - s) * c);
    if (r < 1) requestAnimationFrame(o);
  });
}

window.onscroll = function () {
  var hero = document.querySelector(".hero");
  var scrollPos = window.scrollY;
  var opacity = 1 - scrollPos / 1000;
  hero.style.opacity = opacity;
};
