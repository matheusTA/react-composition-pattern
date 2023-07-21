interface ModalRootProps {
  isOpen: boolean
  children: React.ReactNode
}

export function ModalRoot({ isOpen, children }: ModalRootProps) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/25 text-gray-700">
          <div className="flex h-full w-full items-center justify-center">
            <div className="absolute z-50 mx-auto my-0 flex h-80 w-[480px] flex-col overflow-hidden rounded-xl bg-white shadow-2xl">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
