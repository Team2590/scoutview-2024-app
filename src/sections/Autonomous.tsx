import React from 'react'
import Header from '../components/Header'
import SectionWrapper from '../components/SectionWrapper'

export default function Autonomous() {
    return (
        <SectionWrapper>
            <Header text='Autonomous' />
            <img src='field.jpg' alt='Field Image' className='d-block mx-auto mt-5' style={{ maxWidth: 800, height: 'auto' }} />
            <div>

            </div>
        </SectionWrapper>
    )
}
