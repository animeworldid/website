<script lang="ts">
  import Loader from "$src/lib/components/Loader.svelte"
  import { onMount } from "svelte"
  import type { MembershipAPIResponse } from "./+page"

  let membershipData: MembershipAPIResponse|undefined;
  onMount(async () => {
    membershipData = (await fetch("/member.json")
      .then(x => x.json())).data;
  })
</script>

<div class="bg-blue-600 pt-16 sm:py-24 lg:py-32 text-white text-center">
  <h1 class="uppercase font-bold text-4xl">Staff</h1>
  <div class="h-[3rem]"></div>
</div>

<div class="h-[2rem]"></div>
<div class="container max-w-6xl px-3 lg:px-0 md:mx-auto">
  <section>
    {#if membershipData === undefined}
      <Loader className=""/>
    {:else}
      <div class="flex items-center justify-center gap-x-2 text-[#FF5D5D]">
        <h1 class="font-semibold text-lg whitespace-nowrap">Head Admin</h1>
        <img src="/vip-crown-fill.png" width="24px" height="24px" alt="Crown">
        <div class="h-[1.6px] bg-[#FF5D5D] w-full"></div>
      </div>
      <div class="h-[2rem]"></div>
      <div class="flex flex-wrap gap-5 gap-x-10 items-center justify-center">
        {#each membershipData.staff[0].members as member}
          <div class="flex flex-col gap-y-4 font-bold text-lg justify-center items-center">
            <img
              style="border-color: {member.color};" 
              class="rounded-full border-[3px]"
              src="{member.avatarURL}" alt="{member.username} Avatar"
              height="125px"
              width="125px">
            <h1>{member.username}#{member.discriminator}</h1>
          </div>
        {/each}
      </div>
    {/if}
  </section>
</div>

<style>
</style>
