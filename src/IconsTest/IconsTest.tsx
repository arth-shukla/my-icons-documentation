import React, { useState } from 'react'
import { Accordion, Table } from "react-bootstrap"
import { ColorSwitch } from '../components/index'

function IconSampleDocumentation() {
    return <Accordion>
        <Accordion alwaysOpen>
            {Object.keys(IconSamples).sort().map((key, i) => {
                const IconSample = IconSamples[key]
                return <Accordion.Item eventKey={String(i)}>
                    <Accordion.Header>{key}</Accordion.Header>
                    <IconSample />
                </Accordion.Item>
            })}
        </Accordion>
    </Accordion>
}
export default IconSampleDocumentation

const IconSamples: { [key: string]: () => JSX.Element } = {}

const Req = () => { return <sup style={{color: 'red'}}>required</sup> }

// const AccordionEntryButton = () => {
//     return <Button label="hi hello" />
// }
// IconSamples["Button"] = AccordionEntryButton

const AccordionColorSwitch = () => {

    const [currentColorIndex, setCurrentColorIndex] = useState(0)
    const colors = ['var(--bs-pink)', 'var(--bs-blue)', 'var(--bs-orange)', 'var(--bs-purple)', 'var(--bs-green)']
    const animDuration = '.4s'

    return <Accordion.Body 
        className='change-code-color' 
        style={{
            "--code-color": colors[currentColorIndex],
            '--tr-sec': animDuration,
        } as React.CSSProperties}
    >
        <p>
            <ColorSwitch
                currentColorIndex={currentColorIndex}
                colors={colors}
                onClick={() => {setCurrentColorIndex((currentColorIndex + 1) % colors.length)}}
                animDuration={animDuration}
            />
        </p>
        <p>
            The <code>ColorSwitch</code> component is a button which plays an animation when clicked. The component is meant to be used to change theme colors.
        </p>
        <Table style={{ color: 'inherit', width: '100%' }}>
            <thead>
                <tr>
                    <th>Prop</th>
                    <th>Type</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><code>colors</code> <Req  /></td>
                    <td><code>Array</code> of <code>string</code></td>
                    <td>All the colors the component will switch between.</td>
                </tr>
                <tr>
                    <td><code>currentColorIndex</code></td>
                    <td><code>number</code></td>
                    <td>The index of the current color in the <code>colors</code> array.</td>
                </tr>
                <tr>
                    <td><code>size</code></td>
                    <td><code>number</code></td>
                    <td>The width and height of the component in <code>px</code> (note the visible element will be smaller than the button).</td>
                </tr>
                <tr>
                    <td><code>animDuration</code></td>
                    <td><code>string</code></td>
                    <td>How long the animation to change colors should take.<br />By default set to <code>.4s</code>.</td>
                </tr>
                <tr>
                    <td><code>onClick</code></td>
                    <td><code>function</code></td>
                    <td>Runs code when button clicked. By default increments component's internal <code>currentColorIndex</code> value (changing the color). Though named <code>onClick</code>, the prop is screenreader and keyboard compatible.</td>
                </tr>
                <tr>
                    <td><code>...rest</code></td>
                    <td><code>any</code></td>
                    <td>Props like aria tags, classes, etc, will be passed to the <code>button</code> created by the component.</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={3}><Req /> props are required for the icon to function.</td>
                </tr>
            </tfoot>
        </Table>
    </Accordion.Body>
}
IconSamples["ColorSwitch"] = AccordionColorSwitch