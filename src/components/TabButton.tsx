import clsx from 'clsx'

type TabButtonProps = {
   children: React.ReactNode
   isActive?: boolean
   onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const TabButton = ({ isActive, children, onClick }: TabButtonProps): JSX.Element => {
   return (
      <button
         onClick={onClick}
         type="button"
         className={clsx('text-xs px-6 py-2 mr-2 rounded-md focus:outline-none bg-gray-100', {
            'text-yellow-700': isActive,
            'bg-yellow-100': isActive,
            'font-bold': isActive,
         })}>
         {children}
      </button>
   )
}

TabButton.defaultProps = {
   isActive: false,
   onClick: () => null,
}

export default TabButton
