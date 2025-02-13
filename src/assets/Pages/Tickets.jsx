import React from 'react'
import { Component, Icon } from '../style'
import ticket from '../img/ticket02.png'

export const Tickets = () => {
  return (
    <Component className='d-center'>
        <Icon src={ticket} size={17} />
    </Component>
  )
}


export default Tickets