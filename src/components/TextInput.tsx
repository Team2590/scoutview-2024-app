import React from 'react'
import { useAtom } from 'jotai'
import { dataAtom } from '../data'

export default function TextInput({ property, label }: { property: keyof Data, label: string }) {
    const [data, setData] = useAtom(dataAtom)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData(prevData => {
            return { ...prevData, [property]: e.target.value }
        })
    }

    return (
        <div className='input-group'>
            <span className='input-group-text'>{label}</span>
            <input type='text' className='form-control' onChange={handleChange} value={data[property] as string} />
        </div>
    )
}
