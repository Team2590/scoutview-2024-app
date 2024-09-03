export const generateExportArray = (data: Data) => {
    return Object.keys(data).map(key => (data as any)[key])
    // const arr = new Array(23).fill(0)

    // arr[0] = data.matchNum
    // arr[1] = data.teamNum
    // arr[23] = data.scoutName
    // arr[2] = data.startingPos
    // arr[3] = data.leaveWing
    // arr[4] = data.spkrMade_atn
    // arr[5] = data.spkrMissed_atn
    // arr[6] = data.ampMade_atn
    // arr[7] = data.ampMissed_atn
    // arr[8] = data.spkrMade_tp
    // arr[9] = data.spkrMissed_tp
    // arr[10] = data.ampMade_tp
    // arr[11] = data.ampMissed_tp
    // arr[12] = data.coopertition
    // arr[13] = data.climbLvl
    // arr[14] = data.trap
    // arr[17] = data.traverse
    // arr[18] = data.twoRobot
    // arr[21] = data.droppedHit
    // arr[22] = data.notesFed

    // return arr
}