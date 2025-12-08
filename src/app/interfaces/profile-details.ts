export interface ProfileDetails {
    name: string
    position: string
    photo: string
    history: Array<ProfileHistory>
}

export interface ProfileHistory {
    name: string
    type: string
    position: string
    duration: string
    details: string
}