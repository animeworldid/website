<script lang="ts">
  import Fa from 'svelte-fa'
  import { faBilibili } from '@fortawesome/free-brands-svg-icons'
  import { faUsers, faFire, faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'
  import Button from '$src/lib/components/Button.svelte'
</script>

<div class="bg-blue-600 py-16 sm:pt-24 lg:pt-32">
  <div class="container max-w-6xl relative mx-auto bg-blue-600 sm:bg-white rounded-lg">
    <div class="hidden sm:block absolute max-h-full w-full bottom-20 left-0 origin-bottom-left">
      <img class="max-h-full w-1/3 px-8 sm:translate-y-32 md:translate-y-36 lg:translate-y-56" alt="" src="/assets/matsuri-name.png" />
      <svg class="max-h-full w-full" viewBox="0 0 1128 279" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 0C289.383 106.833 572.625 70.7309 1025.07 13.0616L1025.08 13.0603L1025.13 13.0547C1058.47 8.80408 1092.74 4.43631 1128 0V18C1092.75 22.3029 1058.48 26.5393 1025.13 30.6621L1025.13 30.6625L1025.08 30.6691L1025.07 30.6697C572.624 86.609 289.383 121.628 0 18V0ZM0 118V115V29C289.383 135.833 572.625 99.7309 1025.07 42.0616L1025.08 42.0603L1025.13 42.0546C1058.48 37.804 1092.74 33.4363 1128 29V115V118V150V161V161.5V164V250C838.617 143.167 555.375 179.269 102.928 236.938L102.918 236.94C69.5554 241.192 35.2729 245.562 0 250V164V161.5V161V150V118ZM1128 279C838.617 172.167 555.375 208.269 102.928 265.938C69.562 270.191 35.2762 274.561 0 279V261C35.2742 256.695 69.5581 252.456 102.922 248.331L102.928 248.33H102.928C555.375 192.391 838.617 157.372 1128 261V279Z"
          fill="url(#paint0_linear_93_260)"
        />
        <defs>
          <linearGradient id="paint0_linear_93_260" x1="-6.32335e-07" y1="151.5" x2="1128" y2="151.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFF4AA" />
            <stop offset="0.338591" stop-color="#FAC56F" />
            <stop offset="0.663937" stop-color="#F4BD6A" />
            <stop offset="1" stop-color="#E3A35F" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <img class="absolute max-h-[70vh] sm:max-h-full w-auto bottom-0 right-0" alt="" src="/assets/matsuri-crop.png" />

    <div class="flex flex-col p-8 md:p-16 lg:p-28 md:pr-0 h-[80vh] w-full lg:w-3/5 gap-2 text-white sm:text-black">
      <div
        class="text-white sm:text-transparent text-5xl md:text-6xl font-bold uppercase bg-gradient-to-r from-[#FFF4AA] via-30% via-[#FAC56F] to-[#E3A35F] bg-clip-text text-transparent"
      >
        Anime <span class="text-blue-600 sm:text-white bg-white sm:bg-gradient-to-r from-[#FAC56F] to-[#E3A35F] bg-clip-text text-highlight"
          >World</span
        >
        Indonesia
      </div>
      <div class="z-10">Indonesia's Largest Anime Discord Community</div>
      <div class="z-10 font-bold">
        Currently our Discord community has
        <span class="flex items-center gap-2">
          <span class="flex items-center text-[#fcda8a] gap-2"><Fa icon={faUsers} />99.999</span>
          <span>Members</span>
        </span>
        <span class="flex items-center gap-2">
          <span class="flex items-center text-[#ff73fa] gap-2"><Fa icon={faUsers} />Level 3</span>
          <span>Server Boost</span>
        </span>
      </div>
      <div class="z-10 font-bold">
        <p>Our partner</p>
        <span class="flex items-center text-[#3996e8] gap-2">
          <Fa icon={faBilibili} />
          <span>Bilibili.tv</span>
        </span>
      </div>
      <div class="z-10 grid grid-cols-1 lg:grid-cols-2 h-32 lg:h-12 mt-4 gap-4">
        <Button
          className="w-64 sm:w-72 max-w-full text-xl border-white sm:border-transparent box-border border-2"
          backgroundColor="bg-blue-600 sm:bg-[#f8c26d]"
          textColor="text-white">Join Now <Fa class="pl-2" icon={faFire} /></Button
        >
        <Button
          className="w-64 sm:w-72 max-w-full text-xl border-blue-600 sm:border-[#f8c26d] box-border border-2"
          textColor="text-blue-600 sm:text-[#f8c26d]">Take a Look <Fa class="pl-2" icon={faArrowTrendUp} /></Button
        >
      </div>
    </div>
  </div>
</div>

<style>
  .text-highlight {
    stroke: transparent;
    stroke-width: 3px;
    -webkit-text-stroke: 3px transparent;
  }
</style>
