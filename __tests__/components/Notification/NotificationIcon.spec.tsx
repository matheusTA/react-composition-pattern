import { render } from '@testing-library/react'
import { NotificationIcon } from '@/components/Notification/NotificationIcon'

import '@testing-library/jest-dom'

const MockIcon = () => <span data-testid="mock-icon" />

describe('NotificationIcon', () => {
  it('renders NotificationIcon unchanged', () => {
    const { container } = render(<NotificationIcon icon={MockIcon} />)

    expect(container).toMatchSnapshot()
  })

  it('renders the icon correctly', () => {
    const { getByTestId } = render(<NotificationIcon icon={MockIcon} />)

    const iconElement = getByTestId('mock-icon')

    expect(iconElement).toBeInTheDocument()
  })
})
