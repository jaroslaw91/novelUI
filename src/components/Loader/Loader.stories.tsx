/* eslint-disable import/no-extraneous-dependencies */
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Loader } from './Loader'

export default {
	title: 'Loader',
	component: Loader,
} as ComponentMeta<typeof Loader>

const Template: ComponentStory<typeof Loader> = args => <Loader {...args} />

const Default = Template.bind({})
Default.args = {
	'data-testid': 'loader',
}

export const Button = Template.bind({})
Button.args = {
	type: 'button',
	...Default.args,
}

export const Website = Template.bind({})
Website.args = {
	type: 'website',
	...Default.args,
}
