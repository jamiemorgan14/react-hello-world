import React from 'react'
import Button from './Button.jsx'
import Display from './Button.jsx'

function Home() {
  const counter = 0;
  const incrementCounter = (incrementValue) => counter + incrementValue;
  return (
    <div>
      <Button onClickFunction={incrementCounter} increment={1} />
      <Button onClickFunction={incrementCounter} increment={5} />
      <Button onClickFunction={incrementCounter} increment={10} />
      <Button onClickFunction={incrementCounter} increment={100} />
      <Display message={counter} />
    </div>
  );
}




export default Home;