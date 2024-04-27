import React, { useEffect, useMemo, useState } from 'react'
import { useAtom } from 'jotai'
import { dataAtom } from '../data'
import { useRerender } from '../hooks/useRerender'
import { useNavigate } from 'react-router-dom'


export default function CheckData() {
    const [data] = useAtom(dataAtom)
    const forceRerender = useRerender()
    const navigate = useNavigate()

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

    const clearStorage = () => {
        localStorage.clear()
        forceRerender()
    }

    return (
        <>
            <div className='btn-group mx-auto'>
                <button className='btn btn-primary' onClick={() => navigate('/past-data')}>Past Data</button>
                <button className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#missingDataModal'>Missing Data</button>
                <button className='btn btn-primary' onClick={() => navigate('/settings')}>Settings</button>
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

            <div className='modal fade' id='clearStorageModal' tabIndex={-1} aria-labelledby='clearStorageModalLabel' aria-hidden='true'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h1 className='modal-title fs-5' id='clearStorageModalLabel'>Clear Storage?</h1>
                            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        </div>
                        <div className='modal-footer'>
                            <button type='button' className='btn btn-success text-white' data-bs-dismiss='modal' onClick={clearStorage}>Yes</button>
                            <button type='button' className='btn btn-primary' data-bs-dismiss='modal'>No</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
