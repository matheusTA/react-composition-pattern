'use client'

import { Modal } from '@/components/Modal'
import { Notification } from '@/components/Notification'
import { Check, Rocket, X } from 'lucide-react'
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
          className="rounded-md bg-zinc-500 px-2 py-1.5 text-white transition-colors hover:bg-zinc-600"
          onClick={handleOpenModal}
        >
          Abrir modal
        </button>

        <div className="mx-auto w-[448px] overflow-hidden rounded">
          <div className="bg-zinc-300 px-5 py-2 text-sm font-medium text-zinc-500">
            Novas
          </div>

          <div className="divide-y-2 divide-zinc-300">
            <Notification.Root>
              <Notification.Icon icon={Rocket} />
              <Notification.Content text="Você recebeu um convite para fazer parte da empresa Rocketseat." />
            </Notification.Root>

            <Notification.Root>
              <Notification.Content text="Você recebeu um convite para fazer parte da empresa Rocketseat." />
              <Notification.Actions>
                <Notification.Action
                  icon={X}
                  onClick={() => console.log('cancel')}
                />
                <Notification.Action
                  className="bg-violet-500 hover:bg-violet-600"
                  icon={Check}
                  onClick={() => console.log('submit')}
                />
              </Notification.Actions>
            </Notification.Root>

            <Notification.Root>
              <Notification.Icon icon={Rocket} />
              <Notification.Content text="Você recebeu um convite para fazer parte da empresa Rocketseat." />
              <Notification.Actions>
                <Notification.Action
                  className="bg-violet-500 hover:bg-violet-600"
                  icon={Check}
                  onClick={() => console.log('submit')}
                />
              </Notification.Actions>
            </Notification.Root>
          </div>

          <div className="bg-zinc-300 px-5 py-2 text-sm font-medium text-zinc-500">
            Antigas
          </div>

          <div className="divide-y-2 divide-zinc-300">
            <Notification.Root>
              <Notification.Content text="Você recebeu um convite para fazer parte da empresa Rocketseat." />
            </Notification.Root>
          </div>
        </div>
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
