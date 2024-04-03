import React, { useState } from 'react'

export default function ClearStorage() {
    const clearStorage = () => {
        localStorage.clear()
    }

    return (
        <>
            <div role='button' style={{ position: 'absolute', top: 0, left: 0, zIndex: 10, width: 100, height: 48 }} data-bs-toggle='modal' data-bs-target='#clearStorageModal' aria-label='Clear Storage'></div>
            <div className='modal fade' id='clearStorageModal' tabIndex={-1} aria-labelledby='clearStorageModalLabel' aria-hidden='true'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h1 className='modal-title fs-5' id='clearStorageModalLabel'>Clear Storage?</h1>
                            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        </div>
                        <div className='modal-footer'>
                            <button type='button' className='btn btn-success' data-bs-dismiss='modal' onClick={clearStorage}>Yes</button>
                            <button type='button' className='btn btn-primary' data-bs-dismiss='modal'>No</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
