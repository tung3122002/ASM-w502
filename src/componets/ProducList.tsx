import React from "react";
import { Product } from "../types/Product";

import { Tabs } from 'antd';
import { Link } from "react-router-dom";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
type ProducListProps = {
    product:Product[]
};

function ProducList(props: ProducListProps) {
  return (
    <div className="text-center my-3">
      <h1 className="text-center">BEST SELLER</h1>
<Tabs defaultActiveKey="1" onChange={callback} centered>

    <TabPane tab="IVY moda" key="1">
    
    <div className="row">


{props.product?.map((product) =>{
    return <div className="col-3">
      
    <div className="card" >
      <img src={product.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">
          {product.price}
        </p>
     
        <Link  className="btn btn-primary" to={`/product/${product._id}`}>Xem Chi Tiết</Link>
      </div>
    </div>
  </div>
  
})}

</div>
    </TabPane>
    <TabPane tab=" IVY men" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="IVY kids" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>

  {/* <div className="link-product t">
  <a href="https://ivymoda.com/danh-muc/nu?hid_best_seller=1" className="all-product">Xem tất cả</a>
</div> */}
    </div>
  );
}

export default ProducList;
