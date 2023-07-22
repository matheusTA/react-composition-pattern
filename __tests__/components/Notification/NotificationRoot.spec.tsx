import { render } from '@testing-library/react'
import { NotificationRoot } from '@/components/Notification/NotificationRoot'

import '@testing-library/jest-dom'

describe('NotificationRoot', () => {
  it('renders NotificationRoot unchanged', () => {
    const children = (
      <>
        <div data-testid="child-1">Child</div>
      </>
    )

    const { container } = render(
      <NotificationRoot>{children}</NotificationRoot>,
    )

    expect(container).toMatchSnapshot()
  })

  it('renders children correctly', () => {
    const children = (
      <>
        <div data-testid="child-1">Child</div>
      </>
    )

    const { getByText } = render(
      <NotificationRoot>{children}</NotificationRoot>,
    )

    const childElement = getByText('Child')

    expect(childElement).toBeInTheDocument()
  })

  it('applies the correct CSS class to the container div', () => {
    const children = (
      <>
        <div>Child 1</div>
        <div>Child 2</div>
      </>
    )

    const { container } = render(
      <NotificationRoot>{children}</NotificationRoot>,
    )

    const notificationRootDiv = container.firstChild

    expect(notificationRootDiv).toBeInTheDocument()
    expect(notificationRootDiv).toHaveClass(
      'flex items-start gap-6 bg-zinc-200 px-8 py-4',
    )
  })
})
