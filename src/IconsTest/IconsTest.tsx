import React, { useState } from 'react'
import { Accordion, Table } from 'react-bootstrap'
import { ColorSwitch, DarkModeSwitch } from '@arth-shukla/my-icons' //'../components/index'
import './IconsTest.scss'

function IconSampleDocumentation() {
	return (
		<Accordion defaultActiveKey="0" style={{ maxWidth: '800px', margin: 'auto' }}>
			{Object.keys(IconSamples)
				.sort()
				.map((key: string, i: number) => {
					const IconSample: () => JSX.Element = IconSamples[key]
					return (
						<Accordion.Item eventKey={String(i)}>
							<Accordion.Header>{key}</Accordion.Header>
							<Accordion.Collapse eventKey={String(i)} unmountOnExit>
								<IconSample />
							</Accordion.Collapse>
						</Accordion.Item>
					)
				})}
		</Accordion>
	)
}
export default IconSampleDocumentation

const IconSamples: { [key: string]: () => JSX.Element } = {}

const Req = () => {
	return <sup style={{ color: 'red' }}>required</sup>
}

const AccordionColorSwitch = () => {
	const [currentColorIndex, setCurrentColorIndex] = useState<number>(0)
	const colors: Array<string> = ['var(--bs-pink)', 'var(--bs-blue)', 'var(--bs-orange)', 'var(--bs-purple)', 'var(--bs-green)']
	const colorNames: Array<string> = ['pink', 'blue', 'orange', 'purple', 'green']
	const animDuration: string = '.4s'

	return (
		<Accordion.Body
			className="change-code-color"
			style={
				{
					'--code-color': colors[currentColorIndex],
					'--tr-sec': animDuration,
				} as React.CSSProperties
			}
		>
			<p>
				<ColorSwitch
					currentColorIndex={currentColorIndex}
					colors={colors}
					onClick={() => {
						setCurrentColorIndex((currentColorIndex + 1) % colors.length)
					}}
					animDuration={animDuration}
					size={40}
					aria-label={`Change color to ${colorNames[(currentColorIndex + 1) % colors.length]}.`}
					aria-live="polite"
				/>
			</p>
			<p>
				The <code>ColorSwitch</code> component is a button which plays an animation when clicked. The component is meant to be used to change theme colors.
			</p>
			<p>
				In this example, clicking the <code>ColorSwitch</code> component will change the <code>&lt;code&gt;</code> text color.
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
						<td>
							<code>colors</code> <Req />
						</td>
						<td>
							<code>Array</code> of <code>string</code>
						</td>
						<td>All the colors the component will switch between.</td>
					</tr>
					<tr>
						<td>
							<code>currentColorIndex</code>
						</td>
						<td>
							<code>number</code>
						</td>
						<td>
							The index of the current color in the <code>colors</code> array.
						</td>
					</tr>
					<tr>
						<td>
							<code>size</code>
						</td>
						<td>
							<code>number</code>
						</td>
						<td>
							The width and height of the component in <code>px</code> (note the visible element will be smaller than the button).
						</td>
					</tr>
					<tr>
						<td>
							<code>animDuration</code>
						</td>
						<td>
							<code>string</code>
						</td>
						<td>
							How long the animation to change colors should take.
							<br />
							By default set to <code>.4s</code>.
						</td>
					</tr>
					<tr>
						<td>
							<code>onClick</code>
						</td>
						<td>
							<code>function</code>
						</td>
						<td>
							Runs code when button clicked. By default increments component's internal <code>currentColorIndex</code> value (changing the color). Though named <code>onClick</code>, the
							prop is screenreader and keyboard compatible.
						</td>
					</tr>
					<tr>
						<td>
							<code>...rest</code>
						</td>
						<td>
							<code>any</code>
						</td>
						<td>
							Props like aria tags, classes, etc, will be passed to the <code>button</code> created by the component.
						</td>
					</tr>
				</tbody>
				<tfoot>
					<tr>
						<td colSpan={3}>
							<Req /> props are required for the icon to function.
						</td>
					</tr>
				</tfoot>
			</Table>
		</Accordion.Body>
	)
}
IconSamples['ColorSwitch'] = AccordionColorSwitch

const AccordionDarkModeSwitch = () => {
	const [darkMode, setDarkMode] = React.useState<boolean>(false)
	const animDuration: number = 1.2

	return (
		<Accordion.Body
			style={
				{
					backgroundColor: darkMode ? '#121212' : '#fff',
					color: darkMode ? 'rgba(255, 255, 255, .87)' : '#000',
					'--tr-sec': `${animDuration / 3}s`,
				} as React.CSSProperties
			}
		>
			<p>
				<DarkModeSwitch
					darkMode={darkMode}
					onClick={() => {
						setDarkMode(!darkMode)
					}}
					animDuration={`${animDuration}s`}
					aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode.`}
					aria-live="polite"
				/>
			</p>
			<p>
				The <code>DarkModeSwitch</code> component is a button which plays an animation when clicked. The component is meant to be used as a switch for dark/light mode.
			</p>
			<p>
				In this example, clicking the <code>ColorSwitch</code> component will change the current container to dark mode.
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
						<td>
							<code>darkMode</code>
						</td>
						<td>
							<code>boolean</code>
						</td>
						<td>Changes button animation between a sun and a moon. By default managed by component's internal state.</td>
					</tr>
					<tr>
						<td>
							<code>lightModeColor</code>
						</td>
						<td>
							<code>string</code>
						</td>
						<td>
							The color of the sun when in light mode.
							<br />
							By default set to <code>rgba(18, 18, 18, .8)</code>.
						</td>
					</tr>
					<tr>
						<td>
							<code>darkModeColor</code>
						</td>
						<td>
							<code>string</code>
						</td>
						<td>
							The color of the moon when in dark mode.
							<br />
							By default set to <code>rgba(255, 255, 255, .87)</code>.
						</td>
					</tr>
					<tr>
						<td>
							<code>size</code>
						</td>
						<td>
							<code>number</code>
						</td>
						<td>
							The width and height of the component in <code>px</code> (note the visible element will be smaller than the button).
						</td>
					</tr>
					<tr>
						<td>
							<code>animDuration</code>
						</td>
						<td>
							<code>string</code>
						</td>
						<td>
							How long the animation to change between sun/moon should take.
							<br />
							By default set to <code>.4s</code>.
						</td>
					</tr>
					<tr>
						<td>
							<code>onClick</code>
						</td>
						<td>
							<code>function</code>
						</td>
						<td>
							Runs code when button clicked. By default changes component's internal <code>darkMode</code> value. Though named <code>onClick</code>, the prop is screenreader and keyboard
							compatible.
						</td>
					</tr>
					<tr>
						<td>
							<code>...rest</code>
						</td>
						<td>
							<code>any</code>
						</td>
						<td>
							Props like aria tags, classes, etc, will be passed to the <code>button</code> created by the component.
						</td>
					</tr>
				</tbody>
				<tfoot>
					<tr>
						<td colSpan={3}>
							<Req /> props are required for the icon to function.
						</td>
					</tr>
				</tfoot>
			</Table>
		</Accordion.Body>
	)
}
IconSamples['DarkModeSwitch'] = AccordionDarkModeSwitch
