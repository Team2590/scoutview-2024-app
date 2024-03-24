import { useAtom } from 'jotai/react'
import React from 'react'
import { dataAtom } from '../data'
import { defaultData } from './../data'
import SectionWrapper from '../components/SectionWrapper'
import QRCode from 'react-qr-code'
import YesNo from '../components/YesNo'

export default function Export() {
    const [data, setData] = useAtom(dataAtom)

    const resetData = () => {
        setData({ ...defaultData, scoutName: data.scoutName })
    }

    const exportData = [
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
            <div className='row mt-5'>
                <div className='col'>
                    <YesNo property='traverse' label='Traverse Chain?' />
                </div>
                <div className='col'>
                    <YesNo property='twoRobot' label='Two Robots?' />
                </div>
            </div>
            <div>
                <YesNo property='droppedHit' label='Dropped When Hit?' />
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
