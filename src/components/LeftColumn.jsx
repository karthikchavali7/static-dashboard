import React from 'react'
import Carditem from './Carditem'
import { AreaChart } from '@tremor/react';
import { RiFlag2Line } from '@remixicon/react';
import {
  Badge,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react'
const chartdata = [
    {
      date: 'Jan 22',
      SemiAnalysis: 2890,
      'The Pragmatic Engineer': 2338,
    },
    {
      date: 'Feb 22',
      SemiAnalysis: 2756,
      'The Pragmatic Engineer': 2103,
    },
    {
      date: 'Mar 22',
      SemiAnalysis: 3322,
      'The Pragmatic Engineer': 2194,
    },
    {
      date: 'Apr 22',
      SemiAnalysis: 3470,
      'The Pragmatic Engineer': 2108,
    },
    {
      date: 'May 22',
      SemiAnalysis: 3475,
      'The Pragmatic Engineer': 1812,
    },
    {
      date: 'Jun 22',
      SemiAnalysis: 3129,
      'The Pragmatic Engineer': 1726,
    },
    {
      date: 'Jul 22',
      SemiAnalysis: 3490,
      'The Pragmatic Engineer': 1982,
    },
    {
      date: 'Aug 22',
      SemiAnalysis: 2903,
      'The Pragmatic Engineer': 2012,
    },
    {
      date: 'Sep 22',
      SemiAnalysis: 2643,
      'The Pragmatic Engineer': 2342,
    },
    {
      date: 'Oct 22',
      SemiAnalysis: 2837,
      'The Pragmatic Engineer': 2473,
    },
    {
      date: 'Nov 22',
      SemiAnalysis: 2954,
      'The Pragmatic Engineer': 3848,
    },
    {
      date: 'Dec 22',
      SemiAnalysis: 3239,
      'The Pragmatic Engineer': 3736,
    },
  ];
  
  const valueFormatter = function (number) {
    return '$ ' + new Intl.NumberFormat('us').format(number).toString();
  };
  const data = [
    {
      name: 'Viola Amherd',
      Role: 'Federal Councillor',
      departement:
        'The Federal Department of Defence, Civil Protection and Sport (DDPS)',
      status: 'active',
    },
    {
      name: 'Albert Rösti',
      Role: 'Federal Councillor',
      departement:
        'The Federal Department of the Environment, Transport, Energy and Communications (DETEC)',
      status: 'active',
    },
    {
      name: 'Beat Jans',
      Role: 'Federal Councillor',
      departement: 'The Federal Department of Justice and Police (FDJP)',
      status: 'active',
    },
    {
      name: 'Ignazio Cassis',
      Role: 'Federal Councillor',
      departement: 'The Federal Department of Foreign Affairs (FDFA)',
      status: 'active',
    },
    {
      name: 'Karin Keller-Sutter',
      Role: 'Federal Councillor',
      departement: 'The Federal Department of Finance (FDF)',
      status: 'active',
    },
    {
      name: 'Guy Parmelin',
      Role: 'Federal Councillor',
      departement:
        'The Federal Department of Economic Affairs, Education and Research (EAER)',
      status: 'active',
    },
    {
      name: 'Elisabeth Baume-Schneider',
      Role: 'Federal Councillor',
      departement: 'The Federal Department of Home Affairs (FDHA)',
      status: 'active',
    },
  ];
  
  
const LeftColumn = () => {
  return (
    <div className="w-full flex flex-col justify-between p-2">
      <div className="flex flex-col lg:flex-row gap-2 w-full">
        <Carditem/>
        <Carditem/>
        <Carditem/>
      </div>
      <div className="flex-auto w-full mt-11">
      <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Newsletter Revenue</h3>
      <p className="text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">$34,567</p>
      <AreaChart
        className="mt-4 h-72"
        data={chartdata}
        index="date"
        yAxisWidth={65}
        categories={['SemiAnalysis', 'The Pragmatic Engineer']}
        colors={['indigo', 'cyan']}
        valueFormatter={valueFormatter}
      />
      </div>
      <div className='flex-auto w-full mt-11'>
      <Card>
      <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">List of Swiss Federal Councillours</h3>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Position</TableHeaderCell>
            <TableHeaderCell>Department</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.name}>
              <TableCell>{item.name}</TableCell>
              <TableCell>
                {item.Role}
              </TableCell>
              <TableCell>
                {item.departement}
              </TableCell>
              <TableCell>
                <Badge color="emerald" icon={RiFlag2Line}>
                  {item.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>

      </div>
    </div>
  )
}

export default LeftColumn
