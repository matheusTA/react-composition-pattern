'use client'

import { Modal } from '@/components/Modal'
import { X } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <main className="flex min-h-screen flex-col items-center gap-5 bg-white p-24">
        <h1 className="text-2xl font-bold text-black">
          React composition pattern
        </h1>

        <button
          className="rounded-md bg-zinc-600 px-2 py-1.5 transition-colors hover:bg-zinc-500"
          onClick={handleOpenModal}
        >
          Abrir modal
        </button>
      </main>

      <Modal.Root isOpen={isModalOpen}>
        <Modal.Header>
          <Modal.Title>Important Content</Modal.Title>
          <Modal.Action onClick={handleCloseModal}>
            <X className="text-lg text-gray-500" />
          </Modal.Action>
        </Modal.Header>

        <Modal.Content>
          <h2 className="text-gray-800">IMPORTANT CONTENT</h2>
        </Modal.Content>

        <Modal.Actions>
          <Modal.Action color="error" onClick={handleCloseModal}>
            Canelar
          </Modal.Action>

          <Modal.Action color="success" onClick={handleCloseModal}>
            Salvar
          </Modal.Action>
        </Modal.Actions>
      </Modal.Root>
    </>
  )
}
