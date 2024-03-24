import { atomWithStorage } from "jotai/utils"

export const defaultData: Data = {
    matchNum: 0,
    teamNum: 0,
    scoutName: '',
    startingPos: '',
    leaveWing: '',
    spkrMade_atn: 0,
    spkrMissed_atn: 0,
    ampMade_atn: 0,
    ampMissed_atn: 0,
    spkrMade_tp: 0,
    spkrMissed_tp: 0,
    ampMade_tp: 0,
    ampMissed_tp: 0,
    coopertition: '',
    climbLvl: '',
    trap: 0,
    traverse: '',
    twoRobot: '',
    droppedHit: ''
}

export const dataAtom = atomWithStorage('nemesis-data', defaultData)