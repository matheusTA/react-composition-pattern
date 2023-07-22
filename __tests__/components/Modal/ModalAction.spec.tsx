import { act, render } from '@testing-library/react'
import { ModalAction } from '@/components/Modal/ModalAction'

import '@testing-library/jest-dom'

const mockOnClick = jest.fn()

describe('ModalAction', () => {
  it('renders ModalAction unchanged', () => {
    const { container } = render(<ModalAction>Save</ModalAction>)

    expect(container).toMatchSnapshot()
  })

  it('should render correctly', () => {
    const { getByText } = render(<ModalAction>Save</ModalAction>)

    const element = getByText(/Save/i)

    expect(element).toBeVisible()
  })

  it('should call onClick when button is clicked', () => {
    const { getByText } = render(
      <ModalAction onClick={mockOnClick}>Save</ModalAction>,
    )

    const element = getByText(/Save/i)

    act(() => {
      element.click()
    })

    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })

  describe('colors', () => {
    it('should render with default color', () => {
      const { container } = render(<ModalAction>Save</ModalAction>)

      expect(container.firstChild).toHaveClass('bg-transparent')
    })

    it('should render with success color', () => {
      const { container } = render(
        <ModalAction color="success">Save</ModalAction>,
      )

      expect(container.firstChild).toHaveClass('bg-green-500')
    })

    it('should render with warning color', () => {
      const { container } = render(
        <ModalAction color="warning">Save</ModalAction>,
      )

      expect(container.firstChild).toHaveClass('bg-yellow-500')
    })

    it('should render with error color', () => {
      const { container } = render(
        <ModalAction color="error">Save</ModalAction>,
      )

      expect(container.firstChild).toHaveClass('bg-red-500')
    })

    it('should render with info color', () => {
      const { container } = render(<ModalAction color="info">Save</ModalAction>)

      expect(container.firstChild).toHaveClass('bg-blue-500')
    })
  })
})
