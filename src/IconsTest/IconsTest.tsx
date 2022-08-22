import React, { useState } from 'react'
import { Accordion, Table } from 'react-bootstrap'
import { ColorSwitch, DarkModeSwitch, TextTypeDelete, LineSheen } from '@arth-shukla/my-icons'
import './IconsTest.scss'

function IconSampleDocumentation() {
	return (
		<Accordion
			defaultActiveKey='0'
			style={{ maxWidth: '800px', margin: 'auto', marginBottom: '3em' }}
		>
			{Object.keys(IconSamples)
				.sort()
				.map((key: string, i: number) => {
					const IconSample: () => JSX.Element = IconSamples[key]
					return (
						<Accordion.Item eventKey={String(i)}>
							<Accordion.Header>{key}</Accordion.Header>
							<Accordion.Collapse
								eventKey={String(i)}
								unmountOnExit
							>
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
					title={`Change color to ${colorNames[(currentColorIndex + 1) % colors.length]}`}
				/>
			</p>
			<p>
				The <code>ColorSwitch</code> component is a button which plays an animation when clicked. The component is meant to be used to change theme colors.
			</p>
			<p>
				In this example, clicking the <code>ColorSwitch</code> component will change the <code>&lt;code&gt;</code> text color.
			</p>
			<Table
				style={{ color: 'inherit', width: '100%' }}
				responsive
			>
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
					title={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
				/>
			</p>
			<p>
				The <code>DarkModeSwitch</code> component is a button which plays an animation when clicked. The component is meant to be used as a switch for dark/light mode.
			</p>
			<p>
				In this example, clicking the <code>ColorSwitch</code> component will change the current container to dark mode.
			</p>
			<Table
				style={{ color: 'inherit', width: '100%' }}
				responsive
			>
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

const AccordionTextTypeDelete = () => {
	return (
		<Accordion.Body>
			<p>
				<TextTypeDelete
					constText="Hi! I'm"
					typeText={[' a developer.', ' a student.', ' Arth.']}
					typeTextColor='var(--bs-pink)'
					fontSize='40px'
					cursorWidth='3px'
					cursorHeight='42px'
				/>
			</p>
			<p>
				The <code>TextTypeDelete</code> component is an animation which types, then deletes strings of text.
			</p>
			<Table
				style={{ color: 'inherit', width: '100%' }}
				responsive
			>
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
							<code>typeText</code> <Req />
						</td>
						<td>
							<code>string[]</code>
						</td>
						<td>Array of all strings that the animation will display.</td>
					</tr>
					<tr>
						<td>
							<code>typeTextColor</code>
						</td>
						<td>
							<code>string</code>
						</td>
						<td>
							Color of text being typed and deleted by animation. By default set to <code>black</code>.
						</td>
					</tr>
					<tr>
						<td>
							<code>typeTextStyle</code>
						</td>
						<td>
							<code>{'{}'}</code>
						</td>
						<td>
							Object added to type text style prop. By default set to <code>{'{}'}</code>.
						</td>
					</tr>
					<tr>
						<td>
							<code>constText</code>
						</td>
						<td>
							<code>string</code>
						</td>
						<td>Text at the beginning of the animation that will not change. By default, there is none.</td>
					</tr>
					<tr>
						<td>
							<code>constTextColor</code>
						</td>
						<td>
							<code>string</code>
						</td>
						<td>
							Color of constant text. By default set to <code>black</code>.
						</td>
					</tr>
					<tr>
						<td>
							<code>constTextAlign</code>
						</td>
						<td>
							<code>string</code>
						</td>
						<td>
							Text alignment of center text. By default set to <code>left</code>.
						</td>
					</tr>
					<tr>
						<td>
							<code>constTextStyle</code>
						</td>
						<td>
							<code>{'{}'}</code>
						</td>
						<td>
							Object added to constant text style prop. By default set to <code>{'{}'}</code>.
						</td>
					</tr>
					<tr>
						<td>
							<code>fontFamily</code>
						</td>
						<td>
							<code>string</code>
						</td>
						<td>
							Font family of <i>all</i> animation text. By default set to <code>'Courier New', Courier, monospace</code>.
						</td>
					</tr>
					<tr>
						<td>
							<code>textAlign</code>
						</td>
						<td>
							<code>string</code>
						</td>
						<td>
							Alignment of the animation text. By default set to <code>center</code>.
						</td>
					</tr>
					<tr>
						<td>
							<code>loop</code>
						</td>
						<td>
							<code>boolean</code>
						</td>
						<td>
							If <code>true</code>, the animation will continue to loop through the strings. By default set to <code>false</code>.
						</td>
					</tr>
					<tr>
						<td>
							<code>pauseMSec</code>
						</td>
						<td>
							<code>number</code>
						</td>
						<td>
							Number of milliseconds the animation pauses for when the string is complete. By default set to <code>1000</code>.
						</td>
					</tr>
					<tr>
						<td>
							<code>typeMSec</code>
						</td>
						<td>
							<code>number</code>
						</td>
						<td>
							Number of milliseconds it takes to add a new character. By default set to <code>100</code>.
						</td>
					</tr>
					<tr>
						<td>
							<code>deleteMSec</code>
						</td>
						<td>
							<code>number</code>
						</td>
						<td>
							Number of milliseconds it takes to delete a character. By default set to <code>50</code>.
						</td>
					</tr>
					<tr>
						<td>
							<code>fontSize</code>
						</td>
						<td>
							<code>string</code>
						</td>
						<td>
							Font size of text. By default set to <code>20px</code>.
						</td>
					</tr>
					<tr>
						<td>
							<code>cursorColor</code>
						</td>
						<td>
							<code>string</code>
						</td>
						<td>
							Color of cursor. By default set to <code>22px</code>.
						</td>
					</tr>
					<tr>
						<td>
							<code>cursorHeight</code>
						</td>
						<td>
							<code>string</code>
						</td>
						<td>
							Height of cursor. By default set to <code>2px</code>.
						</td>
					</tr>
					<tr>
						<td>
							<code>cursorWidth</code>
						</td>
						<td>
							<code>string</code>
						</td>
						<td>
							Width of cursor. By default set to <code>2px</code>.
						</td>
					</tr>
					<tr>
						<td>
							<code>blinkGap</code>
						</td>
						<td>
							<code>string</code>
						</td>
						<td>
							How long it takes for the cursor to blink. By default set to <code>1s</code>.
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
IconSamples['TypeTextDelete'] = AccordionTextTypeDelete

const AccordionLineSheen = () => {
	const [currentColorIndex, setCurrentColorIndex] = useState<number>(0)
	const colors: Array<string> = ['var(--bs-pink)', 'var(--bs-blue)', 'var(--bs-orange)', 'var(--bs-purple)', 'var(--bs-green)']
	const lightColors: Array<string> = ['var(--bs-pink-light)', 'var(--bs-blue-light)', 'var(--bs-orange-light)', 'var(--bs-purple-light)', 'var(--bs-green-light)']
	const darkColors: Array<string> = ['var(--bs-pink-dark)', 'var(--bs-blue-dark)', 'var(--bs-orange-dark)', 'var(--bs-purple-dark)', 'var(--bs-green-dark)']
	const colorNames: Array<string> = ['pink', 'blue', 'orange', 'purple', 'green']
	const animDuration: number = 0.4 //'.4s'

	return (
		<Accordion.Body
			className='line-sheen-accordion'
			style={
				{
					'--code-color': colors[currentColorIndex],
					'--tr-sec': `${animDuration}s`,
				} as React.CSSProperties
			}
		>
			<p>
				<i>
					Note: This component is only the line. The circle button is the <code>ColorSwitch</code> component, added to demonstrate the <code>LineSheen</code> component's functionality.
				</i>
			</p>
			<div style={{ display: 'flex', justifyContent: 'right' }}>
				<ColorSwitch
					currentColorIndex={currentColorIndex}
					colors={colors}
					onClick={() => {
						setCurrentColorIndex((currentColorIndex + 1) % colors.length)
					}}
					animDuration={`${animDuration}s`}
					size={40}
					aria-label={`Change color to ${colorNames[(currentColorIndex + 1) % colors.length]}.`}
					title={`Change color to ${colorNames[(currentColorIndex + 1) % colors.length]}`}
				/>
			</div>
			<p>
				<LineSheen
					lineHeight='3.5px'
					lineColor={lightColors[currentColorIndex]}
					sheenColor={darkColors[currentColorIndex]}
					animDuration={animDuration * 3}
				/>
			</p>
			<p>
				The <code>LineSheen</code> component is an animation which changes color of a line with an animation.
			</p>
			<Table
				style={{ color: 'inherit', width: '100%' }}
				responsive
			>
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
							<code>lineWidth</code>
						</td>
						<td>
							<code>string</code>
						</td>
						<td>
							Width of line. By default set to <code>100%</code>.
						</td>
					</tr>
					<tr>
						<td>
							<code>lineHeight</code>
						</td>
						<td>
							<code>string</code>
						</td>
						<td>
							Height of line. By default set to <code>2px</code>.
						</td>
					</tr>
					<tr>
						<td>
							<code>lineColor</code>
						</td>
						<td>
							<code>string</code>
						</td>
						<td>
							Color of line. By default set to <code>black</code>.
						</td>
					</tr>
					<tr>
						<td>
							<code>sheenColor</code>
						</td>
						<td>
							<code>string</code>
						</td>
						<td>
							Color of sheen. The sheen is the animated piece which travels across the line. By default set to <code>gray</code>.
						</td>
					</tr>
					<tr>
						<td>
							<code>animDuration</code>
						</td>
						<td>
							<code>number</code>
						</td>
						<td>
							Duration of animation. By default set to <code>1s</code>.
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
IconSamples['LineSheen'] = AccordionLineSheen
