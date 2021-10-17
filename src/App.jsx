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
      <span className='shopping-list'>
        <h1 id='title'>Shopping List for JuiceClub</h1>
      </span>
      <span>
        <h1 className='JuiceClub'><ShoppingList name="Juice Club" /></h1>
        <h1><Members /></h1>
      </span>
    </div>
  );
};

const Members = (props) => {
  return (
    <div className='MembersList'>
      <MembersPartation name='B4' />
      <Member name='Haruka Yoshioka' />
      <MembersPartation name='M1' />
      <Member name='Takaichi' />
      <MembersPartation name='Other' />
      <Member name='HogeHoge' />
      <Member name='PiyoPiyo' />
      <Member name='PhonePhone' />
      <Member name='Vim < Emacs' />
      <Member name='Turing Complete' />
    </div>
  );
};

const Member = (props) => {
  return (
    <div className='MembersButton' onClick={() => alert(props.name + "is selected.")}>
      < p className='MemberName' > {props.name}</p >
    </div >
  );
};

const MembersPartation = (props) => {
  return (
    <div>
      <p className='MembersPartation'>{props.name}</p>
    </div>
  );
};

const ShoppingList = (props) => {
  return (
    <div>
      <span>
        <Board />
      </span>
    </div>
  );
};

const Aquare = (props) => {

}

const Board = (props) => {
  const renderSquare = (i, name) => {
    return <Square name={name} />;
  };


  return (
    <span id="merchandiseList">
      {renderSquare(0, "Cora")}
      {renderSquare(1, "Soda")}
      {renderSquare(2, "GoGotea")}
    </span >
  );
}

const Square = (props) => {
  const srcs = new Map()
  srcs.set('Cora', Cora)
  srcs.set('Soda', Soda)
  srcs.set('GoGotea', GoGotea)

  return (
    <div className='merchandiseButton'>
      <div className="square" onClick={() => alert("Get " + props.name + " 100yen")}>
        <span className='merchandise'>
          {props.name}
        </span>
        <img src={srcs.get(props.name)} className="juiceIcon" />
      </div>
    </div>
  );
}

export default App;
