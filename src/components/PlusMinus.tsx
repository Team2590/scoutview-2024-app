import { useAtom } from 'jotai'
import React from 'react'
import { dataAtom } from '../data'

export default function PlusMinus({ property, label }: { property: keyof Data, label: string }) {
    const [data, setData] = useAtom(dataAtom)

    const increment = () => {
        setData(prevData => {
            return {
                ...prevData,
                [property]: prevData[property] as number + 1
            }
        })
    }

    const decrement = () => {
        setData(prevData => {
            const current = prevData[property] as number
            const val = current - 1 > 0 ? current - 1 : 0

            return {
                ...prevData,
                [property]: val
            }
        })
    }

    return (
        <div className='text-center'>
            <p className='d-block mb-2'>{label}</p>
            <p className='bg-info mx-auto py-3 rounded-top' style={{ width: 211.5 }}>{data[property]}</p>
            <div className='btn-group' style={{ marginTop: -16 }}>
                <button
                    className={`btn btn-primary px-5 py-4 rounded-end-0`}
                    onClick={increment}
                >
                    +
                </button>
                <button
                    className={`btn btn-tertiary px-5 py-4 rounded-start-0`}
                    onClick={decrement}
                >
                    -
                </button>
            </div>
        </div>
    )
}
