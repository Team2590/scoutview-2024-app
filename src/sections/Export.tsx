import { useAtom } from 'jotai/react'
import React from 'react'
import { dataAtom } from '../data'
import { defaultData } from './../data'

export default function Export() {
    const [data, setData] = useAtom(dataAtom)

    const resetData = () => {
        setData({ ...defaultData, scoutName: data.scoutName })
    }

    return (
        <div>Export</div>
    )
}
