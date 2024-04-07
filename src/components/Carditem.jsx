import React from 'react'
import { Card, Metric, Text,Flex,BadgeDelta } from '@tremor/react';
const Carditem = () => {
  return (
    <div className="lg:w-full">
       <Card
      className="w-xs"
      decoration="top"
      decorationColor="indigo"
    >
        <Flex className="justify-between items-center"><p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Sales</p>
            <BadgeDelta>+16.7%</BadgeDelta>
      </Flex>
      <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">$34,743</p>
    </Card>
    </div>
  )
}

export default Carditem
