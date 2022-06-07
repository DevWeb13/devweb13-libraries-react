import React from 'react';
import { storiesOf } from '@storybook/react';

import { DataTableReact } from '../components/DataTableReact';

const employees = [
  {
    id: 1,
    name: 'John Doe',
    age: '30',
    salary: 20000,
  },
  {
    id: 2,
    name: 'Jane Doe',
    age: '25',
    salary: 25000,
  },
  {
    id: 3,
    name: 'Joe Doe',
    age: '35',
    salary: 30000,
  },
  {
    id: 4,
    name: 'Jack Doe',
    age: '40',
    salary: 40000,
  },
  {
    id: 5,
    name: 'Jill Doe',
    age: '45',
    salary: 50000,
  },
  {
    id: 6,
    name: 'Juan Doe',
    age: '50',
    salary: 60000,
  },
  {
    id: 7,
    name: 'Juan Doe',
    age: '55',
    salary: 70000,
  },
  {
    id: 8,
    name: 'Juan Doe',
    age: '60',
    salary: 80000,
  },
  {
    id: 9,
    name: 'Juan Doe',
    age: '65',
    salary: 90000,
  },
  {
    id: 10,
    name: 'Juan Doe',
    age: '70',
    salary: 100000,
  },
  {
    id: 11,
    name: 'Juan Doe',
    age: '75',
    salary: 110000,
  },
];

const stories = storiesOf('App test', module);

stories.add('App', () => {
  return <DataTableReact employees={employees} />;
});
