import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useSWR from 'swr'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useAtom } from 'jotai'
import { dataAtom } from '../data'

const fetcher = (url: string) => {
    return fetch(url,
        {
            method: 'GET',
            headers: {
                'X-TBA-Auth-Key': `${import.meta.env.VITE_TBA_KEY}`
            }
        }
    ).then(res => res.json())
}

const setComp = async (key: string) => {
    localStorage.setItem('comp', key)
    const response = await fetch(`https://www.thebluealliance.com/api/v3/event/${key}/matches`, {
        headers: {
            'X-TBA-Auth-Key': `${import.meta.env.VITE_TBA_KEY}`
        }
    })
    const matchesData: any[] = await response.json()
    const simplifed = matchesData.filter(({ key }) => key.includes('qm'))
        .sort((a, b) => a?.match_number! - b?.match_number!)
        .map(({ alliances, match_number, key: matchKey }: { alliances: any, match_number: number, key: string }) => {
            if (!matchKey.includes('qm')) return null
            else return { match_number, teams: [...alliances.red.team_keys, ...alliances.blue.team_keys] }
        }).map(d => d?.teams.map((team: string) => team.replace('frc', '')))
    console.log(simplifed)
    localStorage.setItem('teams', JSON.stringify(simplifed))
}

const setRobot = (num: string) => {
    localStorage.setItem('robot', num)
}

export default function SettingsPage() {
    const { data: compData, isLoading, error } = useSWR('https://www.thebluealliance.com/api/v3/team/frc2590/events/2024', fetcher)
    const [autoIncrementMatches, setAutoIncrementMatches] = useLocalStorage('auto-increment', false)
    const [autoAssignTeams, setAutoAssignTeams] = useLocalStorage('auto-assign-teams', false)
    const [data, setData] = useAtom(dataAtom)

    useEffect(() => {
        if (autoIncrementMatches && data.matchNum == '') {
            setData(prev => {
                return { ...prev, matchNum: 1 }
            })
        }
        if (autoAssignTeams && data.teamNum == '') {
            setData(prev => {
                return { ...prev, teamNum: JSON.parse(localStorage.getItem('teams')!)[prev.matchNum][JSON.parse(localStorage.getItem('robot')!) - 1] }
            })
        }
    }, [autoAssignTeams, autoIncrementMatches])

    const resetCount = () => {
        setData({ ...data, matchNum: 1, teamNum: autoAssignTeams ? JSON.parse(localStorage.getItem('teams')!)[1][JSON.parse(localStorage.getItem('robot')!) - 1] : '' })
    }

    return (
        <>
            <div className='ms-2 mt-1'>
                <Link to='/' className='text-decoration-none'> &#8592; Back</Link>
            </div>
            <div className='d-flex justify-content-center align-items-center' style={{ minHeight: 'calc(100vh - 28px)' }}>
                <div className='card mx-auto' style={{ width: 360 }}>
                    <div className='card-body'>
                        <button className='btn btn-tertiary mb-3' onClick={resetCount}>Reset Match Count</button>
                        <div className='form-check form-switch d-flex align-items-center gap-2 mb-3'>
                            <input className='form-check-input' type='checkbox' role='switch' id='auto-increment' checked={autoIncrementMatches} onChange={e => {
                                if (e.target.checked) setAutoIncrementMatches(e.target.checked)
                                else {
                                    setAutoAssignTeams(false)
                                    setAutoIncrementMatches(false)
                                }
                            }} />
                            <label className='form-check-label' htmlFor='auto-increment'>Auto Increment Matches</label>
                        </div>
                        {compData && (
                            <>
                                <div className='form-check form-switch d-flex align-items-center gap-2 mb-3'>
                                    <input className='form-check-input' type='checkbox' role='switch' id='auto-assign' checked={autoAssignTeams} onChange={e => {
                                        setAutoAssignTeams(e.target.checked)
                                        if (e.target.checked) setAutoIncrementMatches(true)
                                    }} />
                                    <label className='form-check-label' htmlFor='auto-assign'>Auto Assign Teams</label>
                                </div>
                                <div className='input-group mb-3'>
                                    <label className='input-group-text' htmlFor='comp-select'>Comp</label>
                                    <select className='form-select' aria-label='Select Competition' disabled={!autoAssignTeams} id='comp-select' defaultValue={localStorage.getItem('comp') as string} onChange={e => setComp(e.target.value)}>
                                        <option selected>Select Competition</option>
                                        {compData.map(({ name, key }: { name: string, key: string }) => {
                                            return (
                                                <option value={key}>{name}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className='input-group'>
                                    <label htmlFor='robot-select' className='input-group-text'>Robot</label>
                                    <select className='form-select' disabled={!autoAssignTeams} id='robot-select' aria-label='Select Robot' defaultValue={localStorage.getItem('robot')!} style={{ width: 'fit-content' }} onChange={e => setRobot(e.target.value)}>
                                        <option selected>Select Robot</option>
                                        <option value={1}>Red Robot 1</option>
                                        <option value={2}>Red Robot 2</option>
                                        <option value={3}>Red Robot 3</option>
                                        <option value={4}>Blue Robot 1</option>
                                        <option value={5}>Blue Robot 2</option>
                                        <option value={6}>Blue Robot 3</option>
                                    </select>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
