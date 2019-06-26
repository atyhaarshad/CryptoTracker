import React from 'react'
import CryptoListItem from './CryptoListItem'

const CryptoList = (props) => {

  if(props.CryptoList.length === 0){
    return (
      <p>Loading...</p>
    )
  }

const allCryptos = props.CryptoList.map((crypto, index) => {
  return (
    <li key={index}>
      <div>
        <CryptoListItem crypto={crypto} />
        <button type="button">Performance</button>
        <button type="button">Buy</button>
        </div>
    </li>
    )
  })

    return (
      <div>
        <h2>Available Currencies For Trade:</h2>
        <ul>
          {allCryptos}
        </ul>
      </div>
    );


}

export default CryptoList
