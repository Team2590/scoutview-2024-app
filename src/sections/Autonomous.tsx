import { useLayoutEffect, useState } from 'react'
import SectionWrapper from '../components/SectionWrapper'
import YesNo from '../components/YesNo'
import SelectInput from '../components/SelectInput'
import PlusMinus from '../components/PlusMinus'
import Field from '../components/Field'

export default function Autonomous() {
    const [cols, setCols] = useState(true)

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

        return () => {
            window.removeEventListener('resize', changeButtonOrientation)
            window.removeEventListener('orientationchange', changeButtonOrientation)
        }
    }, [])

    return (
        <SectionWrapper label='Autonomous'>
            <div className='container mx-auto'>
                <Field />
                <div className={`mt-4 ${cols ? 'row' : ''}`}>
                    <div className='col mx-auto mb-4 mb-xl-0'>
                        <SelectInput property='startingPos' label='Starting Position' options={['A', 'B', 'C', 'D']} />
                    </div>
                    <div className='col mx-auto mt-md-5 mt-lg-0'>
                        <YesNo property='leaveWing' label='Leave Start Line?' />
                    </div>
                </div>
                <div className='input-row mt-5'>
                    <PlusMinus property='spkrMade_atn' label='Speaker Scored' />
                    <img src='speaker.png' alt='Speaker Image' className='d-block mx-auto' style={{ maxHeight: 200 }} />
                    <PlusMinus property='spkrMissed_atn' label='Speaker Missed' />
                </div>
                <div className='input-row my-5'>
                    <PlusMinus property='ampMade_atn' label='Amp Made' />
                    <img src='amp.png' alt='Amp Image' className='d-block mx-auto' style={{ maxHeight: 200 }} />
                    <PlusMinus property='ampMissed_atn' label='Amp Missed' />
                </div>
            </div>
        </SectionWrapper>
    )
}
