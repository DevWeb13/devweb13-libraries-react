import React from 'react';
import { storiesOf } from '@storybook/react';

import { DataTableReact } from '../components/DataTableReact';

const employees = [
  {
    _id: 1,
    id: 1,
    name: 'John Doe',
    age: '30',
    salary: 20000,
  },
  {
    _id: 2,
    id: 2,
    name: 'Jane Doe',
    age: '25',
    salary: 25000,
  },
  {
    _id: 3,
    id: 3,
    name: 'Joe Doe',
    age: '35',
    salary: 30000,
  },
  {
    _id: 4,
    id: 4,
    name: 'Jack Doe',
    age: '40',
    salary: 40000,
  },
  {
    _id: 5,
    id: 5,
    name: 'Jill Doe',
    age: '45',
    salary: 50000,
  },
  {
    _id: 6,
    id: 6,
    name: 'Juan Doe',
    age: '50',
    salary: 60000,
  },
  {
    _id: 7,
    id: 7,
    name: 'Juan Doe',
    age: '55',
    salary: 70000,
  },
  {
    _id: 8,
    id: 8,
    name: 'Juan Doe',
    age: '60',
    salary: 80000,
  },
  {
    _id: 9,
    id: 9,
    name: 'Juan Doe',
    age: '65',
    salary: 90000,
  },
  {
    _id: 10,
    id: 10,
    name: 'Juan Doe',
    age: '70',
    salary: 100000,
  },
  {
    _id: 11,
    id: 11,
    name: 'Juan Doe',
    age: '75',
    salary: 110000,
  },
];

const stories = storiesOf('App test', module);

stories.add('DataTableReact', () => {
  return <DataTableReact employees={employees} />;
});
