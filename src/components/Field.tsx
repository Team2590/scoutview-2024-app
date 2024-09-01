import FieldButton from './FieldButton'
import SelectInput from './SelectInput'

interface BtnPositions {
    top: number
    left: number
}

const btnPositions: BtnPositions[] = [
    { top: 200, left: 234 },
    { top: 270, left: 234 },
    { top: 330, left: 234 },
    { top: 50, left: 455 },
    { top: 125, left: 455 },
    { top: 200, left: 455 },
    { top: 275, left: 455 },
    { top: 350, left: 455 },
    { top: 200, left: 680 },
    { top: 270, left: 680 },
    { top: 330, left: 680 }
]

export default function Field() {
    return (
        <>
            <div className='mx-auto position-relative' style={{ width: 936 }}>
                {btnPositions.map(({ top, left }, i) => {
                    return <FieldButton top={top} left={left} index={i} />
                })}
                <img src='field.jpg' alt='Field Image' className='d-block mx-auto mt-5' style={{ width: 936, height: 'auto' }} />
            </div>
            <div className='mt-4'>
                <SelectInput label='Preload Note' options={['Made', 'Missed', 'Not Attempted']} property='preloadNote' />
            </div>
        </>
    )
}