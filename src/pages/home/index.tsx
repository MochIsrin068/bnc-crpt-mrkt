import { Header, Table } from '../../components'

const Home = (): JSX.Element => {
   return (
      <>
         <div className="text-center w-full bg-gray-100 bg-grey-100 py-8 px-4">
            <h3 className="text-xl font-bold">Crypto Markets</h3>
            <p className="text-base mt-2">Cryptocurrency markets dashboard for monitoring your crypto for analytics your crypto to Trading be better!</p>
         </div>
         <div className="bg-white min-h-screen px-2 sm:px-4 py-5">
            <div className="container mx-auto bg-white p-0 sm:p-6">
               <Header />
               <Table />
            </div>
         </div>
         <div
            className="cursor-pointer bg-blue-400 text-center text-white fixed text-sm font-bold p-2 rounded-md bottom-4 right-2"
            aria-hidden="true"
            onClick={() => {
               window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
               })
            }}>
            Up
         </div>
      </>
   )
}

export default Home
