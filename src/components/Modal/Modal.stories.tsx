import NiceModal from '@ebay/nice-modal-react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button } from '../Button'
import { Modal } from './Modal'

export default {
	title: 'Modal',
	component: Modal,
} as ComponentMeta<typeof Modal>

const showAddModal = () => {
	NiceModal.show(Modal, {
		id: 'modal',
		title: 'Modal title',
		subtitle: 'Modal subtitle',
		content: 'Modal content.',
		actionName: 'Remove',
		cancelName: 'Cancel',
		variant: 'alert',
	})
}

const Template: ComponentStory<typeof Modal> = args => (
	<div>
		<Button
			variant="secondary"
			action={() => showAddModal()}
		>
			CLICK
		</Button>

		<Modal {...args} />
	</div>
)

export const Default = Template.bind({})
Default.args = {
	id: 'modal',
	title: 'Modal title',
	subtitle: 'Modal subtitle',
	content: 'Modal content.',
	actionName: 'Remove',
	cancelName: 'Cancel',
	variant: 'alert',
	'data-testid': 'modal',
}
