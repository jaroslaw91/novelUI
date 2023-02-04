import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Paragraph } from './Paragraph'

export default {
	title: 'Paragraph',
	component: Paragraph,
} as ComponentMeta<typeof Paragraph>

const Template: ComponentStory<typeof Paragraph> = args => (
	<Paragraph {...args}>{args?.children}</Paragraph>
)

export const Default = Template.bind({})
Default.args = {
	children: 'Paragraph default',
	type: 'default',
	size: 'medium',
	align: 'center',
	'data-testid': 'paragpraph',
}

export const Label = Template.bind({})
Label.args = {
	...Default.args,
	children: 'Paragraph label',
	type: 'label',
}

export const Error = Template.bind({})
Error.args = {
	...Default.args,
	children: 'Paragraph error',
	type: 'error',
}
