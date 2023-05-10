export interface MembershipPayload {
  avatarURL?: string
  id?: string
  username?: string
  discriminator?: string
  color?: string
  title?: string
}

export interface Role {
  id: string
  title: string
  icon: string
  color: string
}

export interface MembershipAPIResponse {
  staff: (Role & { members: MembershipPayload[] })[]
  members: (Role & { members: MembershipPayload[] })[]
}
