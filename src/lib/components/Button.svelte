<script lang="ts">
  export let className: string | null = null
  export let backgroundColor: string | null = null
  export let textColor: string | null = null
</script>

<button
  class="align-middle justify-center items-center select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs rounded-md shadow-2xl shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500 active:opacity-[0.85] flex h-full w-full {backgroundColor ??
    'bg-white'} {textColor ?? 'text-black'} {className ?? ''}"
>
  <slot />
</button>
