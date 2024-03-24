import React from 'react'
import './ShopBagItem.css'

function ShopBagItem({ game, index }) {
  return (
    <tr className="shopBagItem">
        <th scope='row'>{index+1}</th>
        <td>
            <img src={game.img} alt="" className='img-fluid' />
        </td>
        <td>{game.title}</td>
        <td>${game.price.toFixed(2)}</td>
        <td>{game.discount *100}%</td>
    </tr>
  )
}

export default ShopBagItem
