import React from 'react'
import SectionWrapper from '../components/SectionWrapper'
import PlusMinus from '../components/PlusMinus'
import YesNo from '../components/YesNo'

export default function Teleoperated() {
    return (
        <SectionWrapper label='Teleoperated'>
            <div className='container'>
                <div className='input-row my-5'>
                    <PlusMinus property='spkrMade_tp' label='Speaker Scored' />
                    <img src='speaker.png' alt='Speaker Image' className='d-block mx-auto' style={{ maxHeight: 200 }} />
                    <PlusMinus property='spkrMissed_tp' label='Speaker Missed' />
                </div>
                <div className='input-row'>
                    <PlusMinus property='ampMade_tp' label='Amp Made' />
                    <img src='amp.png' alt='Amp Image' className='d-block mx-auto' style={{ maxHeight: 200 }} />
                    <PlusMinus property='ampMissed_tp' label='Amp Missed' />
                </div>
                <div className='input-row my-5'>
                    <div className='mx-auto'>
                        <YesNo property='coopertition' label='Coopertition Button (Yellow Light)' />
                    </div>
                    <div className='mx-auto'>
                        <PlusMinus property='notesFed' label='Notes Fed/Passed' />
                    </div>
                </div>
            </div>
        </SectionWrapper >
    )
}
