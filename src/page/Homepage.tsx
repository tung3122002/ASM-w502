import React, { useState } from 'react'
import { searchProduct } from '../api/product'
import Banner from '../componets/Banner'
import Header from '../componets/Header'
import ProducList from '../componets/ProducList'
import {Product} from '../types/Product'
type ProducListProps = {
    product:Product[]
};


function Homepage(props: ProducListProps) {
  const [inputSearch, setInputSearch] = useState<string>("");
  const search = async () => {
    const { data } = await searchProduct(inputSearch);
    console.log(data);
  }
  return (
    <div>
     
        
        <ProducList product={props.product}/>
    </div>
  )
}

export default Homepage