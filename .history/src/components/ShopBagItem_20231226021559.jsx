import React from 'react'
import './ShopBagItem.css'

function ShopBagItem({ game}) {
  return (
    <tr className="shopBagItem">
        <th scope='row'>{index+1}</th>
        <td>
            <img src={game.imge} alt="" className='img-fluid' />
        </td>
    </tr>
  )
}

export default ShopBagItem
