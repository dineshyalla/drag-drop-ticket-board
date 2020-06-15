import React from 'react';
import { Layout } from './styled';
import Ticket from '../Ticket/Ticket';
import uuid from 'react-uuid';

const DragDropContext = () => {
<<<<<<< HEAD
=======

>>>>>>> bc7ee87b7a8905d8e482cc9a53e2cc1283d5f6c2
  const columnsFromBackend = {
    [uuid()]: {
      name: 'Rewards',
      items: [
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
      ],
    },
    [uuid()]: {
      name: 'C1',
      items: [],
    },
    [uuid()]: {
      name: 'C2',
      items: [],
    },
    [uuid()]: {
      name: 'C3',
      items: [],
    },
    [uuid()]: {
      name: 'C4',
      items: [],
    },
  };

  return (
<<<<<<< HEAD
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        minWidth: '500px',
      }}
    >
=======
    <div style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
>>>>>>> bc7ee87b7a8905d8e482cc9a53e2cc1283d5f6c2
      {Object.entries(columnsFromBackend).map((column) => {
        return (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
<<<<<<< HEAD
              minHeight: '400px',
              minWidth: '150px',
              border: '2px solid #e3e5e4',
              padding: '5px',
              margin: '5px',
=======
>>>>>>> bc7ee87b7a8905d8e482cc9a53e2cc1283d5f6c2
            }}
          >
            <ul className="draggable-list" id="draggable-list">
              <Ticket />
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default DragDropContext;
