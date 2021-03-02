import React, { Fragment } from 'react';
import './App.css';
import ChartBox from './containers/ChartBox';

function App() {
  return (
    <Fragment>
      <h1>UK Top 20</h1>
      <div id="chart-box-container">
        <ChartBox/>
      </div>
    </Fragment>
  );
}

export default App;
