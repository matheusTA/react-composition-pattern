import { render } from '@testing-library/react'
import { ModalContent } from '@/components/Modal/ModalContent'

import '@testing-library/jest-dom'

describe('ModalContent', () => {
  it('renders ModalContent unchanged', () => {
    const childElement = <p>Modal Content</p>

    const { container } = render(<ModalContent>{childElement}</ModalContent>)

    expect(container).toMatchSnapshot()
  })

  it('renders children correctly', () => {
    const childElement = <p>Modal Content</p>

    const { getByText } = render(<ModalContent>{childElement}</ModalContent>)

    expect(getByText('Modal Content')).toBeInTheDocument()
  })

  it('applies correct CSS classes', () => {
    const childElement = <p>Modal Content</p>

    const { container } = render(<ModalContent>{childElement}</ModalContent>)
    const divElement = container.firstChild

    expect(divElement).toHaveClass(
      'flex flex-1 items-center justify-center p-3',
    )
  })
})
