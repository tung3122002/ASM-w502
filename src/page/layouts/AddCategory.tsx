import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type Props = {
  onAddCategory: (category: FormData) => void;
};
type FormData = {
  name: string;
};
const AddCategory = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormData> = (data) => {
    props.onAddCategory(data);
    navigate("/admin/categorys");
  };

  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Tên Danh Mục
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          {...register("name")}
        />
        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default AddCategory;
