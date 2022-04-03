import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { read } from '../../api/product';
import { Product } from '../../types/Product';
import { Image } from 'antd';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
import ReactDOM from 'react-dom';
type Props = {}

const ProductDetaill = (props: Props) => {
  const {id} = useParams();
  const [product,setproduct]=useState<Product>()
  useEffect(()=>{
    const getProduct =async () => {
       const {data} = await read(id);
       setproduct(data)
    };
    getProduct();
  },[])
  return (
   <div className="row">

<section className="products">
  <div className="container">
   
    <div className="products-conten">
      <div className="products-conten-let row">
        <div className="products-conten-let-big-img">
        <Image
     
      src={product?.img} 
    />

        </div>
        <div className="products-conten-let-small-img">
          <img src="https://pubcdn.ivymoda.com/files/product/thumab/1400/2022/01/20/6970f927bf5344d8edc289a48e8dc743.JPG"  />
          <img src="https://pubcdn.ivymoda.com/files/product/thumab/1400/2022/01/20/6970f927bf5344d8edc289a48e8dc743.JPG"  />
          <img src="https://pubcdn.ivymoda.com/files/product/thumab/1400/2022/01/20/6970f927bf5344d8edc289a48e8dc743.JPG"  />
          <img src="https://pubcdn.ivymoda.com/files/product/thumab/1400/2022/01/20/6970f927bf5344d8edc289a48e8dc743.JPG"  />
        </div>
      </div>
      <div className="products-conten-right">
        <div className="products-conten-right-name">
          <h1>   {product?.name}</h1>
          <p>MSP: 71B8858</p>
        </div>
        <div className="products-conten-right-gia">
          <p><span><del>  {product?.price}</del></span> <sup>Đ</sup> <span>  {product?.price}</span> <sup>Đ</sup></p>
        </div>
        <div className="products-conten-right-mau">
          <p />
          <p><span style={{fontWeight: 'bold'}}>Mầu sắc</span>:Tím cam*</p>
          <div className="products-conten-right-mau-img">
            <img src="https://pubcdn.ivymoda.com/images/color/014.png"  />
          </div>
        </div>
        <div className="products-conten-right-size">
          <p style={{fontWeight: 'bold'}}>Size</p>
          <div className="size">
            <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
              <div className="space-x-2 flex text-sm">
                <label>
                  <input className="sr-only peer" name="size" type="radio" defaultValue="xs" defaultChecked />
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                    XS
                  </div>
                </label>
                <label>
                  <input className="sr-only peer" name="size" type="radio" defaultValue="s" />
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                    S
                  </div>
                </label>
                <label>
                  <input className="sr-only peer" name="size" type="radio" defaultValue="m" />
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                    M
                  </div>
                </label>
                <label>
                  <input className="sr-only peer" name="size" type="radio" defaultValue="l" />
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                    L
                  </div>
                </label>
                <label>
                  <input className="sr-only peer" name="size" type="radio" defaultValue="xl" />
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                    XL
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="soluong">
          <p style={{fontWeight: 'bold'}}>Số lượng</p>
          <input type="number" id="inputValue" />
        </div>
        <p style={{color: 'red'}}>Vui lòng chọn size</p>
        <div className="products-conten-right-button">
          <button data-id="${data.id}" id="btnAddToCart"><i className="fa fa-shopping-basket" aria-hidden="true" /><p>Mua Hàng</p></button>
          <button><a >TÌM TẠI CỬA HÀNG</a></button>
        </div>
        <div className="products-conten-right-icon">
          <div className="products-conten-right-icon-item">
            <i className="fa fa-phone" aria-hidden="true" /><p>Hotline</p>
          </div>
          <div className="products-conten-right-icon-item">
            <i className="fa fa-comments-o fa-lg" aria-hidden="true" /> <p>chat</p>
          </div>
          <div className="products-conten-right-icon-item">
            <p>mail</p>
          </div>
        </div>
        <div className="products-conten-right-qr">
          <img src="https://pubcdn.ivymoda.com/images/qrcode2.png"  />
        </div>
        <div className="products-conten-right-bottom">
     
          <div className="products-conten-right-bottom-big">
          <Tabs defaultActiveKey="1" centered>
    <TabPane tab="Tab 1" key="1">
    Áo sơ mi cổ tròn, tay sát nách. Dáng áo xuông, xếp nếp từ cổ xuống tạo kiểu. Cài bằng khuy phía sau cổ.

Không quá rườm rà, cũng chẳng còn đơn giản như áo sơ mi thông thường,
    </TabPane>
    <TabPane tab="Tab 2" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Tab 3" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
          </div>
       
        </div>
      </div>
    </div>
  </div>
</section>

   



   </div>
  )
}

export default ProductDetaill