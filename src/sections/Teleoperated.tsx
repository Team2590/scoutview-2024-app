import React from 'react'
import SectionWrapper from '../components/SectionWrapper'
import PlusMinus from '../components/PlusMinus'
import YesNo from '../components/YesNo'

export default function Teleoperated() {
    return (
        <SectionWrapper label='Teleoperated'>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col'>
                        <PlusMinus property='spkrMade_tp' label='Speaker Scored' />
                    </div>
                    <div className='col'>
                        <img src='speaker.png' alt='Speaker Image' className='d-block mx-auto' style={{ maxHeight: 200 }} />
                    </div>
                    <div className='col'>
                        <PlusMinus property='spkrMissed_tp' label='Speaker Missed' />
                    </div>
                </div>
                <div className='row my-5'>
                    <div className='col'>
                        <PlusMinus property='ampMade_tp' label='Amp Made' />
                    </div>
                    <div className='col'>
                        <img src='amp.png' alt='Amp Image' className='d-block mx-auto' style={{ maxHeight: 200 }} />
                    </div>
                    <div className='col'>
                        <PlusMinus property='ampMissed_tp' label='Amp Missed' />
                    </div>
                </div>
                <div>
                    <YesNo property='coopertition' label='Coopertition Button (Yellow Light)' />
                </div>
            </div>
        </SectionWrapper >
    )
}
