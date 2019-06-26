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
      this.setState({ownedAssets: data._embedded})
    })

    const request2 = new Request();
    request.get('https://cors-anywhere.herokuapp.com/https://dev-api.shrimpy.io/v1/exchanges/poloniex/ticker')
    .then((data) => {
      this.setState({cryptoList: data})
    })

  }


  render(){
    return (
      <div>
      <h1>Portfolio Performance</h1>
      <h3>Weekly performance:</h3>
      </div>
    )
  }

}




export default PortfolioPerformanceController;
