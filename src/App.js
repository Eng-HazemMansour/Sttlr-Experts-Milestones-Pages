import './App.css';
import React from 'react';
import { Route } from "react-router-dom";
import Experts from './Experts';
import Milestones from './Milestones'

function App() {
  return (
    <React.Fragment>
      <Route path="/milestones" component={Milestones} />
      <Route path="/experts" component={Experts} />
    </React.Fragment>
  );
}

export default App;
