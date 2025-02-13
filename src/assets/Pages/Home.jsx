import React, { useEffect } from 'react'
import { Component, FormPortal, Meter, MeterBar, Padx, Portal, SpaceBetween, Text } from '../style'
import { Link } from 'react-router-dom'

export const Home = () => {
    useEffect(() => {
        const reg = document.querySelector('#reg')
        reg.checked=true
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
                    <Text size={.85}>Step 1/3</Text>
                </Component>
            </Component>
            
            <MeterBar mt={.5}>
                <Meter count={30}/>
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
                        <input type="radio"  name='card-type' id='reg'/>
                        <label htmlFor="reg">
                        <Component size={70}>
                                <Text className='arial' lnh={1.7} size={.7}>REGULAR ACCESS <br /> 20 left!</Text>
                            </Component>
                            <Component size={30}>
                                <div className="d-align d-justify-end type-price">
                                    <Text className="arial" size={.8}>Free</Text>
                                </div>
                            </Component>
                        </label>
                        </Component>
                        <Padx/>
                        <Component size={50} className="d-flex card-type">
                        <input type="radio"  name='card-type' id='vip'/>
                        <label htmlFor="vip">
                            <Component size={65}>
                                <Text className='arial' lnh={1.7} size={.7}>VIP ACCESS <br /> 20 left!</Text>
                            </Component>
                            <Component size={35}>
                                <div className="d-align d-justify-end type-price">
                                    <Text className="arial" size={.8}>$50</Text>
                                </div>
                            </Component>
                        </label>
                        </Component>
                    </div>
                    <Component mt={.5}>
                    <div className="d-flex w-100">
                        <Component size={50} className="d-flex card-type card-type-default">
                        <input type="radio"  name='card-type' id='vvip'/>
                        <label htmlFor="vvip">
                        <Component size={70}>
                                <Text className='arial' lnh={1.7} size={.7}>VVIP ACCESS <br /> 20 left!</Text>
                            </Component>
                            <Component size={30}>
                                <div className="d-align d-justify-end type-price">
                                    <Text className="arial" size={.8}>$150</Text>
                                </div>
                            </Component>
                        </label>
                        </Component>
                        <Padx/>
                        <Component size={50} className="d-flex card-type hidden">
                            <Component size={65}>
                                <Text className='arial' lnh={1.7} size={.7}>VIP ACCESS <br /> 20 left!</Text>
                            </Component>
                            <Component size={35}>
                                <div className="d-align d-justify-end type-price">
                                    <Text className="arial" size={.8}>$50</Text>
                                </div>
                            </Component>
                        </Component>
                    </div>
                    </Component>
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
                <button className="action-btn"><Text>Cancel</Text></button>
                <Padx/>
                <Link to={'/step2'}><button className="action-btn opt-btn"><Text>Next</Text></button></Link>
                </div>
            </FormPortal>
        </Portal>
        <br /><br />
    </div>
  )
}

export default Home