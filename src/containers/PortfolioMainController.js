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
        <h1>C R Y P T O C A R N A G E</h1>
        <h3>Welcome Back User</h3>
        <h3>The overall value of your portfolio today is:</h3>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h3>Your current assets:</h3>

      </div>
    )
  }

}

export default PortfolioMainController;
