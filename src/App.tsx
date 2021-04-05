import React, { useState } from 'react';
import logo from './logo.svg';
import InputComponent from './components/Input';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux'
import './App.css';
import { storeType } from './store/reducer'
import { getRandomName } from './store/action';


type Props = {
  name: string,
  getRandomName(): void
}

function App(props: Props) {
  return (
    <div className="App">
      <InputComponent />
      <button onClick={props.getRandomName}>Get Random Name</button>
      <h1>{props.name}</h1>

    </div>
  );
}

const mapStateToProps = (state: storeType) => ({
  name: state.name
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  ...bindActionCreators({ getRandomName }, dispatch)

})

export default connect(mapStateToProps, mapDispatchToProps)(App);
