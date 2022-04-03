import React from 'react'
import ProducList from '../../componets/ProducList'
import { Product } from '../../types/Product';

type ProducListProps = {
    product:Product[]
};

const Products = (props: ProducListProps) => {
  return (
   <ProducList product={props.product} />
  )
}

export default Products