export interface AnimeData {
  title: string
  description: string
  image: string
  season?: number
  year?: number
  rating?: number
  tags?: string[]
  link?: string
}

export interface StatsAPIResponse {
  memberCount: number
  boostLevel: number
}
