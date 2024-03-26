import React from 'react'
import { useAtom } from 'jotai/react'
import { dataAtom } from '../data'
import Header from '../components/Header'
import SectionWrapper from '../components/SectionWrapper'
import TextInput from '../components/TextInput'

export default function GetMatch() {
    const [data, setData] = useAtom(dataAtom)

    return (
        <SectionWrapper label='Get Match'>
            <div className='d-flex flex-column gap-4 mx-auto mt-5 container'>
                <TextInput property='scoutName' label='Scout Name' />
                <TextInput property='teamNum' label='Team Number' />
                <TextInput property='matchNum' label='Match Number' />
            </div>
        </SectionWrapper>
    )
}
