import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../../types/Product";
import { Table, Tag, Space } from 'antd';
import { TypeCategory } from "../../types/category";
type Props = {
  categorys: TypeCategory[],
  products: Product[];
  onRemove: (id: number) => void
};

// const dataSource = [
//   {
//     key: '1',
//     name: 'Mike',
//     age: 32,
//     address: '10 Downing Street',
//   },
//   {
//     key: '2',
//     name: 'John',
//     age: 42,
//     address: '10 Downing Street',
//   },
// ];

// const columns = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     key: 'name',
//   },
//   {
//     title: 'Price',
//     dataIndex: 'price',
//     key: 'price',
//   },
//   {
//     title: 'IMG',
//     dataIndex: 'img',
//     key: 'img',
//   },
//   {
//     title: 'Action',
//     key: 'action',
//     render: (text, record) => (
//       <Space size="middle">
//         <a>Invite {record.name}</a>
//         <button onClick={()=>onRemove(product._id)} className="btn btn-danger">Remove</button>
//       </Space>
//     ),
//   },
// ];

const ProductManager = ( {products, categorys,onRemove}: Props) => {




  return (
      <>
      
    <h2 className="my-4">Quản Lý Sản Phẩm</h2> 
    <button  className="btn btn-danger"> <Link className="link" to={`add`}>Thêm sản phẩm</Link>    </button>
    <table className="table">
       
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Tên Sản Phẩm</th>
          <th scope="col">Giá Sản Phẩm </th>
          <th scope="col">Chức Năng</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => {
          return (
            <tr key={index}>
              <th scope="row">{index+1}</th>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td><img width="50px" height=""src={product.img} alt="" /></td>
               <td>
                 <Link className="link" to={`${product._id}/edit`}>Edit</Link>               </td>
            <tr>
            <button onClick={()=>onRemove(product._id)} className="btn btn-danger">Remove</button>
            </tr>

            </tr>
          );
        })}
      </tbody>
      {/* <Table dataSource={dataSource} columns={columns} /> */}
      
    </table>
    </>
  );
};

export default ProductManager;
