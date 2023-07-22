import { render, fireEvent } from '@testing-library/react'
import { NotificationAction } from '@/components/Notification/NotificationAction'

import '@testing-library/jest-dom'

const MockIcon = () => <span data-testid="mock-icon" />

describe('NotificationAction', () => {
  it('renders NotificationAction unchanged', () => {
    const { container } = render(<NotificationAction icon={MockIcon} />)

    expect(container).toMatchSnapshot()
  })

  it('renders button with correct icon', () => {
    const { getByTestId } = render(
      <NotificationAction
        icon={MockIcon}
        data-testid="notification-action-button"
      />,
    )

    const iconElement = getByTestId('mock-icon')

    expect(iconElement).toBeInTheDocument()
  })

  it('renders button with correct merge class', () => {
    const { getByTestId } = render(
      <NotificationAction
        icon={MockIcon}
        data-testid="notification-action-button"
        className="dark:bg-zinc-500"
      />,
    )

    const buttonElement = getByTestId('notification-action-button')

    expect(buttonElement).toHaveClass('dark:bg-zinc-500')
  })

  it('calls onClick prop when button is clicked', () => {
    const onClickMock = jest.fn()

    const { getByTestId } = render(
      <NotificationAction
        icon={MockIcon}
        onClick={onClickMock}
        data-testid="notification-action-button"
      />,
    )
    const buttonElement = getByTestId('notification-action-button')

    fireEvent.click(buttonElement)

    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
})
