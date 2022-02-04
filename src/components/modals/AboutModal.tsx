import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        an open source word game. <br/>
        Developed by {' '} 
        <a
          href="https://github.com/hamzeen"
          className="underline font-bold"
        >
          @hamzeen
        </a>{' '}
      </p>
    </BaseModal>
  )
}
