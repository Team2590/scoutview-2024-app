import React from 'react'
import { useAtom } from 'jotai/react'
import { dataAtom } from '../data'
import Header from '../components/Header'
import SectionWrapper from '../components/SectionWrapper'

export default function GetMatch() {
    const [data, setData] = useAtom(dataAtom)

    return (
        <SectionWrapper label='Get Match'>
            <div className='d-flex flex-column gap-4 mx-auto mt-5 container'>
                <div className='input-group'>
                    <span className='input-group-text'>Team Number</span>
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
