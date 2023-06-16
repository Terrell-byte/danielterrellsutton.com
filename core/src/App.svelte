<script>
  import TailwindCSS from './app.css';
  import landingBg from './assets/portfolio_landing_bg.png';
  let y = 50;

  function handleScroll(event) {
    const delta = Math.sign(event.deltaY);
    y += delta;
    if (y < 50) {
      y = 50;
    } else if (y > 100) {
      y = 100;
    }
  }

  window.addEventListener('wheel', handleScroll);
</script>

<main class="flex items-center justify-center h-screen">
  <div class="w-{y} h-{y} flex flex-col items-center justify-center bg-#FFFCF2 shadow-lg transition-all duration-5000" style="width: {y}%; height: {y}%; position: relative;">
    <img src={landingBg} alt="Portfolio Landing Background" style="width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0;">
  </div>
</main>