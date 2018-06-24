import React from 'react'

const Button = props => (<button className="square" type={props.type} onClick={props.onClick}>
                          {props.name}
                          </button>)


export default Button
