interface ModalActionsProps {
  children: React.ReactNode
}

export function ModalActions({ children }: ModalActionsProps) {
  return (
    <footer className="flex w-full justify-end gap-2 p-3">{children}</footer>
  )
}
