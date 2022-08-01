import axios from 'axios'
import React from 'react'
import {useForm,SubmitHandler} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { TypeCategory } from '../../types/category'
import { Product } from '../../types/Product'
type Props = {
  categorys: TypeCategory[]
  onAdd: (product: Product) => void
}
type Frominputs ={
    name: string,
    price: number,
    img:string,
    category: string
}

const ProductAdd = (props: Props) => {
    const {register,handleSubmit,formState:{errors}} = useForm<Frominputs>();
    const navigate = useNavigate()
    // const onSubmit: SubmitHandler<Frominputs> =data=>{
    //     console.log(data);
    //     props.onAdd(data);
    //     navigate("/admin/products")
    // }
    const onSubmit: SubmitHandler<Frominputs> = (dataInput) => {
     
      console.log(dataInput.img[0])
      const file = dataInput.img[0]
      const formData = new FormData()

      formData.append('file', file)
      formData.append("upload_preset", "y6g4x0t8")

      axios({
          url: "https://api.cloudinary.com/v1_1/tr-n-t-ng/image/upload",
          method: "POST",
          headers: {
              "Content-Type": "application/x-www-form-endcoded",
          }, data: formData,
      }).then((res) => {
          dataInput.img = res.data.url
          // console.log(dataInput.img)
          props.onAdd(dataInput)
          navigate("/admin/products");
      
      })
      // console.log(dataInput)
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
  <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Image</label>
                        <input type="file" className="form-control" {...register('img', { required: true })} placeholder="Tên sản phẩm" />
                    </div>
  <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name category</label>
                        <select id="" {...register('category', { required: true })}>
                            {props.categorys.map((item) => {
                                return <option value={item._id}>{item.name}</option>
                            })}
                        </select>
                    </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

  )
}

export default ProductAdd