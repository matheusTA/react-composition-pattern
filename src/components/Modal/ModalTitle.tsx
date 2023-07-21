type ModalTitleProps = {
  children: React.ReactNode
}

export function ModalTitle({ children }: ModalTitleProps) {
  return <p className="text-md font-bold text-gray-600">{children}</p>
}
