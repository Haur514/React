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
        <h1 id='title'>Kusumoto Lab Shopping</h1>
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
        <span id="MenuList">
          <JuiceClub />
          <FoodClub />
          <Data />
          <PurchaseHistory />
        </span >
      </span>
    </div>
  );
};

const Aquare = (props) => {

}

const Icon = (props) => {
  const srcs = new Map()
  srcs.set('Cora', Cora)
  srcs.set('Soda', Soda)
  srcs.set('GoGotea', GoGotea)

  return (
    <div className='IconBase'>
      <img src={srcs.get(props.name)} className="juiceIcon" />
    </div>
  )
}

const JuiceClub = (props) => {
  return (
    <div className='merchandiseButton'>
      <div className="square" onClick={() => alert("Get " + props.name + " 100yen")}>
        <div className='merchandiseLabel'>
          JuiceClub
        </div>
        <span>
          <Icon name='Cora' />
          <Icon name='Soda' />
          <Icon name='GoGotea' />
        </span>
      </div>
    </div>
  );
}

const Data = (props) => {
  return (
    <div className='merchandiseButton'>
      <div className="square" >
        <div className='merchandiseLabel'>
          Data
        </div>
        <span>

        </span>
      </div>
    </div>
  );
}

const FoodClub = (props) => {
  return (
    <div className='merchandiseButton'>
      <div className="square" onClick={() => alert("Get " + props.name + " 100yen")}>
        <div className='merchandiseLabel'>
          FoodClub
        </div>
        <span>

        </span>
      </div>
    </div>
  );
}

const PurchaseHistory = (props) => {
  return (
    <div className="PurchaseHistory">
      <div className='merchandiseLabel'>
        PurchaseHistory
      </div>
      <div>
        <History />
        <History />
        <History />
        <History />
        <History />
        <History />
        <History />
        <History />
        <History />
        <History />
        <History />
        <History />
        <History />
      </div>
    </div>
  );
}

const History = (props) => {
  return (
    <div className="History">
      2021/10/17 15:23 80yen
    </div>
  )
}

export default App;
