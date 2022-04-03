import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { signup } from "../../api/auth";


type FormValues = {
    name: string,
    email: string,
    password: string
};
const Signup = () => {
    const { register, handleSubmit, formState: { errors}} = useForm<FormValues>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        signup(data);
        navigate("/signin");
    }
  return (
    <div>
       

        <div className="ml-[500px]">
<div className=" " style={{width: 500}}>
<form onSubmit={handleSubmit(onSubmit)}>
<div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register('name', { required: true, minLength: 5})} />
    {errors.name && errors.name.type === "required" && <span>Required</span>}
            {errors.name && errors.name.type === "minLength" && <span>Min length</span>}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register('email', { required: true})}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" {...register('password')}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button  className="btn btn-primary">Đăng Ký</button>
</form>


    </div>
    </div>
    </div>
  )
}

export default Signup