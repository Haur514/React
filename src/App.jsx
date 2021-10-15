import logo from './logo.svg';
import './App.css';
import Cora from './cora.jpg'
import Soda from './soda.jpg'
import GoGotea from './GoGotea.jpg'
import React, { useState, setState } from 'react';
import ReactDom from 'react-dom';


const App = (props) => {

  return (
    <div>
      <h1><ShoppingList name="dadada" /></h1>
    </div>
  );
};

const ShoppingList = (props) => {
  return (
    <div className="shopping-list">
      <h1>Shopping List for {props.name}</h1>
      <Buttonh value={0} />
      <Board />
      <ul>
        <li>Instagram</li>
        <li>WhatsApp</li>
        <li>Oculus</li>
      </ul>
    </div>
  );
};

const Aquare = (props) => {

}

const Buttonh = (props) => {
  const [count, setCount] = useState(0);
  return (
    <button className="square" onClick={() => setCount(count + 1)}>
      {count}
    </button >
  );
};

const Board = (props) => {
  const renderSquare = (i, name) => {
    return <Square name={name} />;
  };

  const [status] = useState('Next player: X');

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0, "Cora")}
        {renderSquare(1, "Soda")}
        {renderSquare(2, "GoGotea")}
      </div>
    </div>
  );
}

const Square = (props) => {
  const srcs = new Map()
  srcs.set('Cora', Cora)
  srcs.set('Soda', Soda)
  srcs.set('GoGotea', GoGotea)

  return (
    <div>
      <button className="square" onClick={() => alert("Get " + props.name + " 100yen")}>
        {props.name}
      </button>
      <img src={srcs.get(props.name)} width='100' alt="icon" />
    </div>
  );
}

export default App;
