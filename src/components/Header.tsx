import { useContext } from 'react'
import { MainContext } from '../context/MainContext'
import { MainContextType } from '../types'
import TabButton from './TabButton'
import SearchBar from './SearchBar'

const Header = (): JSX.Element => {
   const mainContext = useContext<MainContextType | undefined>(MainContext)

   return (
      <div className="flex w-full flex-col sm:flex-row items-start sm:items-center sticky top-0 bg-white border-b-2 border-gray-200 pb-2">
         <div className="flex flex-1 w-full items-center gap-2 py-4 overflow-scroll header-overflow">
            {mainContext?.menuTab.map((menu) => (
               <TabButton
                  onClick={() => {
                     mainContext.onShort(menu.sortTag)
                  }}
                  isActive={mainContext.sortTag === menu.sortTag}
                  key={menu.id}>
                  {menu.name}
               </TabButton>
            ))}
         </div>
         <SearchBar
            value={mainContext?.searchValue}
            onChange={(e: any) => {
               mainContext?.setSearchValue(e.target.value)
            }}
         />
      </div>
   )
}

export default Header
