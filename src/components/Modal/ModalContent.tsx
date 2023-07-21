interface ModalContentProps {
  children: React.ReactNode
}

export function ModalContent({ children }: ModalContentProps) {
  return (
    <div className="flex flex-1 items-center justify-center p-3">
      {children}
    </div>
  )
}
