export interface Details {
    name: string
    position: string
    photo: string
    history: Array<History>
}

export interface History {
    name: string
    type: string
    position: string
    duration: string
    details: string
}