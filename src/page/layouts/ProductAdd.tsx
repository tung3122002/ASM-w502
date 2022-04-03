import React from 'react'
import {useForm,SubmitHandler} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Product } from '../../types/Product'
type Props = {
    onAdd: (product: Product) => void
}
type Frominputs ={
    name: string,
    price: number,
    img:string
}

const ProductAdd = (props: Props) => {
    const {register,handleSubmit,formState:{errors}} = useForm<Frominputs>();
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<Frominputs> =data=>{
        console.log(data);
        props.onAdd(data);
        navigate("/admin/products")
    }
  return (
   <form onSubmit={handleSubmit(onSubmit)}> 
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Tên Sản Phẩm</label>
    <input type="text" className="form-control" id="exampleInputEmail1" {...register('name')} />
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3">
    <label htmlFor="price" className="form-label">Giá Sản Phẩm</label>
    <input type="number" className="form-control"  {...register('price')}  />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">IMG</label>
    <input type="text" className="form-control"  {...register('img')}  />
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

  )
}

export default ProductAdd