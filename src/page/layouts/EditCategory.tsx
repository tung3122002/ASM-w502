import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { readct } from '../../api/category'
import { TypeCategory } from '../../types/category'

type Props = {
    UpdateCt: (product: TypeCategory) => void
}
type FormData = {
    name: string
}

const EditCategory = (props: Props) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        const getCategory = async () => {
            const { data } = await readct(id)
            reset(data.category)
        }
        getCategory()
    }, [])
    const onSubmit: SubmitHandler<FormData> = data => {
        props.UpdateCt(data)
        navigate('/admin/categorys')
    }
  return (
    <div><form onSubmit={handleSubmit(onSubmit)}>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Edit Category</label>
        <input type="text" className="form-control" {...register('name', { required: true })} placeholder="Tên danh mục" />
        {errors.name && <span>Bắt buộc phải nhập!</span>}
    </div>
    <br />
    <button type="submit" className="btn btn-primary w-[100%] bg-indigo-500">Edit</button>
</form></div>
  )
}

export default EditCategory