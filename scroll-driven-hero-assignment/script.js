const car = document.querySelector("#car");
const progressBar = document.querySelector("#progress-bar");
const counters = document.querySelectorAll(".counter");
const stage = document.querySelector(".scroll-stage");

let targetProgress = 0;
let currentProgress = 0;
let animationFrameRequested = false;
let countersStarted = false;

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
  startCounters();
  // const counterObersver = new IntersectionObserver((entries)=>{
  //   entries.forEach((entry)=>{
  //     if(entry.isIntersecting){
  //       startCounters();
  //       counterObersver.disconnect();
  //     }
  //   })
  // })

  // counterObersver.observe(document.querySelector(".states"));
  updateTargetProgress();
});

function updateTargetProgress() {
  const rect = stage.getBoundingClientRect();
  const scrollableDistance = stage.offsetHeight - window.innerHeight;
  const distanceScrolled = Math.min(Math.max(-rect.top, 0), scrollableDistance);
  targetProgress = scrollableDistance > 0 ? distanceScrolled / scrollableDistance : 0;

  if (!animationFrameRequested) {
    animationFrameRequested = true;
    requestAnimationFrame(animateScene);
  }
}

function animateScene() {
  // Interpolation makes the car catch up smoothly with the user's scroll.
  currentProgress += (targetProgress - currentProgress) * 0.12;

  const x = (currentProgress - 0.5) * window.innerWidth * 0.72;
  const y = Math.sin(currentProgress * Math.PI) * -24;
  const rotation = (currentProgress - 0.5) * 7;
  const scale = 0.82 + currentProgress * 0.28;

  car.style.transform =
    `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${rotation}deg) scale(${scale})`;
  progressBar.style.width = `${currentProgress * 100}%`;

  if (Math.abs(targetProgress - currentProgress) > 0.001) {
    requestAnimationFrame(animateScene);
  } else {
    currentProgress = targetProgress;
    animationFrameRequested = false;
  }
}

window.addEventListener("scroll", updateTargetProgress, { passive: true });
window.addEventListener("resize", updateTargetProgress);

function startCounters() {
  if (countersStarted) return;
  countersStarted = true;

  counters.forEach((counter, index) => {
    const target = Number(counter.dataset.target);
    const duration = 3000;
    const delay = index * 140;
    const startTime = performance.now() + delay;

    function tick(now) {
      if (now < startTime) {
        requestAnimationFrame(tick);
        return;
      }
      const progress = Math.min((now - startTime) / duration, 1);
      // Ease-out cubic: fast at first, then settles gently.
      const eased = 1 - Math.pow(1 - progress, 3);
      counter.textContent = Math.round(target * eased);

      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}
