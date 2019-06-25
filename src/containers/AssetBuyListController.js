import React from 'react';
import Request from '../helpers/Request';

class AssetBuyListController extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      cryptoList: []
    }
  }

  componentDidMount(){
    const request = new Request();

    request.get('https://cors-anywhere.herokuapp.com/https://dev-api.shrimpy.io/v1/exchanges/poloniex/ticker')
    .then((data) => {
      this.setState({cryptoList: data})
    })
  }

  render(){
    return (
      <div>
      //We need to extract a list of currencies from the API and present it here.
      //For loop, for every crypto in the list generate a new list item etc.
      <p>Buy list </p>
      </div>
    )
  }


}





export default AssetBuyListController;
