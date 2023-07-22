import { render } from '@testing-library/react'
import { ModalHeader } from '@/components/Modal/ModalHeader'

import '@testing-library/jest-dom'

describe('ModalHeader', () => {
  it('renders ModalHeader unchanged', () => {
    const childElement = <h2>Modal Title</h2>

    const { container } = render(<ModalHeader>{childElement}</ModalHeader>)

    expect(container).toMatchSnapshot()
  })

  it('renders children correctly', () => {
    const childElement = <h2>Modal Title</h2>

    const { getByText } = render(<ModalHeader>{childElement}</ModalHeader>)

    expect(getByText('Modal Title')).toBeInTheDocument()
  })

  it('applies correct CSS classes', () => {
    const childElement = <h2>Modal Title</h2>

    const { container } = render(<ModalHeader>{childElement}</ModalHeader>)
    const headerElement = container.firstChild

    expect(headerElement).toHaveClass('bg-slate-200')
  })
})
