import { ReactNode, useState } from 'react'
import { BotIcon } from './icons/botIcon'

interface DropdownFilterProps {
  children: ReactNode
  initOpen: boolean
  name: string
  className?: string
  iconPosition?: 'before' | 'after'
  button?: boolean
  unCheck?: () => void
  count?: number
}

const DropdownFilter: React.FC<DropdownFilterProps> = ({
  initOpen,
  name,
  children,
  className,
  iconPosition = 'before', // default to 'before'
  button = false,
  unCheck,
  count = 0,
}) => {
  const [isOpen, setIsOpen] = useState(initOpen)

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState)
  }
  return (
    <div className='mt-'>
      <div className="flex justify-between items-end">
        <div
          className={`flex cursor-pointer items-center`}
          onClick={toggleDropdown}
        >
          {iconPosition === 'before' && (
            <BotIcon
              className={`transition-transform duration-300 mr-2 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
              color="var(--black)"
              strokeWidth={2}
              size={18}
            />
          )}
          <h3 className={`${className ?? 'text-22px font-semi-bold'}`}>
            {name}
          </h3>
          {count > 0 && (
            <p className="font-semibold bg-primary text-white rounded-full px-2 ml-2">
              {count}
            </p>
          )}
          {iconPosition === 'after' && (
            <BotIcon
              className={`transition-transform duration-300 ml-2 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
              color="var(--black)"
              strokeWidth={2}
              size={18}
            />
          )}
        </div>
        {button && (
          <button
            onClick={unCheck}
            className="text-16px text-grey hover:text-black duration-300"
          >
            сбросить
          </button>
        )}
      </div>
      <div
        className={`transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        {children}
      </div>
    </div>
  )
}

export default DropdownFilter
