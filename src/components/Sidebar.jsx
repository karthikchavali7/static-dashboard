import React from 'react';
import { ArrowUpIcon,ExternalLinkIcon,MailIcon, BellIcon, CreditCardIcon, DocumentSearchIcon, ChartBarIcon, HomeIcon } from '@heroicons/react/solid';

const Sidebar = () => {
  return (
    <div className="bg-slate-800 flex-none w-14 sm:w-20 h-screen">
      <div className='h-20 flex items-center justify-center'>
       <a href="#top"> <HomeIcon width={30} className='text-gray-300 ml-3 sm:mr-3'/></a>
      </div>
      <div className='mt-0 flex flex-col items-start justify-start m:l-3'>
        <ChartBarIcon width={30} className='text-gray-300 mt-0 ml-5  ' />
       <a href='#tuy'> <DocumentSearchIcon width={30} className='text-gray-300 ml-5 mt-4' /></a>
       <a href='#bb'><MailIcon width={30} className='text-gray-300 mt-4 ml-5'  /></a>
        <CreditCardIcon width={30} className='text-gray-300 ml-5 mt-4' />
        <BellIcon width={30} className='text-gray-300 ml-5 mt-4' />
        <div className='mt-40 fixed bottom-4 sm:l-6 lg:ml-2'>
          <a href='#top'>
            <ArrowUpIcon width={32} className='text-gray-300 ml-3 mt-4'/> </a>
            <ExternalLinkIcon width={32} className='text-gray-300 ml-3 mt-4'/>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
