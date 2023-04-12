<script lang="ts">
  import Fa from 'svelte-fa'
  import { faStar } from '@fortawesome/free-solid-svg-icons'
  import type { CardData } from '$src/lib/components/card'
  export let data: CardData
</script>

<div class="relative h-56 overflow-hidden rounded-lg md:h-96 z-20">
  <div class="relative">
    <img src={data.image} class="absolute w-full" alt="..." />
  </div>
  <div class="absolute flex flex-col justify-between h-full w-full">
    <div class="flex justify-between p-2 sm:p-4 text-white bg-gradient-to-b from-black/60 to-transparent">
      <p class="overflow-hidden line-clamp-2 md:hover:line-clamp-4 text-md md:text-xl">{data.title}</p>
      <span class="inline-flex h-fit items-center font-bold text-blue-400 ml-2"><Fa icon={faStar} />10.0</span>
    </div>
    <div class="p-2 sm:p-4 text-white bg-gradient-to-t from-black/80 via-60% via-black/60 to-transparent overflow-clip">
      <p class="overflow-hidden line-clamp-2 md:line-clamp-4 md:hover:line-clamp-6 text-xs md:text-sm">{data.description}</p>
      {#if data.tags}
        <div class="flex pt-2 hover:-translate-x-1/2 ease-linear transition duration-[2000ms]">
          {#each data.tags as tag}
            <span
              class="inline-flex bg-blue-100 text-blue-800 text-xs font-medium whitespace-nowrap mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"
            >
              {tag}
            </span>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</div>
