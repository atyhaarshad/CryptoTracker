import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PortfolioMainController from './PortfolioMainController';
import PortfolioPerformanceController from './PortfolioPerformanceController';
import AssetBuyListController from './AssetBuyListController';
import ChartTest from './ChartTest';


const MainContainer = () => {

  return (
    <Router>
    <React.Fragment>

      <Switch>
        <Route path="/asset-buy-list" component={AssetBuyListController}/>
        <Route path="/portfolio-main" component={PortfolioMainController}/>
        <Route path="/portfolio-performance" component={PortfolioPerformanceController}/>
        <Route path="/chart-test" component={ChartTest}/>
      </Switch>
    </React.Fragment>
    </Router>
  );

}

export default MainContainer;
