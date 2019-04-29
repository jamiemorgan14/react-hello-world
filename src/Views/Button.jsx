import React from 'react'

function Button(props) {
  const handleClick = () => props.onClickFuntion(props.increment)
  return (
    <button onClick={handleClick}>
      +props.increment
    </button>
  );
}

function Display(props) {
  return (
    <div>{props.message}</div>
  );
}

export default Button