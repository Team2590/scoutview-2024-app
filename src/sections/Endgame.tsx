import React from 'react'
import SectionWrapper from '../components/SectionWrapper'
import SelectInput from '../components/SelectInput'

export default function Endgame() {
    return (
        <SectionWrapper label='Endgame'>
            <div className='mx-auto d-flex flex-column gap-5 mt-5'>
                <SelectInput property='climbLvl' options={['Parked', 'Climb', 'Mic', 'N/A']} label='Climb Level' />
                <SelectInput property='trap' options={['0', '1', '2', '3']} label='Trap Count' />
            </div>
        </SectionWrapper>
    )
}
