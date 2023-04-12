<script lang="ts">
  export let className: string | null = null
  export let backgroundColor = 'bg-white'
  export let textColor = 'text-black'
  export let shadowColor = 'hover:shadow-blue-500 shadow-blue-500/20'
</script>

<button
  class="align-middle justify-center items-center select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs rounded-md shadow-2xl hover:shadow-lg {shadowColor} active:opacity-[0.85] flex h-full w-full {backgroundColor} {textColor} {className ??
    ''}"
>
  <slot />
</button>
