import React, { useState } from 'react'
import './ColorSwitch.scss'

interface ColorSwitchProps {
    currentColorIndex?: number, 
    colors: Array<string>, 
    onClick?: () => void, 
    className?: string, 
    size?: number,
    animDuration?: string,
    [x: string]: any,
}

function ColorSwitch( { currentColorIndex, colors, onClick, className, size=40, animDuration= '.4s' }: ColorSwitchProps ) {

    const [childCurrentColorIndex, setChildCurrentColorIndex] = useState<number>(currentColorIndex || 0)
    const [selectNum, setSelectNum] = useState<number>(0)
    const colorIndex: number = currentColorIndex || childCurrentColorIndex

    const childOnClick = () => {
        if (onClick) onClick()
        
        setChildCurrentColorIndex((childCurrentColorIndex + 1) % colors.length)
        setSelectNum(selectNum + 1)
    }

    if (!colors || colors?.length < 2)
        throw new Error('ERROR: colors array required for ColorSwitch component')

    return <button
        className='ai-color-switch'
        onClick={childOnClick}
        style={{
            width: size,
            height: size,
            '--ai-color-switch-color': colors[colorIndex],
            '--ai-color-switch-tr-sec': animDuration,
            '--ai-color-switch-size': `${size*.558}px`
        } as React.CSSProperties}
    >
        <div aria-hidden={true} className={`ai-color-targ ai-color-targ-${selectNum%2}`}></div>
    </button>
}

export default ColorSwitch