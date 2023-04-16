<script lang="ts">
  import '$src/app.css'
  import Header from '$src/lib/components/Header.svelte'
  import { isScrolled, scrollOffset } from '$lib/stores/page'
  import Footer from '$src/lib/components/Footer.svelte'

  function scrollDetect(el: Event): void {
    const scrollTop = (el.target as Document).scrollingElement?.scrollTop ?? 0
    const scrollHeight = (el.target as Document).scrollingElement?.scrollHeight ?? 0
    const clientHeight = (el.target as Document).scrollingElement?.clientHeight ?? 0
    $isScrolled = scrollTop > 100
    $scrollOffset = scrollHeight - clientHeight - scrollTop
  }
</script>

<svelte:window on:scroll={scrollDetect} />
<div class="w-screen max-w-full overflow-x-hidden overflow-y-auto">
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</div>
