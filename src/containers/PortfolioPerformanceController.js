import React from 'react';
import Request from '../helpers/Request';

class PortfolioPerformanceController extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      ownedAssets: [],
      cryptoList: [],
      cryptoGraphCodes: []
    }

  }

  componentDidMount(){
    const request = new Request();

    request.get('/api/cryptocurrencies')
    .then((data) => {
      this.setState({ownedAssets: data})
    })

    const request2 = new Request();
    request.get('https://cors-anywhere.herokuapp.com/https://dev-api.shrimpy.io/v1/exchanges/poloniex/ticker')
    .then((data) => {
      this.setState({cryptoList: data})
    })

  }

  calculateTotalVal(){
    var totalValue = 0;
    for (var asset in this.ownedAssets._embedded.cryptocurrencies){
      for (var currency in this.cryptoList){
        if (currency.symbol === asset.code){
          this.cryptoGraphCodes.push(asset.code);
          totalValue += (asset.quantity * currency.priceUsd)
        }
      }
    }
    this.totalValue = totalValue;

  }

  render(){
    return(
      <p>test</p>
    )
  }


}


export default PortfolioPerformanceController;
