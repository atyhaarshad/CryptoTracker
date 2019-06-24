import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js';
import PortfolioMainController from './PortfolioMainController';
import PortfolioPerformanceController from './PortfolioPerformanceController';
import AssetBuyListController from './AssetBuyListController';

const MainContainer = () => {

  return (
    <Router>
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/portfolio-main" component={PortfolioMainController}/>
        <Route path="/portfolio-performance" component={PortfolioPerformanceController}/>
        <Route path="/asset-buy-list" component={AssetBuyListController}/>
      </Switch>
    </React.Fragment>
    </Router>
  );

}

export default MainContainer;
