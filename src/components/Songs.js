import React, { Component } from 'react';

const Songs = (props) => {

  return (
    <tr>
      <td className="position">{props.position}</td>
      <td>{props.title}</td>
      <td>{props.artist}</td>
      <td><img src={props.logo} alt="single cover" width='100px'/></td>
    </tr>
  )

}

export default Songs;
