import { links } from '$src/lib/stores/redirect'

export function match(value: string) {
  return links.some((x) => x.name === value)
}
