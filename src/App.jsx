import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import LeftColumn from './components/LeftColumn'
import RightColumn from './components/RightColumn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="flex">

      <Sidebar/>
      <div className='flex flex-col flex-1 relative'>
      <Navbar/>
      <div className="grid md:grid-cols-3 grid-cols-1 w-full">
        <div className="col-span-2"><LeftColumn/></div>
        <div className="w-full items-center "><RightColumn/></div>
      </div>
      </div>
      </main>

  )
}

export default App
