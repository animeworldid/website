import { type Writable, writable } from 'svelte/store'

const isScrolled: Writable<boolean> = writable(false)
const scrollOffset: Writable<number> = writable(0)

export { isScrolled, scrollOffset }
