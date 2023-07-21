interface ModalHeaderProps {
  children: React.ReactNode
}

export function ModalHeader({ children }: ModalHeaderProps) {
  return (
    <header className="bg-slate-200">
      <div className="flex items-center justify-between p-3">{children}</div>
    </header>
  )
}
