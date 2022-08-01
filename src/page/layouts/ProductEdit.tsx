import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { read } from "../../api/product";
import { TypeCategory } from "../../types/category";
import { Product } from "../../types/Product";

type ProductEditProps = {
  categorys: TypeCategory[];
  onUpdate: (product: Product) => void;
};
type FormInputs = {
  name: string;
  price: number;
  img: string;
  category: string;
};

const ProductEdit = (props: ProductEditProps) => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>();
  const navigate = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await read(id);
      reset(data);
    };
    getProduct();
  }, []);

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    props.onUpdate(data);
    navigate("/admin/products");
  };

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Tên Sản Phẩm
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          {...register("name")}
        />
        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          Giá Sản Phẩm
        </label>
        <input type="number" className="form-control" {...register("price")} />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          IMG
        </label>
        <input type="text" className="form-control" {...register("img")} />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Name category</label>
        <select id="" {...register("category", { required: true })}>
          {props.categorys.map((item) => {
            return <option value={item._id}>{item.name}</option>;
          })}
        </select>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ProductEdit;
