<script lang="ts">
  import Loader from '$src/lib/components/Loader.svelte'
  import { onMount } from 'svelte'
  import type { PageData } from './$types'

  export let data: PageData

  onMount(() => {
    if (window) {
      window.location.href = data.dest
    }
  })
</script>

<div class="bg-blue-600 pt-16 sm:pt-24 lg:pt-32 text-white text-center flex flex-col justify-between items-center">
  <div class="h-[2rem]" />
  <h1 class="uppercase font-bold text-4xl">Redirecting You</h1>
  <h2 class="text-xl mt-2 font-light">You are being redirected to <span class="text-[blue] font-bold">{data.dest}</span></h2>
  <div class="h-[4rem]" />
  <svg xmlns="http://www.w3.org/2000/svg" class="w-full" viewBox="0 0 1440 95" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1440 94.389C893 -31.463 550 -31.463 0 94.389V95H1440V94.389Z" fill="#F9F9F9" />
  </svg>
</div>

<br />
<div class="container max-w-6xl px-3 lg:px-0 md:mx-auto">
  <section>
    <Loader />
  </section>
</div>
