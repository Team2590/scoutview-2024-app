import React from 'react'

export default function Header({ text }: { text: string }) {
    return (
        <div className='bg-secondary w-100 py-3 text-center'>
            <h2 className='h1'>{text}</h2>
        </div>
    )
}
