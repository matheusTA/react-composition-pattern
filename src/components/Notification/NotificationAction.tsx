import { ButtonHTMLAttributes, ElementType } from 'react'
import { twMerge } from 'tailwind-merge'

interface NotificationActionProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType
}

export function NotificationAction({
  icon: Icon,
  className,
  ...restProps
}: NotificationActionProps) {
  return (
    <button
      className={twMerge(
        'flex h-8 w-8 items-center justify-center rounded bg-zinc-400 hover:bg-zinc-500',
        className,
      )}
      {...restProps}
    >
      <Icon className="h-3 w-3 text-zinc-50" />
    </button>
  )
}
