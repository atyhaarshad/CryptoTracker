import React from 'react';
import Request from '../helpers/Request';


class PortfolioMainController extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      ownedAssets: []
    }
  }

  componentDidMount(){
    const request = new Request();

    request.get('/api/cryptocurrencies')
    .then((data) => {
      this.setState({ownedAssets: data})
    })
  }

  render(){
    return (
      <p>PortfolioMainController</p>
    )
  }
}
export default PortfolioMainController;
