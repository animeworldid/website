<script lang="ts">
  import Fa from 'svelte-fa'
  import { faStar } from '@fortawesome/free-solid-svg-icons'
  import type { CarouselData } from '$src/lib/components/carousel'

  let current = 0
  let last = 0
  function carouselPrev(): void {
    last = current
    current = current <= 0 ? data.length - 1 : current - 1
  }

  function carouselNext(): void {
    last = current
    current = current >= data.length - 1 ? 0 : current + 1
  }

  function carouselSet(index: number): void {
    last = current
    current = index
  }

  export let data: CarouselData[] = []
</script>

<div class="relative w-full">
  <!-- Carousel wrapper -->
  <div class="relative h-56 overflow-hidden rounded-lg md:h-96 z-20">
    {#each data as item, index}
      <div
        class="absolute w-full transition duration-700 ease-in-out {index === current
          ? 'translate-x-0'
          : current > index
          ? '-translate-x-full'
          : 'translate-x-full'}"
      >
        <a href={item.href} on:click={(e) => item.href ?? e.preventDefault} target="_blank" rel="noreferrer">
          <img src={item.image} class="absolute block w-full -translate-y-1/2" alt="..." />
        </a>
        <div
          class="flex w-full h-full justify-between p-4 text-white bg-gradient-to-b from-black/60 to-transparent {index === current
            ? 'translate-x-0'
            : current > index
            ? 'hidden -translate-x-full'
            : 'hidden translate-x-full'}"
        >
          <div>
            <p class="overflow-hidden line-clamp-2 hover:line-clamp-4 text-xl md:text-3xl max-w-xl">{item.title}</p>
            <span class="inline-flex h-fit items-center font-bold text-blue-400"><Fa icon={faStar} />10.0</span>
          </div>
          <span class="text-xl md:text-3xl min-w-fit pl-2">Spring 2023</span>
        </div>
      </div>
    {/each}
  </div>
  <!-- Slider indicators -->
  <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2 bg-blue-400/60 rounded-full px-2 py-1">
    {#each data as item, index}
      <button
        type="button"
        class="w-3 h-3 rounded-full {current === index ? 'bg-blue-600' : 'bg-black/40'} hover:bg-black/60 active:bg-black/60"
        on:click={() => carouselSet(index)}
      />
    {/each}
  </div>
  <!-- Slider controls -->
  <button
    type="button"
    class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
    on:click={carouselPrev}
  >
    <span
      class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
    >
      <svg
        aria-hidden="true"
        class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg
      >
      <span class="sr-only">Previous</span>
    </span>
  </button>
  <button
    type="button"
    class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
    on:click={carouselNext}
  >
    <span
      class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
    >
      <svg
        aria-hidden="true"
        class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg
      >
      <span class="sr-only">Next</span>
    </span>
  </button>
</div>
