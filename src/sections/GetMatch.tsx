import React from 'react'
import { useAtom } from 'jotai/react'
import { dataAtom } from '../data'
import Header from '../components/Header'
import SectionWrapper from '../components/SectionWrapper'

export default function GetMatch() {
    const [data, setData] = useAtom(dataAtom)

    return (
        <SectionWrapper>
            <Header text='Get Match' />
            <div className='d-flex flex-column gap-4 mx-auto mt-5' style={{ maxWidth: 800 }}>
                <div className='input-group'>
                    <span className='input-group-text'>Name</span>
                    <input type='text' className='form-control' />
                </div>
                <div className='input-group'>
                    <span className='input-group-text'>Match Number</span>
                    <input type='text' className='form-control' />
                </div>
            </div>
        </SectionWrapper>
    )
}
