<script lang="ts">
  import Fa from 'svelte-fa'
  import { faInstagram, faTwitter, faGithub, faYoutube, faTwitch, faBilibili, faTiktok } from '@fortawesome/free-brands-svg-icons'
</script>

<footer class="bg-[url('/footer_bg.svg')] bg-cover bg-no-repeat bg-center mt-16">
  <div class="z-10 relative container max-w-6xl mx-auto p-4 py-6 lg:py-8">
    <div class="md:flex md:justify-between">
      <div class="flex flex-col mb-6 md:mb-0">
        <a href="/" class="flex items-center">
          <img src="/assets/logo.png" class="h-32" alt="Anime World" />
        </a>
        <div class="md:max-w-sm lg:max-w-md flex flex-col gap-y-4">
          <p class="block text-white">
            Anime World Indonesia is the largest anime lover community in Indonesia based on the social media platform Discord. We provide various
            services and activities related to anime, such as discussion, trivia, fan art, streaming, and more.
          </p>
          <p class="block text-white">
            We also collaborate with some parties related to the anime industry in Indonesia, such as distributors, studios, media, and other
            communities. We have a vision to be a place for anime fans in Indonesia to share, learn, and have fun.
          </p>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-8 sm:gap-6">
        <div>
          <h2 class="mb-6 text-sm font-semibold uppercase text-white">Website</h2>
          <ul class="text-white font-medium flex flex-col gap-y-4">
            <li>
              <a href="/" class="hover:underline">Home</a>
            </li>
            <li>
              <a href="/staff" class="hover:underline">Staff</a>
            </li>
            <li>
              <a href="/membership" class="hover:underline">Membership</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold uppercase text-white">Projects</h2>
          <ul class="text-white font-medium flex flex-col gap-y-4">
            <li>
              <a href="/redirect/matsuri" class="hover:underline ">Matsuri</a>
            </li>
            <li>
              <a href="/redirect/git-website" class="hover:underline">This Website</a>
            </li>
            <li>
              <a href="/redirect/github" class="hover:underline">Our GitHub</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-between">
      <span class="text-sm text-white">© 2023 <a href="/" class="hover:underline">Anime World Indonesia</a>. All Rights Reserved. </span>
      <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0 text-white">
        <a href="/redirect/youtube" target="_blank">
          <Fa icon={faYoutube} />
          <span class="sr-only">YouTube page</span>
        </a>
        <a href="/redirect/twitch" target="_blank">
          <Fa icon={faTwitch} />
          <span class="sr-only">Twitch page</span>
        </a>
        <a href="/redirect/bilibili" target="_blank">
          <Fa icon={faBilibili} />
          <span class="sr-only">Bilibili page</span>
        </a>
        <a href="/redirect/instagram" target="_blank">
          <Fa icon={faInstagram} />
          <span class="sr-only">Instagram account</span>
        </a>
        <a href="/redirect/github" target="_blank">
          <Fa icon={faGithub} />
          <span class="sr-only">GitHub account</span>
        </a>
        <a href="/redirect/twitter" target="_blank">
          <Fa icon={faTwitter} />
          <span class="sr-only">Twitter account</span>
        </a>
        <a href="/redirect/tiktok" target="_blank">
          <Fa icon={faTiktok} />
          <span class="sr-only">TikTok account</span>
        </a>
      </div>
    </div>
  </div>
  <div class="h-[1rem]" />
</footer>
