<script lang="ts">
  import Fa from 'svelte-fa'
  import { faUsers, faFire, faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'
  import type { CardData } from '$src/lib/components/card'
  import type { CarouselData } from '$src/lib/components/carousel'
  import Button from '$src/lib/components/Button.svelte'
  import Carousel from '$src/lib/components/Carousel.svelte'
  import Card from '$src/lib/components/Card.svelte'
  import AnchorButton from '$src/lib/components/AnchorButton.svelte'
  import type { AnimeData, StatsAPIResponse } from './+page'
  import { onMount } from 'svelte'

  const data: AnimeData[] = [
    {
      title: 'Koe no Katachi',
      description:
        'After transferring into a new school, a deaf girl, Shouko Nishimiya, is bullied by the popular Shouya Ishida. As Shouya continues to bully Shouko, the class turns its back on him. Shouko transfers and Shouya grows up as an outcast. Alone and depressed, the regretful Shouya finds Shouko to make amends.\n<br><br>\n(Source: Eleven Arts)',
      image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20954-UMb6Kl7ZL8Ke.jpg',
      link: 'https://youtube.com',
      tags: ['Drama', 'Romance', 'Slice of Life']
    },
    {
      title: 'Natsume Yuujinchou Go',
      description: 'The fifth season of <i>Natsume Yuujinchou</i>.',
      image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21710-Y20fKQviC3hL.jpg',
      tags: ['Drama', 'Fantasy', 'Slice of Life', 'Supernatural']
    },
    {
      title: 'Karakai Jouzu no Takagi-san',
      description:
        "Having a friend that knows you inside out should be a good thing, but in Nishikata's case, the opposite is true.<br>\n<br>\nHis classmate Takagi loves to tease him on a daily basis, and she uses her extensive knowledge of his behavior to predict exactly how he will react to her teasing, making it nearly impossible for Nishikata to ever make a successful comeback. Despite this, Nishikata vows to someday give Takagi a taste of her own medicine by making her blush out of embarrassment from his teasing.\n",
      image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx99468-XayCplkIL3Gf.png',
      tags: ['Tag 9']
    },
    {
      title: 'Gekkan Shoujo Nozaki-kun',
      description:
        "The boy of her dreams...is a girl's manga artist?!\n<br>\nTo the eyes of high school student Chiyo Sakura, classmate Umetarou Nozaki--brawny of build and brusque of tongue--is a dreamboat! When Chiyo finally works up the courage to tell Nozaki how she feels about him, she knows rejection is on the table...but getting recruited as a manga-ka's assistant?! Never in a million years!\n<br>\nBut for someone who makes a living drawing sweet girly romances, Nozaki-kun is a little slow on the uptake when it comes to matters of the heart in reality. And so Chiyo's daily life of manga making and heartache begins!<br><br>(Source: Yen Press)",
      image: 'https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/nx59211-ltc4FW9inrms.jpg',
      tags: ['Tag 10', 'Tag 11']
    },
    {
      title: 'ReLife',
      description:
        "When the responsibilities of being an adult and the ugly side of corporate bullying betrays one's childhood dreams, many would wish to return to their innocent childhood to relive their life and make the right decisions. Dumbfounded by the offer presented to him, 27-year-old Arata Kaizaki hopes to turn his life around through a once-in-a-lifetime opportunity.\n<br><br>\nReturning home from his part-time job, Arata is persuaded by Ryou Yoake, an employee of ReLife Research Institute, into participating in an experiment which will help him overcome his difficulties and re-enter corporate life. As part of the ReLife experiment, Arata's physique is reverted to that of a 17-year-old, and all he must do is relive his high school life for one year. Waiting for him at the end of the experiment is a job offer that he has been struggling to get ever since he left his first company.\n<br><br>\nWith few other options, he decides to go along with this plan. However, with adult-like tendencies and many years since his last formal education, Arata steps into an unexpectedly challenging territory—a normal day of high school.\n<br><br>(Source: MAL Rewrite)\n<br><br><i>Note: Includes 16 extra chapters</i>",
      image: 'https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/nx85849-TYAa7nhwSvbx.jpg'
    },
    {
      title: 'Isekai de Cheat Skill wo Te ni Shita Ore wa, Genjitsu Sekai wo mo Musou Suru: Level Up wa Jinsei wo Kaeta',
      description:
        "All his life, Yuuya has been bullied at school and neglected by his parents. After moving into his late grandfather's home, he discovers a strange door that seems to be calling out to him. Yuuya opens the door, steps inside, and is suddenly transported to a magical world! This new world holds rare treasures and grants him powerful skills, which he takes back to Earth for a new lease on life. (Source: Crunchyroll)",
      image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx153845-C47aoKy7wf19.jpg',
      tags: ['Action', 'Adventure', 'Fantasy', 'Romance']
    },
    {
      title: 'Kimi wa Houkago Insomnia',
      description:
        "Ganta Nakami is a high school student who suffers from insomnia. One day, he meets Isaki Magari, a girl with the same condition. A strange, but special relationship forms as they share a secret and catch up on their sleep in their school's abandoned observatory… (Source: HIDIVE)",
      image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx143653-h6NEdWxKIRza.png',
      tags: ['Romance', 'Slice of Life']
    },
    {
      title: 'Dr. STONE: NEW WORLD',
      description:
        'The third season of Dr. STONE. Senku and the Kingdom of Science sail to new lands to uncover more scientific secrets! (Source: Crunchyroll)',
      image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx131518-RU7RoUmGb2sP.jpg',
      tags: ['Action', 'Adventure', 'Comedy', 'Sci-Fi']
    },
    {
      title: 'Tomo-chan wa Onnanoko!',
      description:
        "Tomboy Tomo couldn't have picked a more awkward high school crush 'cause it's on her childhood friend, Junichiro, but he only sees her as one of the guys. Despite her pretty looks and signals, nothing gets through to this meathead! Will Junichiro ever realize Tomo's into him and see her for the cutesy girl she actually is?! (Source: Crunchyroll)",
      image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx151806-IAMi2ctI5xJI.jpg',
      tags: ['Comedy', 'Romance', 'Slice of Life']
    },
    {
      title: 'Isekai wa Smartphone to Tomo ni. 2',
      description: 'The second season of Isekai wa Smartphone to Tomo ni.',
      image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx147571-QvxjhZtVavTz.png',
      tags: ['Adventure', 'Fantasy', 'Romance']
    }
  ]

  const carouselData: CarouselData[] = data.map((item) => {
    return { image: item.image, title: item.title, subtitle: item.description, href: item.link } as CarouselData
  })

  const cardData: CardData[] = data.map((item) => {
    return { image: item.image, title: item.title, description: item.description, tags: item.tags }
  })

  let statsData: StatsAPIResponse | undefined
  onMount(async () => {
    statsData = (await fetch('https://api.animeworld.moe/v1/stats').then((x) => x.json())).data
  })
</script>

<div class="bg-blue-600 pt-16 sm:py-24 lg:py-32">
  <div class="container max-w-6xl relative mx-auto bg-blue-600 sm:bg-white rounded-lg">
    <img class="z-10 absolute max-h-full w-auto bottom-0 right-0" alt="" src="/assets/matsuri-crop.png" />
    <div class="flex flex-col p-12 md:p-16 lg:p-28 md:pr-0 h-4/6 w-full lg:w-3/5 gap-2 text-white sm:text-black">
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
          <span class="flex items-center text-[#fcda8a] gap-2"
            ><Fa icon={faUsers} />
            {#if !statsData?.memberCount}
              <div class="h-3 w-16 animate-pulse bg-slate-300 rounded-full" />
            {:else}
              {statsData.memberCount.toLocaleString()}
            {/if}
          </span>
          <span>Members</span>
        </span>
        <span class="flex items-center gap-2">
          <span class="flex items-center text-[#ff73fa] gap-2"
            ><Fa icon={faUsers} />
            {#if !statsData?.memberCount}
              <div class="h-3 w-16 animate-pulse bg-slate-300 rounded-full" />
            {:else}
              Level {statsData.boostLevel.toLocaleString()}
            {/if}
          </span>
          <span>Server Boost</span>
        </span>
      </div>
      <div class="z-10 grid grid-cols-1 lg:grid-cols-2 h-32 lg:h-12 mt-4 gap-4">
        <AnchorButton
          href="/redirect/discord"
          className="w-64 sm:w-72 max-w-full text-lg border-white sm:border-transparent box-border border-2"
          backgroundColor="bg-blue-600 sm:bg-[#f8c26d]"
          textColor="text-white"
          shadowColor="hover:shadow-[#f8c26d] shadow-[#f8c26d]/20">Join Now <Fa class="pl-2" icon={faFire} /></AnchorButton
        >
        <Button
          className="w-64 sm:w-72 max-w-full text-lg border-blue-600 sm:border-[#f8c26d] box-border border-2"
          textColor="text-blue-600 sm:text-[#f8c26d]"
          shadowColor="hover:shadow-[#f8c26d] shadow-[#f8c26d]/20">Take a Look <Fa class="pl-2" icon={faArrowTrendUp} /></Button
        >
      </div>
    </div>
    <div class="hidden sm:block max-h-full w-full z-0 ">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1128 279" fill="none">
        <defs>
          <linearGradient id="paint0_linear_93_260" x1="-6.32335e-07" y1="151.5" x2="1128" y2="151.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFF4AA" />
            <stop offset="0.3386" stop-color="#FAC56F" />
            <stop offset="0.6639" stop-color="#F4BD6A" />
            <stop offset="1" stop-color="#E3A35F" />
          </linearGradient>
        </defs>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 0C289.383 106.833 572.625 70.7309 1025.07 13.0616L1025.08 13.0603L1025.13 13.0547C1058.47 8.80408 1092.74 4.43631 1128 0V18C1092.75 22.3029 1058.48 26.5393 1025.13 30.6621L1025.13 30.6625L1025.08 30.6691L1025.07 30.6697C572.624 86.609 289.383 121.628 0 18V0ZM0 118V115V29C289.383 135.833 572.625 99.7309 1025.07 42.0616L1025.08 42.0603L1025.13 42.0546C1058.48 37.804 1092.74 33.4363 1128 29V115V118V150V161V161.5V164V250C838.617 143.167 555.375 179.269 102.928 236.938L102.918 236.94C69.5554 241.192 35.2729 245.562 0 250V164V161.5V161V150V118ZM1128 279C838.617 172.167 555.375 208.269 102.928 265.938C69.562 270.191 35.2762 274.561 0 279V261C35.2742 256.695 69.5581 252.456 102.922 248.331L102.928 248.33H102.928C555.375 192.391 838.617 157.372 1128 261V279Z"
          fill="url(#paint0_linear_93_260)"
        />
        <image width="288" height="172" x="38.257" y="51.827" xlink:href="/assets/matsuri-name.png" />
      </svg>
      <div class="h-[2rem]" />
    </div>
  </div>
</div>
<div class="bg-white pt-16">
  <div class="container max-w-6xl px-3 lg:px-0 md:mx-auto">
    <p class="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Discover Anime</p>
    <p class="text-2xl font-semibold uppercase my-4"><span class="text-blue-600">All-Time</span> Most Viewed</p>
    <Carousel data={carouselData} />
  </div>
  <div class="container max-w-6xl px-3 lg:px-0 md:mx-auto pt-16">
    <div class="flex">
      <p class="flex-grow mb-4 text-xl font-bold leading-none tracking-tight text-gray-600 uppercase">Trending Now</p>
      <p class="mb-4 text-xl font-semibold leading-none tracking-tight text-gray-600">Show More</p>
    </div>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {#each cardData.splice(0, 4) as item}
        <Card data={item} />
      {/each}
    </div>
  </div>
  <div class="container max-w-6xl px-3 lg:px-0 md:mx-auto pt-16">
    <div class="flex">
      <p class="flex-grow mb-4 text-xl font-bold leading-none tracking-tight text-gray-600 uppercase">Popular This Season</p>
      <p class="mb-4 text-xl font-semibold leading-none tracking-tight text-gray-600">Show More</p>
    </div>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {#each cardData as item}
        <Card data={item} />
      {/each}
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
