import { useAtom } from 'jotai/react'
import React, { useEffect } from 'react'
import { dataAtom } from '../data'
import { defaultData } from './../data'
import SectionWrapper from '../components/SectionWrapper'
import QRCode from 'react-qr-code'
import YesNo from '../components/YesNo'
import CheckData from '../components/CheckData'

export const generateExportArray = (data: Data) => {
    const arr = new Array(23).fill(0)

    arr[0] = data.matchNum
    arr[1] = data.teamNum
    arr[23] = data.scoutName
    arr[2] = data.startingPos
    arr[3] = data.leaveWing
    arr[4] = data.spkrMade_atn
    arr[5] = data.spkrMissed_atn
    arr[6] = data.ampMade_atn
    arr[7] = data.ampMissed_atn
    arr[8] = data.spkrMade_tp
    arr[9] = data.spkrMissed_tp
    arr[10] = data.ampMade_tp
    arr[11] = data.ampMissed_tp
    arr[12] = data.coopertition
    arr[13] = data.climbLvl
    arr[14] = data.trap
    arr[17] = data.traverse
    arr[18] = data.twoRobot
    arr[21] = data.droppedHit

    return arr
}

export default function Export() {
    const [data, setData] = useAtom(dataAtom)

    const storeData = () => {
        const pastData = localStorage.getItem('nemesis-past-data') ? JSON.parse(localStorage.getItem('nemesis-past-data')!) : []
        pastData.push(data)
        localStorage.setItem('nemesis-past-data', JSON.stringify(pastData))
    }

    const resetData = () => {
        storeData()
        setData({ ...defaultData, scoutName: data.scoutName, matchNum: '', teamNum: '' })
    }

    const exportData = generateExportArray(data)

    useEffect(() => {
        console.log(JSON.stringify(exportData))
    }, [data])

    return (
        <SectionWrapper label='Export'>
            <div className='mx-auto text-center mt-5'>
                <QRCode
                    value={JSON.stringify(exportData)}
                    bgColor='white'
                    // fgcolor='black'
                    size={384}
                    style={{ border: '20px solid white' }}
                />
            </div>
            <div className='text-center mt-3'>
                <CheckData />
            </div>
            <button
                className='btn btn-success rounded-0 w-100 text-white py-5 position-absolute bottom-0'
                style={{ fontSize: '1.75rem' }}
                onClick={resetData}
            >
                Clear
            </button>
        </SectionWrapper>
    )
}
