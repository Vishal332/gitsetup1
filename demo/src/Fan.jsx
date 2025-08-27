import React from 'react'

function Fan(props) {
  if(props.login){
  return (
    <div>
      {props.welcome&&<h1>Welcome to fan page</h1>}
      <h1>welcome to vishal </h1>
      this is fan session
      <h2>{props.intros}</h2>

    </div>
  )
}else{
  return <>
  {/*ternary operator*/}
  {props.age>=18?"login please to contiue":"you can't access the page because ur age is less than 18"}
  </>;
}
}
export {Fan}
