import React, { useEffect } from 'react'
import GetMatch from './sections/GetMatch'
import Autonomous from './sections/Autonomous'
import Teleoperated from './sections/Teleoperated'
import Endgame from './sections/Endgame'
import Export from './sections/Export'
import { useAtom } from 'jotai'
import { dataAtom } from './data'
import ClearStorage from './components/ClearStorage'

export default function App() {
	const [data] = useAtom(dataAtom)

	useEffect(() => {
		console.log(data)
	}, [data])

	return (
		<>
			<ClearStorage />
			<GetMatch />
			<Autonomous />
			<Teleoperated />
			<Endgame />
			<Export />
		</>
	)
}
