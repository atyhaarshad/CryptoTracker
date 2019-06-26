import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PortfolioMainController from './PortfolioMainController';
import PortfolioPerformanceController from './PortfolioPerformanceController';
import CryptoListController from './CryptoListController';


const MainContainer = () => {

  return (
    <Router>
    <React.Fragment>

      <Switch>
        <Route path="/asset-buy-list" component={CryptoListController}/>
        <Route path="/portfolio-performance" component={PortfolioPerformanceController}/>
        <Route path="/" component={PortfolioMainController}/>

      </Switch>
    </React.Fragment>
    </Router>
  );

}

export default MainContainer;
