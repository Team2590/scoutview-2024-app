import React from 'react'

export default function SectionWrapper({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ minHeight: '100vh' }}>
            {children}
        </div>
    )
}
