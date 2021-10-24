import { QueryClient, QueryClientProvider } from 'react-query'
import MainContextProvider from './context/MainContext'

import './styles/main.css'
import Home from './pages/home'

// Create a client
const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         staleTime: Infinity,
      },
   },
})

const App = (): JSX.Element => {
   return (
      <QueryClientProvider client={queryClient}>
         <MainContextProvider>
            <Home />
         </MainContextProvider>
      </QueryClientProvider>
   )
}

export default App
