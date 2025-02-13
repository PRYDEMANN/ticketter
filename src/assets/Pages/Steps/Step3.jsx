import React from 'react'
import { Component, FormPortal, Icon, Meter, MeterBar, Padx, Portal, SpaceBetween, Text } from '../../style'
import { Link } from 'react-router-dom'
import ticket from '../../img/ticket01.png'

export const Step3 = () => {
  return (
    <div>
        <br /><br />
        <Portal size={26} radius={1.3} px={1} py={1}>
            <Component className='d-align' size={100}>
                <Component size={50} className="d-align d-justify-start">
                    <Text size={1.3}>Ready</Text>
                </Component>
                <Component size={50} className="d-align-end d-justify-end">
                    <Text size={.85}>Step 3/3</Text>
                </Component>
            </Component>
            
            <MeterBar mt={.5}>
                <Meter count={100}/>
            </MeterBar>
            <br />
            <Component textAlign={'center'}>
                <Text size={1.2} className="arial">
                <Text className="bold">Your Ticket is Booked</Text><br />
                <Text size={.55} opacity={.6}>You can download or check your email for a copy</Text></Text>
            </Component>
            <br />
            <div className="d-center">
            <Icon src={ticket} size={20} />
            </div>
            <br /><br />
                <div className='d-center'>
                <Link to={'/step2'}><button className="action-btn"><Text>Back</Text></button></Link>
                <Padx/>
                <Link to={'/tickets'}><button className="action-btn opt-btn"><Text>Download</Text></button></Link>
                </div>
        </Portal>
        <br /><br />
    </div>
  )
}

export default Step3