import GetMatch from '../sections/GetMatch'
import Autonomous from '../sections/Autonomous'
import Teleoperated from '../sections/Teleoperated'
import Endgame from '../sections/Endgame'
import Export from '../sections/Export'
import { useAtom } from 'jotai'
import { dataAtom } from '../data'
import { useEffect } from 'react'

export default function MainPage() {
    const [data] = useAtom(dataAtom)

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <>
            <GetMatch />
            <Autonomous />
            <Teleoperated />
            <Endgame />
            <Export />
        </>
    )
}
