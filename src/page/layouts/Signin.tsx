import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { signin } from "../../api/auth";
import { authenticate } from "../../utils/localStorage";
// import { signin, signup } from "../api/auth";
// import { authenticate } from "../utils/localStorage";

type FormValues = {
    name: string,
    email: string,
    password: string
};
const Signin = () => {
    const { register, handleSubmit, formState: { errors}} = useForm<FormValues>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        const {data: user } = await signin(data);
        authenticate(user, () => navigate('/'))
    }
  return (
    <div className="row">
    <div className="col">
<div className="auth__login auth__block">
  <h3 className="auth__title">Bạn đã có tài khoản IVY</h3>
  <div className="auth__login__content">
    <p className="auth__description">
      Nếu bạn đã có tài khoản, hãy đăng nhập để tích lũy điểm
      thành viên và nhận được những ưu đãi tốt hơn!
    </p>
    <form className="auth__form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <input className="form-control"  type="email" placeholder="Email/SĐT"  {...register('email', { required: true,minLength: 5})} />
      </div>
      {errors.email && errors.email.type === "required" && <span>Vui Lòng nhập</span>}
            {errors.email && errors.email.type === "minLength" && <span>Min length</span>}
      <div className="form-group">
        <input className="form-control"  type="password" placeholder="Mật khẩu" {...register('password',{ required: true,minLength: 5})} />
      </div>
      {errors.password && errors.password.type === "required" && <span>Vui Lòng nhập</span>}
            {errors.password && errors.password.type === "minLength" && <span>Min length</span>}
      <div className="auth__form__options">
        <div className="form-checkbox">
          <label>
            <input className="checkboxs" defaultValue={1} name="customer_remember" type="checkbox" />
            <span style={{marginLeft: 5}}> Ghi nhớ đăng nhập</span>
          </label>
        </div>
        <a className="auth__form__link" href="">Quên mật khẩu? </a>
      </div>
      <div className="auth__form__buttons">
        <button id="but_login_email" name="but_login_email" className="btn btn--large">Đăng nhập</button>
      </div>
    </form>
  </div>
</div>



    </div>
    <div className="col">
    <div className="auth__login auth__block">
  <h3 className="auth__title">Khách hàng mới của IVY moda</h3>
  <div className="auth__login__content">
    <p className="auth__description">
    Nếu bạn chưa có tài khoản trên ivymoda.com, hãy sử dụng tùy chọn này để truy cập biểu mẫu đăng ký.

Bằng cách cung cấp cho IVY moda thông tin chi tiết của bạn, quá trình mua hàng trên ivymoda.com sẽ là một trải nghiệm thú vị và nhanh chóng hơn!
    </p>
   
      <div className="auth__form__buttons">
        <Link className="btn btn--large" to={`/signup`}>Đăng Ký</Link>       
      </div>
    
  </div>
</div>
    </div>
    
    </div>
//       <div className="">
// <div className="m-[auto] " style={{width: 500}}>
//  <h1>Đăng nhập</h1>
// <form onSubmit={handleSubmit(onSubmit)}>
//   <div className="mb-3 ">
//     <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register('email', { required: true,minLength: 5})} />
//     {errors.email && errors.email.type === "required" && <span>Vui Lòng nhập</span>}
//             {errors.email && errors.email.type === "minLength" && <span>Min length</span>}
//   </div>
//   <div className="mb-3">
//     <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//     <input type="password" className="form-control" id="exampleInputPassword1"  />
//     {errors.password && errors.password.type === "required" && <span>Vui lòng nhập</span>}
//             {errors.password && errors.password.type === "minLength" && <span>Min length</span>}
//   </div>
//   <div className="mb-3 form-check">
//     <input type="checkbox" className="form-check-input" id="exampleCheck1" />
//     <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
//   </div>
//   <button type="submit" className="btn btn-primary">Đăng nhập</button>
// </form>

       
            
           
//     </div>
//       </div>
    
  )
}

export default Signin