import NiceModal from '@ebay/nice-modal-react'
import { ReactEventHandler, ReactNode } from 'react'

import { Modal } from '../components/Modal'

export type ModalShowProps = {
	id: string
	title: string
	subtitle?: string
	content: ReactNode
	variant?: 'primary' | 'secondary' | 'alert'
	action: ReactEventHandler<HTMLButtonElement>
	actionName: string
	cancelName: string
}

export const modalShow = ({
	id,
	title,
	subtitle = '',
	content,
	actionName,
	cancelName,
	variant = 'primary',
	action,
}: ModalShowProps) =>
	NiceModal.show(Modal, {
		id,
		title,
		subtitle,
		content,
		actionName,
		cancelName,
		variant,
		action,
	})
