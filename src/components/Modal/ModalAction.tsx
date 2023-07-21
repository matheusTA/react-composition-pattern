import { twMerge } from 'tailwind-merge'

const Colors = {
  success: 'bg-green-500',
  error: 'bg-red-500',
  warning: 'bg-yellow-500',
  info: 'bg-blue-500',
  none: 'bg-transparent',
} as const

interface ModalActionProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'success' | 'warning' | 'error' | 'info' | 'none'
}

export function ModalAction({
  color = 'none',
  className,
  onClick,
  children,
  ...restProps
}: ModalActionProps) {
  const colorButton = Colors[color]

  return (
    <button
      {...restProps}
      onClick={onClick}
      className={twMerge(
        'rounded-md px-4 py-1 text-white',
        className,
        colorButton,
      )}
    >
      {children}
    </button>
  )
}
