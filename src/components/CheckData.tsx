import React from 'react'
import QRCode from 'react-qr-code'
import { generateExportArray } from '../sections/Export'

export default function CheckData() {
    return (
        <>
            <div className='btn-group mx-auto'>
                <button className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#exampleModal'>Past Data</button>
                <button className='btn btn-primary'>Missing Data</button>
            </div>


            <div className='modal modal-xl fade' id='exampleModal' tabIndex={-1} aria-labelledby='exampleModalLabel' aria-hidden='true'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h1 className='modal-title fs-5' id='exampleModalLabel'>Past Data</h1>
                            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        </div>
                        <div className='modal-body d-flex flex-column'>
                            {JSON.parse(localStorage.getItem('nemesis-past-data')!).map((data: Data) => {
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
        </>
    )
}
