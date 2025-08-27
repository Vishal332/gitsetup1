import React from 'react'

export default function CustomButton(props) {
  return (
    <>
    <button style={props.style}>{props.title ||"Submit"}</button>
    </>
  )
}
