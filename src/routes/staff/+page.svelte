<script lang="ts">
  import Loader from "$src/lib/components/Loader.svelte"
  import { onMount } from "svelte"
  import type { MembershipAPIResponse } from "./+page"

  let membershipData: MembershipAPIResponse|undefined;
  onMount(async () => {
    membershipData = (await fetch("https://api.animeworld.moe/v1/membership")
      .then(x => x.json())).data;
  })
</script>

<div class="bg-blue-600 pt-16 sm:py-24 lg:py-32 text-white text-center">
  <div class="h-[3rem]"></div>
  <h1 class="uppercase font-bold text-4xl">Staff</h1>
  <h2 class="text-xl mt-2 font-light">Get to Know the Awesome Staff of Anime World Indonesia</h2>
  <div class="h-[1.5rem]"></div>
</div>

<svg xmlns="http://www.w3.org/2000/svg" class="w-full relative -inset-y-[6.2rem]" viewBox="0 0 1440 95" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M1440 94.389C893 -31.463 550 -31.463 0 94.389V95H1440V94.389Z" fill="#F9F9F9"/>
</svg>

<div class="relative -inset-y-10 container max-w-6xl px-3 lg:px-0 md:mx-auto">
  <section>
    {#if membershipData === undefined}
      <Loader className=""/>
    {:else}
      <div class="flex flex-col gap-y-14">
        {#each membershipData.staff as staff, i}
          <div>
            <div class="flex items-center justify-center gap-x-2" style="color: {staff.color};">
              <h1 class="font-semibold text-lg whitespace-nowrap">{staff.title}</h1>
              {#if staff.icon !== ""}
                <img src="{staff.icon}" width="24px" height="24px" alt="Role Icon">
              {/if}
              <div class="h-[1.6px] w-full" style="background-color: {staff.color}; "></div>
            </div>
            <div class="h-[2rem]"></div>
            <div class="flex flex-wrap gap-5 gap-x-10 items-center justify-center">
              {#each staff.members as member}
                {#if !membershipData.staff.slice(0, i).some(x => x.members.some(y => y.id === member.id))}
                <div class="flex flex-col gap-y-4 font-bold text-lg justify-center items-center">
                  <img
                    style="border-color: {member.color};" 
                    class="rounded-full border-[3px]"
                    src="{member.avatarURL}" alt="{member.username} Avatar"
                    height="125px"
                    width="125px">
                  <h1>{member.username}#{member.discriminator}</h1>
                </div>
                {/if}
                
              {/each}
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </section>
</div>

<style>
</style>
