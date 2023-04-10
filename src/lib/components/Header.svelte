<script lang="ts">
  import Button from './Button.svelte'
  import { isScrolled } from '$lib/stores/page'
  import Fa from 'svelte-fa'
  import { faCrown } from '@fortawesome/free-solid-svg-icons'
</script>

<header>
  <div class="fixed z-50 w-full flex-wrap items-center {$isScrolled ? 'bg-blue-600' : 'bg-blue-600'}">
    <nav class="mx-auto w-full max-w-screen-xl p-6 py-4 lg:py-8">
      <div class="flex items-stretch justify-between">
        <div class="flex flex-grow w-fit items-center">
          <a href="/">
            <img class="hidden sm:block h-16" src="/assets/logo.png" alt="Anime World" />
            <img class="block sm:hidden h-8" src="/assets/logo-small.png" alt="Anime World" />
          </a>
          <ul class="hidden md:flex gap-4 lg:gap-12 mx-4 text-white uppercase">
            <li><a class="border-b-2 border-transparent hover:border-white transition-colors" href="/">Home</a></li>
            <li><a class="border-b-2 border-transparent hover:border-white transition-colors" href="/">Staff</a></li>
            <li><a class="border-b-2 border-transparent hover:border-white transition-colors" href="/">Discover</a></li>
            <li>
              <a class="border-b-2 border-transparent hover:border-white transition-colors flex items-center" href="/">
                <Fa class="pr-2" icon={faCrown} /> Membership
              </a>
            </li>
          </ul>
        </div>
        <div class="hidden sm:flex gap-4 min-w-[250px] py-2">
          <a class="basis-1/2" href="/" rel="noreferrer">
            <Button backgroundColor="bg-transparent" textColor="text-white" className="border-white box-border border-2">Join Discord</Button>
          </a>
          <a class="basis-1/2" href="/" rel="noreferrer">
            <Button>Sign In</Button>
          </a>
        </div>
      </div>
    </nav>
  </div>
</header>
