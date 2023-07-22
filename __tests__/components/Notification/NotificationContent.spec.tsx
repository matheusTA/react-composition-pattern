import { render } from '@testing-library/react'
import { NotificationContent } from '@/components/Notification/NotificationContent'

import '@testing-library/jest-dom'

describe('NotificationContent', () => {
  it('renders NotificationContent unchanged', () => {
    const text = 'This is a notification content.'

    const { container } = render(<NotificationContent text={text} />)

    expect(container).toMatchSnapshot()
  })

  it('renders the provided text correctly', () => {
    const text = 'This is a notification content.'

    const { getByText } = render(<NotificationContent text={text} />)

    const textElement = getByText(text)

    expect(textElement).toBeInTheDocument()
    expect(textElement).toHaveClass('text-sm leading-relaxed text-zinc-600')
  })

  it('renders additional content correctly', () => {
    const text = 'This is another notification content.'

    const { getByText, container } = render(<NotificationContent text={text} />)

    const conviteElement = getByText('Convite')
    const timeElement = getByText('Há 3 min')

    expect(conviteElement).toBeInTheDocument()
    expect(conviteElement.tagName).toBe('SPAN')

    expect(timeElement).toBeInTheDocument()
    expect(timeElement.tagName).toBe('SPAN')

    expect(container).toContainElement(conviteElement)
    expect(container).toContainElement(timeElement)
  })
})
