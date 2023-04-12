<script lang="ts">
  import Fa from 'svelte-fa'
  import { faFacebook, faInstagram, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
</script>

<footer class="bg-blue-600 mt-16">
  <div class="container max-w-6xl mx-auto p-4 py-6 lg:py-8">
    <div class="md:flex md:justify-between">
      <div class="flex flex-col mb-6 md:mb-0">
        <a href="/" class="flex items-center">
          <img src="/assets/logo.png" class="h-32" alt="Anime World" />
        </a>
        <div class="md:max-w-sm lg:max-w-md">
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
      <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <h2 class="mb-6 text-sm font-semibold uppercase text-white">Links</h2>
          <ul class="text-white font-medium">
            <li class="mb-4">
              <a href="https://flowbite.com/" class="hover:underline">Link 1</a>
            </li>
            <li>
              <a href="https://tailwindcss.com/" class="hover:underline">Link 2</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold uppercase text-white">Links</h2>
          <ul class="text-white font-medium">
            <li class="mb-4">
              <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Link 1</a>
            </li>
            <li>
              <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Link 2</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold uppercase text-white">Links</h2>
          <ul class="text-white font-medium">
            <li class="mb-4">
              <a href="/#" class="hover:underline">Link 1</a>
            </li>
            <li>
              <a href="/#" class="hover:underline">Link 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-between">
      <span class="text-sm text-white">© 2023 <a href="/" class="hover:underline">Anime World Indonesia</a>. All Rights Reserved. </span>
      <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0 text-white">
        <a href="/#">
          <Fa icon={faFacebook} />
          <span class="sr-only">Facebook page</span>
        </a>
        <a href="/#">
          <Fa icon={faInstagram} />
          <span class="sr-only">Instagram page</span>
        </a>
        <a href="/#">
          <Fa icon={faTwitter} />
          <span class="sr-only">Twitter page</span>
        </a>
        <a href="/#">
          <Fa icon={faGithub} />
          <span class="sr-only">GitHub account</span>
        </a>
      </div>
    </div>
  </div>
</footer>
