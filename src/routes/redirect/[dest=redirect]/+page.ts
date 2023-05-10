import { links } from '$src/lib/stores/redirect.js'
import { error } from '@sveltejs/kit'

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  const link = links.find((x) => x.name === params.dest)
  if (link) {
    return {
      dest: link.dest
    }
  }

  throw error(404, 'Not found')
}
