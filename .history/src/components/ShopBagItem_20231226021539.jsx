import React from 'react'
import './ShopBagItem.css'

function ShopBagItem() {
  return (
    <tr className="shopBagItem">
        <th scope='row'>{index+1}</th>
        <td>
            <img src={gameimge} alt="" />
        </td>
    </tr>
  )
}

export default ShopBagItem
