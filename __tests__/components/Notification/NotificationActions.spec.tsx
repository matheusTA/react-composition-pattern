import { act, render } from '@testing-library/react'
import { NotificationActions } from '@/components/Notification/NotificationActions'

import '@testing-library/jest-dom'

describe('NotificationActions', () => {
  it('renders NotificationActions unchanged', () => {
    const children = (
      <>
        <button data-testid="button-1">cancel</button>
        <button data-testid="button-2">submit</button>
      </>
    )

    const { container } = render(
      <NotificationActions>{children}</NotificationActions>,
    )

    expect(container).toMatchSnapshot()
  })

  it('renders children correctly', () => {
    const children = (
      <>
        <button data-testid="button-1">cancel</button>
        <button data-testid="button-2">submit</button>
      </>
    )

    const { getByText } = render(
      <NotificationActions>{children}</NotificationActions>,
    )

    const buttonCancel = getByText('cancel')
    const buttonSubmit = getByText('submit')

    expect(buttonCancel).toBeInTheDocument()
    expect(buttonSubmit).toBeInTheDocument()
  })

  it('calls onClick prop when button is clicked', () => {
    const onSubmitMock = jest.fn()

    const children = (
      <>
        <button data-testid="button-2" onClick={onSubmitMock}>
          submit
        </button>
      </>
    )

    const { getByText } = render(
      <NotificationActions>{children}</NotificationActions>,
    )

    const buttonSubmit = getByText('submit')

    act(() => {
      buttonSubmit.click()
    })

    expect(onSubmitMock).toBeCalledTimes(1)
  })

  it('applies the correct CSS class to the container div', () => {
    const children = (
      <>
        <button data-testid="button-1">cancel</button>
        <button data-testid="button-2">submit</button>
      </>
    )

    const { container } = render(
      <NotificationActions>{children}</NotificationActions>,
    )

    const notificationActionsDiv = container.firstChild

    expect(notificationActionsDiv).toBeInTheDocument()
    expect(notificationActionsDiv).toHaveClass('flex gap-2 self-center')
  })
})
