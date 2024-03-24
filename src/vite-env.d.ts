/// <reference types="vite/client" />
type Data = {
    matchNum: number
    teamNum: number
    scoutName: string
    startingPos: "A" | "B" | "C" | "D" | ""
    leaveWing: boolean | ""
    spkrMade_atn: number
    spkrMissed_atn: number
    ampMade_atn: number
    ampMissed_atn: number
    spkrMade_tp: number
    spkrMissed_tp: number
    ampMade_tp: number
    ampMissed_tp: number
    coopertition: boolean | ""
    climbLvl: "Parked" | "Climb" | "Mic" | "N/A" | ""
    trap: number
    traverse: boolean | ""
    twoRobot: boolean | ""
    droppedHit: boolean | ""
}