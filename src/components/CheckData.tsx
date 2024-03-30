import React, { useEffect, useMemo } from 'react'
import QRCode from 'react-qr-code'
import { generateExportArray } from '../sections/Export'
import { useAtom } from 'jotai'
import { dataAtom } from '../data'


export default function CheckData() {
    const [data] = useAtom(dataAtom)

    const required = useMemo(() => {
        const map = new Map()
        map.set('matchNum', true)
        map.set('teamNum', true)
        map.set('scoutName', true)
        map.set('startingPos', true)
        map.set('leaveWing', true)
        map.set('coopertition', true)
        map.set('climbLvl', true)
        map.set('trap', true)
        map.set('traverse', true)
        map.set('twoRobot', true)
        map.set('droppedHit', true)
        return map
    }, [])

    const missing = []

    return (
        <>
            <div className='btn-group mx-auto'>
                <button className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#pastDataModal'>Past Data</button>
                <button className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#missingDataModal'>Missing Data</button>
            </div>


            <div className='modal modal-xl fade' id='pastDataModal' tabIndex={-1} aria-labelledby='pastDataModalLabel' aria-hidden='true'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h1 className='modal-title fs-5' id='pastDataModalLabel'>Past Data</h1>
                            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        </div>
                        <div className='modal-body d-flex flex-column'>
                            {localStorage.getItem('nemesis-past-data') && JSON.parse(localStorage.getItem('nemesis-past-data')!).map((data: Data) => {
                                return (
                                    <div className='mx-auto my-3'>
                                        <QRCode
                                            value={JSON.stringify(generateExportArray(data))}
                                            bgColor='white'
                                            // fgcolor='black'
                                            size={384}
                                            style={{ border: '20px solid white' }}
                                        />
                                        <p className='text-center mt-2'>{data.scoutName}, Match {data.matchNum}, Team {data.teamNum}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='modal-footer'>
                            <button type='button' className='btn btn-primary' data-bs-dismiss='modal'>Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='modal fade' id='missingDataModal' tabIndex={-1} aria-labelledby='missingDataModalLabel' aria-hidden='true'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h1 className='modal-title fs-5' id='missingDataModalLabel'>Missing Data</h1>
                            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        </div>
                        <div className='modal-body' style={{ textAlign: 'left' }}>
                            <ul>
                                {Object.keys(data).map((key, index) => {
                                    if ((Object.values(data)[index] == null || Object.values(data)[index] == '') && required.get(key)) {
                                        missing.push('')
                                        return (
                                            <li className='text-left'>{key}</li>
                                        )
                                    }
                                })}
                            </ul>
                            {missing.length == 0 && <p className='text-center'>No missing data</p>}
                        </div>
                        <div className='modal-footer'>
                            <button type='button' className='btn btn-primary' data-bs-dismiss='modal'>Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}