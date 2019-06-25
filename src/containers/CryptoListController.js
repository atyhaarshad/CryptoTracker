import React from 'react';
import Request from '../helpers/Request';
import CryptoList from '../components/CryptoList'

class AssetBuyListController extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      cryptoList: []
    }
  }

  componentDidMount(){
    const request = new Request();

    request.get(
      'https://cors-anywhere.herokuapp.com/https://dev-api.shrimpy.io/v1/exchanges/poloniex/ticker')
    .then((data) => {
      this.setState({cryptoList: data})
    })
  }

  render(){
    return (
      <div>
        <CryptoList CryptoList={this.state.cryptoList} />
      </div>
    )
  }


}





export default AssetBuyListController;
