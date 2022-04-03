import React from 'react'
import Banner from '../componets/Banner'
import Header from '../componets/Header'
import ProducList from '../componets/ProducList'
import {Product} from '../types/Product'
type ProducListProps = {
    product:Product[]
};

function Homepage(props: ProducListProps) {
  return (
    <div>
     
        
        <ProducList product={props.product}/>
    </div>
  )
}

export default Homepage