const tl = gsap.timeline();

const body = document.getElementById('body');

tl.from(body, 1, {x: -100, opacity: 0}, {x: 0, opacity: 1})