import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Input } from './Input'

export default {
	title: 'Input',
	component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = args => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
	'data-testid': 'input',
}
