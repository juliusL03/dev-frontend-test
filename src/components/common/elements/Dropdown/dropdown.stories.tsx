import {action} from '@storybook/addon-actions'
import type {Meta, StoryObj} from '@storybook/react'

import {DropdownIcon} from '@/assets/icon'

import {DropdownProps} from './types'

import Dropdown from '.'

const options = [
	{value: 'option1', label: 'Option 1'},
	{value: 'option2', label: 'Option 2'},
	{value: 'option3', label: 'Option 3'}
] as DropdownProps['options']

const meta: Meta<typeof Dropdown> = {
	title: 'Dropdown',
	component: Dropdown,
	tags: ['autodocs'],
	args: {
		label: 'Select Option',
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		onSelect: () => {}
	}
}

export default meta
type Story = StoryObj<typeof Dropdown>

export const Default: Story = {
	args: {
		label: 'Select Option',
		options,
		onSelect: action('onSelect'),
		variant: 'default'
	},
	render: ({label, onSelect, options, variant}: DropdownProps) => (
		<Dropdown variant={variant} label={label} value="" onSelect={onSelect} options={options} iconRight={DropdownIcon}/>
	)
}
