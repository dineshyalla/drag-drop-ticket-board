import React from 'react';
import { Layout } from './styled';
import Ticket from '../Ticket/Ticket';
import uuid from 'react-uuid';

const DragDropContext = () => {

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
    <div style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
      {Object.entries(columnsFromBackend).map((column) => {
        return (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
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
