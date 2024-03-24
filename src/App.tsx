import React from 'react'
import GetMatch from './sections/GetMatch'
import Autonomous from './sections/Autonomous'
import Teleoperated from './sections/Teleoperated'
import Endgame from './sections/Endgame'
import Export from './sections/Export'

export default function App() {
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
