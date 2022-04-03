import React from 'react'

type Props = {
    name: string,
    children: JSX.Element,
}

const Showinfo = (props: Props) => {
  return (
    <div>Showinfo {props.children}</div>
  )
}

export default Showinfo