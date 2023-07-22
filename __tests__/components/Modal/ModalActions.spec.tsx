import { render } from '@testing-library/react'
import { ModalActions } from '@/components/Modal/ModalActions'

import '@testing-library/jest-dom'

describe('ModalActions', () => {
  it('renders ModalActions unchanged', () => {
    const childElement = <button>Submit</button>

    const { container } = render(<ModalActions>{childElement}</ModalActions>)

    expect(container).toMatchSnapshot()
  })

  it('renders children correctly', () => {
    const childElement = <button>Submit</button>

    const { getByText } = render(<ModalActions>{childElement}</ModalActions>)

    expect(getByText('Submit')).toBeInTheDocument()
  })

  it('renders multiple children correctly', () => {
    const childElementButtonSave = <button>Save</button>
    const childElementButtonCancel = <button>Cancel</button>

    const { getByText } = render(
      <ModalActions>
        {childElementButtonSave}
        {childElementButtonCancel}
      </ModalActions>,
    )

    expect(getByText('Save')).toBeInTheDocument()
    expect(getByText('Cancel')).toBeInTheDocument()
  })

  it('applies correct CSS classes', () => {
    const childElement = <button>Close</button>

    const { container } = render(<ModalActions>{childElement}</ModalActions>)
    const footerElement = container.firstChild

    expect(footerElement).toHaveClass('flex w-full justify-end gap-2 p-3')
  })
})
