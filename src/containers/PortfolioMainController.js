import React from 'react';
import Request from '../helpers/Request';


class PortfolioMainController extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      ownedAssets: null
    }

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount(){
    const request = new Request();

    request.get('/api/cryptocurrencies')
    .then((data) => {
      this.setState({ownedAssets: data._embedded})
    })
  }

  handleDelete(id){
    const request = new Request();
    const url = "/api/cryptocurrencies/" + id;

    request.delete(url)
    .then(() => {
    window.location = "/cryptocurrencies";
    })
  }

  render(){
    return (
      <div>
        <h1>Portfolio</h1>
        {this.state.ownedAssets && this.state.ownedAssets.cryptocurrencies.map(asset => {
          return <div><ul><h2>{asset.name}</h2><h3>{asset.code}</h3><p>{asset.quantity}</p></ul>

          <button onClick={this.deleteAsset}>Sell </button>
          </div>


        })}
      </div>
    )
  }

}

export default PortfolioMainController;
