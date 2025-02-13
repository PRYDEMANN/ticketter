import React, { useEffect } from 'react'
import { Component, FormPortal, Meter, MeterBar, Padx, Portal, SpaceBetween, Text } from '../../style'
import { Link } from 'react-router-dom'

export const Step2 = () => {
    useEffect(() => {
        const freeReg = document.querySelector('#free-reg')
        freeReg.checked=true
    })

  return (
    <div>
        <br /><br />
        <Portal size={26} radius={1.3} px={1} py={1}>
            <Component className='d-align' size={100}>
                <Component size={50} className="d-align d-justify-start">
                    <Text size={1.3}>Ticket Selection</Text>
                </Component>
                <Component size={50} className="d-align-end d-justify-end">
                    <Text size={.85}>Step 2/3</Text>
                </Component>
            </Component>
            
            <MeterBar mt={.5}>
                <Meter count={60}/>
            </MeterBar>

            <FormPortal mt={1} radius={1.3} px={1} py={1}>
                <Component className="date-intro d-center">
                    <div>
                    <Component textAlign={'center'}>
                    <Text className="arial bold" size={1.2}><i>T</i>echember Fest "25</Text>
                    </Component>
                    <Component mt={.3} textAlign={'center'}>
                    <Text size={.8} opacity={.7} className='arial'>Join ud for an unforgettable experience at <br />
                    [Event Name]! Secure your spot now.
                    </Text>
                    </Component>
                    
                    <Component mt={.3} textAlign={'center'}>
                    <Text size={.8} opacity={.7} className='arial'>📍[Event location]  || March 15, 2025 | 7:35 PM</Text>
                    </Component>
                    </div>
                </Component>
                <SpaceBetween/>
                <Text className='arial' size={.8}>Select Ticket Type:</Text>
                <Component className="type-set" mt={.5}>
                    <div className="d-flex w-100">
                        <Component size={50} className="d-flex card-type">
                        <input type="radio"  name='step2-type' id='free-reg'/>
                        <label htmlFor="free-reg">
                        <Component size={100}>
                            <Text className='arial' lnh={1.7} size={.8}>
                                <Text className="bold">FREE</Text> <br />
                                <Text size={.7}>REGULAR ACCESS</Text>
                                 <br /> 20/52</Text>
                        </Component>
                        </label>
                        </Component>
                        <Padx/>
                        <Component size={50} className="d-flex card-type">
                        <input type="radio"  name='step2-type' id='2nd-vip'/>
                        <label htmlFor="2nd-vip">
                        <Component size={100}>
                            <Text className='arial' lnh={1.7} size={.8}>
                                <Text className="bold">$150</Text> <br />
                                <Text size={.7}>VIP ACCESS</Text>
                                 <br /> 20/52</Text>
                        </Component>
                        </label>
                        </Component>
                        <Padx/>
                        <Component size={50} className="d-flex card-type">
                        <input type="radio"  name='step2-type' id='last-vip'/>
                        <label htmlFor="last-vip">
                        <Component size={100}>
                            <Text className='arial' lnh={1.7} size={.8}>
                            <Text className="bold">$150</Text> <br />
                            <Text size={.7}>VVIP ACCESS</Text>
                            <br /> 20/52</Text>
                        </Component>
                        </label>
                        </Component>
                    </div>
                </Component>
                <br />
                <Text className='arial' size={.8}>Number of Tickets:</Text>
                <Component mt={.5}>
                    <select name="" id="" className='type-select'>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </Component>
                <br />
                <div className='d-center'>
                <Link to={'/'}><button className="action-btn"><Text>Back</Text></button></Link>
                <Padx/>
                <Link to={'/step3'}><button className="action-btn opt-btn"><Text>Next</Text></button></Link>
                </div>
            </FormPortal>
        </Portal>
        <br /><br />
    </div>
  )
}

export default Step2