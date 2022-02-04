import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the word in 6 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="I" />
        <Cell value="J" />
        <Cell value="Z" />
        <Cell value="E" status="correct"/>
        <Cell value="R" status="correct"/>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Letters E & R in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="T" status="present"/>
        <Cell value="I" />
        <Cell value="J" />
        <Cell value="D" />
        <Cell value="S" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter T is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="L" />
        <Cell value="E" />
        <Cell value="U" status="absent"/>
        <Cell value="R" />
        <Cell value="T" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter U is not in the word in any spot.
      </p>
    </BaseModal>
  )
}
