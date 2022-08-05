import React, { useState } from 'react'
import './ColorSwitch.scss'

interface ColorSwitchProps {
    colors: Array<string>,
    currentColorIndex?: number, 
    onClick?: () => void, 
    size?: number,
    animDuration?: string,
    className?: string, 
    style?: {},
    [x: string]: any,
}

function ColorSwitch( { currentColorIndex, colors, onClick=()=>{}, size=40, animDuration='.4s', className='', style={}, ...rest }: ColorSwitchProps ) {

    const [childCurrentColorIndex, setChildCurrentColorIndex] = useState<number>(currentColorIndex || 0)
    const [selectNum, setSelectNum] = useState<number>(0)
    const colorIndex: number = currentColorIndex || childCurrentColorIndex

    const childOnClick: () => void = () => {
        onClick()
        setChildCurrentColorIndex((childCurrentColorIndex + 1) % colors.length)
        setSelectNum((selectNum + 1) % 2)
    }

    return <button
        className={'ai-color-switch ' + className}
        onClick={childOnClick}
        style={{
            width: size,
            height: size,
            '--ai-color-switch-color': colors[colorIndex],
            '--ai-color-switch-tr-sec': animDuration,
            '--ai-color-switch-size': `${size*.558}px`,
            ...style,
        } as React.CSSProperties}
        {...rest}
    >
        <div aria-hidden={true} className={`ai-color-targ ai-color-targ-${selectNum}`}></div>
    </button>
}

export default ColorSwitch