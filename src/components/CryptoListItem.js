import React from 'react'

const CryptoListItem = ({crypto}) => {

  if(!crypto) {
    return <p>Loading...</p>
  }

  const price = Math.round(crypto.priceUsd * 100)/100

  return (
    <div>
      <h2>Symbol: {crypto.symbol}</h2>
      <p>Name: {crypto.name}</p>
      <p>Price $: {price}</p>

    </div>
  );


}

export default CryptoListItem
