import React, { useEffect, useLayoutEffect, useState } from 'react'
import SectionWrapper from '../components/SectionWrapper'
import YesNo from '../components/YesNo'
import SelectInput from '../components/SelectInput'
import PlusMinus from '../components/PlusMinus'

export default function Autonomous() {
    const [cols, setCols] = useState(true)

    const isMobile = window.innerWidth < 768

    const changeButtonOrientation = () => {
        if (window.innerWidth < 1080) {
            setCols(false)
        } else {
            setCols(true)
        }
    }

    useLayoutEffect(() => {
        changeButtonOrientation()
        window.addEventListener('resize', changeButtonOrientation)
        window.addEventListener('orientationchange', changeButtonOrientation)
    }, [])

    useEffect(() => {
        return () => {
            window.removeEventListener('resize', changeButtonOrientation)
            window.removeEventListener('orientationchange', changeButtonOrientation)
        }
    }, [])

    return (
        <SectionWrapper label='Autonomous'>
            <div className='container'>
                <img src='field.jpg' alt='Field Image' className='d-block mx-auto mt-5 img-fluid' />
                <div className={`mt-4 ${cols ? 'row' : ''}`}>
                    <div className='col mx-auto'>
                        <SelectInput property='startingPos' label='Starting Position' options={['A', 'B', 'C', 'D']} />
                    </div>
                    <div className='col mx-auto mt-md-4 mt-lg-0'>
                        <YesNo property='leaveWing' label='Leave Start Line?' />
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col'>
                        <PlusMinus property='spkrMade_atn' label='Speaker Scored' />
                    </div>
                    <div className='col'>
                        <img src='speaker.png' alt='Speaker Image' className='d-block mx-auto' style={{ maxHeight: 200 }} />
                    </div>
                    <div className='col'>
                        <PlusMinus property='spkrMissed_atn' label='Speaker Missed' />
                    </div>
                </div>
                <div className='row my-5'>
                    <div className='col'>
                        <PlusMinus property='ampMade_atn' label='Amp Made' />
                    </div>
                    <div className='col'>
                        <img src='amp.png' alt='Amp Image' className='d-block mx-auto' style={{ maxHeight: 200 }} />
                    </div>
                    <div className='col'>
                        <PlusMinus property='ampMissed_atn' label='Amp Missed' />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}
