import React from 'react'
import {SearchIcon} from '@heroicons/react/solid';
import { TextInput } from '@tremor/react';
const Navbar = () => {
  return (
    <div id="top" className="relative w-full sm:flex justify-between items-center">
      <h1 className="font-bold text-gray-300 text-lg">Dashboard</h1>
      <div className="py-2">
<TextInput icon={SearchIcon} placeholder="search..." className="h-10 rounded-md py-6 "/>
      </div>
    </div>
  )
}

export default Navbar
