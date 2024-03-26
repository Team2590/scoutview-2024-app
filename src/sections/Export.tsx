import { useAtom } from 'jotai/react'
import React from 'react'
import { dataAtom } from '../data'
import { defaultData } from './../data'
import SectionWrapper from '../components/SectionWrapper'
import QRCode from 'react-qr-code'
import YesNo from '../components/YesNo'
import CheckData from '../components/CheckData'

export const generateExportArray = (data: Data) => {
    return [
        data.matchNum,
        data.teamNum,
        data.startingPos,
        data.leaveWing,
        data.spkrMade_atn,
        data.spkrMade_atn,
        data.ampMade_atn,
        data.ampMissed_atn,
        data.spkrMade_tp,
        data.spkrMissed_tp,
        data.ampMade_tp,
        data.ampMissed_tp,
        data.coopertition,
        data.climbLvl,
        data.trap,
        data.traverse,
        data.twoRobot,
        null,
        null,
        data.droppedHit,
        null,
        data.scoutName
    ]
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

    return (
        <SectionWrapper label='Export'>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col'>
                        <YesNo property='traverse' label='Traverse Chain?' />
                    </div>
                    <div className='col'>
                        <YesNo property='twoRobot' label='Two Robots?' />
                    </div>
                </div>
                <div className='mt-md-5 mt-lg-0'>
                    <YesNo property='droppedHit' label='Dropped When Hit?' />
                </div>
            </div>
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
                className='btn btn-success rounded-0 w-100 text-white py-5 mt-5'
                style={{ fontSize: '1.75rem' }}
                onClick={resetData}
            >
                Clear
            </button>
        </SectionWrapper>
    )
}
