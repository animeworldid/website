<script lang="ts">
  import Loader from '$src/lib/components/Loader.svelte'
  import { onMount } from 'svelte'
  import type { MembershipAPIResponse } from './+page'
  import { PUBLIC_API_ENDPOINT } from '$env/static/public'
  import Meta from '$src/lib/components/Meta.svelte'

  let membershipData: MembershipAPIResponse | undefined
  onMount(async () => {
    membershipData = (await fetch(new URL(`${PUBLIC_API_ENDPOINT}/membership`)).then((x) => x.json())).data
  })
</script>

<Meta title="Membership" />
<div class="bg-blue-600 pt-16 sm:pt-24 lg:pt-32 text-white text-center flex flex-col justify-between items-center">
  <div class="h-[2rem]" />
  <h1 class="uppercase font-bold text-4xl">Supporter</h1>
  <h2 class="text-xl mt-2 font-light">Meet supporters of Anime World Indonesia</h2>
  <div class="h-[4rem]" />
  <svg xmlns="http://www.w3.org/2000/svg" class="w-full" viewBox="0 0 1440 95" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1440 94.389C893 -31.463 550 -31.463 0 94.389V95H1440V94.389Z" fill="#F9F9F9" />
  </svg>
</div>

<br />
<div class="container max-w-6xl px-3 lg:px-0 md:mx-auto">
  <section>
    {#if membershipData === undefined}
      <Loader />
    {:else}
      <div class="flex flex-col gap-y-14">
        {#each (membershipData.members ?? []) as memberRole, i}
          <div>
            <div class="flex items-center justify-center gap-x-2" style="color: {memberRole.color};">
              <h1 class="font-semibold text-lg whitespace-nowrap">{memberRole.title}</h1>
              {#if memberRole.icon}
                <img src={memberRole.icon} width="24px" height="24px" alt="Role Icon" />
              {/if}
              <div class="h-[1.6px] w-full" style="background-color: {memberRole.color}; " />
            </div>
            <div class="h-[2rem]" />
            <div class="flex flex-wrap gap-5 gap-x-10 items-center justify-center">
              {#each (memberRole.members ?? []) as member}
                {#if !membershipData.staff?.slice(0, i).some((x) => x.members.some((y) => y.id === member.id))}
                  <div class="flex flex-col gap-y-4 font-bold text-lg justify-center items-center">
                    <img
                      style="border-color: {member.color};"
                      class="rounded-full border-[3px]"
                      src={member.avatarURL}
                      alt="{member.username} Avatar"
                      height="125px"
                      width="125px"
                    />
                    <h1>{member.username}</h1>
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
