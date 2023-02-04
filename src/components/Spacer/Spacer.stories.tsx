import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Spacer } from './Spacer'

export default {
	title: 'Spacer',
	component: Spacer,
	argTypes: {
		action: { action: 'clicked' },
	},
} as ComponentMeta<typeof Spacer>

const Template: ComponentStory<typeof Spacer> = args => <Spacer {...args} />

const Default = Template.bind({})
Default.args = {
	space: 'medium',
	'data-testid': 'spacer',
}

export const Horizontal = Template.bind({})
Horizontal.args = {
	type: 'horizontal',
	...Default.args,
}

export const Vertical = Template.bind({})
Vertical.args = {
	type: 'vertical',
	...Default.args,
}
