import { render } from '@testing-library/react'
import { ModalTitle } from '@/components/Modal/ModalTitle'

import '@testing-library/jest-dom'

describe('ModalTitle', () => {
  it('renders ModalRoot unchanged', () => {
    const childElement = 'Modal Title'

    const { container } = render(<ModalTitle>{childElement}</ModalTitle>)

    expect(container).toMatchSnapshot()
  })

  it('renders children correctly', () => {
    const childElement = 'Modal Title'

    const { getByText } = render(<ModalTitle>{childElement}</ModalTitle>)

    expect(getByText('Modal Title')).toBeInTheDocument()
  })

  it('applies correct CSS classes', () => {
    const childElement = 'Modal Title'

    const { container } = render(<ModalTitle>{childElement}</ModalTitle>)
    const titleElement = container.firstChild

    expect(titleElement).toHaveClass('text-md font-bold text-gray-600')
  })
})
