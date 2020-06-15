import React from 'react';
import { Layout } from './styled';

const Ticket = () => {
  const richestPeople = [
    'Jeff Bezos',
    'Bill Gates',
    'Warren Buffett',
    'Bernard Arnault',
    'Carlos Slim Helu',
    'Amancio Ortega',
    'Larry Ellison',
    'Mark Zuckerberg',
    'Michael Bloomberg',
    'Larry Page',
  ];

  return (
    <div>
      {[...richestPeople].map((item, index) => {
        return (
          <li style={{ listStyle: 'none' }}>
            <Layout draggable="true">{item}</Layout>
          </li>
        );
      })}
    </div>
  );
};

export default Ticket;
