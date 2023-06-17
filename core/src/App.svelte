<script>
  import TailwindCSS from './app.css';
  import { draw } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';


  let showLines = false
  let showLanding = false

  onMount(() => {
    setTimeout(() => {
      showLines = true
    }, 1000)
    setTimeout(() => {
      showLanding = true
    }, 2000)
  })
</script>


<section class="w-full h-screen bg-#FFFCF2">
  <div class="absolute top-0 left-0 w-full h-full object-cover">
    <svg width="100%" height="100%" viewBox="0 0 3085 1953" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      {#if showLines}
        <path transition:draw="{{duration: 6000, easing: quintOut}}" d="M3085 1811.64C2000.06 1811.64 2721.78 1027.28 2721.78 0.000151677M0 1426.57C957.576 1426.57 1207.58 1027.28 1207.58 0M688.701 1953C688.701 1655.56 1539.36 1580.92 1539.36 1953" stroke="#1E1E1E" stroke-opacity="0.06" stroke-width="252"/>
      {/if}
      </svg>
  </div>

  <div>
    {#if showLanding}
    <nav transition:fade class="fixed justify-center">
      <ul class="flex flex-row justify-between">
        <li>
          <a href="#home">
            <svg>

            </svg>
          </a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#skills">Skills</a>
        </li>

        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
      </ul>
    </nav>
    {/if}
  </div>
</section>
<section class="w-full h-screen bg-slate-700">
  <!-- Add content for the second section here -->
</section>