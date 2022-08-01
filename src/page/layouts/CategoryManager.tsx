import React from 'react'
import { Link } from 'react-router-dom'
import { TypeCategory } from '../../types/category'

type Props = {
    categorys: TypeCategory[]
    onRemoveCt: (_id: number) => void

}

const CategoryManager = (props: Props) => {
  return (


     <>
      
    <h2 className="my-4">Quản Lý Danh Mục</h2> 
    <button  className="btn btn-danger"> <Link className="link" to={`add`}>Thêm Danh Mục</Link>    </button>
    <table className="table">
       
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Tên Tên Danh Mục</th>
       
          <th scope="col">Chức Năng</th>
        </tr>
      </thead>
      <tbody>
        {props.categorys.map((item, index) => {
          return (
            <tr key={index}>
              <th scope="row">{index+1}</th>
              <td>{item.name}</td>
             
            
               <td>
                 <Link className="link" to={`${item._id}/edit`}>Edit</Link>               </td>
            <tr>
            <button onClick={() => props.onRemoveCt(item._id)} type="button" className="btn btn-danger bg-red-600">Remove</button>
            </tr>

            </tr>
          );
        })}
      </tbody>
      {/* <Table dataSource={dataSource} columns={columns} /> */}
      
    </table>
    </>
  )
}

export default CategoryManager