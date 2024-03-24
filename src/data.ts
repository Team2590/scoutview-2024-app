import { atomWithStorage } from "jotai/utils"

export const defaultData: Data = {
    matchNum: 0,
    teamNum: 0,
    scoutName: '',
    startingPos: null,
    leaveWing: null,
    spkrMade_atn: 0,
    spkrMissed_atn: 0,
    ampMade_atn: 0,
    ampMissed_atn: 0,
    spkrMade_tp: 0,
    spkrMissed_tp: 0,
    ampMade_tp: 0,
    ampMissed_tp: 0,
    coopertition: null,
    climbLvl: null,
    trap: null,
    traverse: null,
    twoRobot: null,
    droppedHit: null
}

export const dataAtom = atomWithStorage('nemesis-data', defaultData)