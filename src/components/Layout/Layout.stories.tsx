import { ComponentMeta, ComponentStory } from '@storybook/react'

import login from '../../assets/images/login.jpg'
import lowLogin from '../../assets/images/lowLogin.jpg'
import { Layout } from './Layout'

export default {
	title: 'Layout',
	component: Layout,
} as ComponentMeta<typeof Layout>

const Template: ComponentStory<typeof Layout> = args => <Layout {...args}>{args?.children}</Layout>

export const Default = Template.bind({})
Default.args = {
	children: (
		<>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
			<div>fdsfsfsfsdfsdf</div>
		</>
	),
	image: login,
	lowImage: lowLogin,
	'data-testid': 'layout',
}
