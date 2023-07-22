import { render } from '@testing-library/react'
import { ModalRoot } from '@/components/Modal/ModalRoot'

import '@testing-library/jest-dom'

describe('ModalRoot component', () => {
  it('renders ModalRoot unchanged', () => {
    const isOpen = true
    const childElement = <p>Modal Content</p>

    const { container } = render(
      <ModalRoot isOpen={isOpen}>{childElement}</ModalRoot>,
    )

    expect(container).toMatchSnapshot()
  })

  it('renders modal content when isOpen is true', () => {
    const isOpen = true
    const childElement = <p>Modal Content</p>

    const { getByText } = render(
      <ModalRoot isOpen={isOpen}>{childElement}</ModalRoot>,
    )

    expect(getByText('Modal Content')).toBeInTheDocument()
  })

  it('does not render modal content when isOpen is false', () => {
    const isOpen = false
    const childElement = <p>Modal Content</p>

    const { queryByText } = render(
      <ModalRoot isOpen={isOpen}>{childElement}</ModalRoot>,
    )

    expect(queryByText('Modal Content')).toBeNull()
  })

  it('applies correct CSS classes when modal is open', () => {
    const isOpen = true
    const childElement = <p>Modal Content</p>

    const { container } = render(
      <ModalRoot isOpen={isOpen}>{childElement}</ModalRoot>,
    )
    const modalRootElement = container.firstChild

    expect(modalRootElement).toHaveClass(
      'fixed inset-0 z-40 bg-black/25 text-gray-700',
    )
  })
})
