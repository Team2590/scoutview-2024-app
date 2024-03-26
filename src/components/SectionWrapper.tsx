import React from 'react'
import Header from './Header'

export default function SectionWrapper({ children, label }: { children: React.ReactNode, label: string }) {
    return (
        <section style={{ minHeight: '100vh', position: 'relative' }}>
            <Header label={label} />
            {children}
        </section>
    )
}
