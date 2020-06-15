import React from 'react';
import Ticket from './components/Ticket';
import DragDropContext from './components/DragDropContext';

function App() {
  return (
    <div className="App">
      <DragDropContext />
      <Ticket />
    </div>
  );
}

export default App;
