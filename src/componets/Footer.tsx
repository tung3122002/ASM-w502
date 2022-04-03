import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
   <div className="row p-3">
       <div className="col-3">
          <div className="row">
              <div className="col">
                  <img src="https://pubcdn2.ivymoda.com/images/logo-footer.png" alt="" />
              </div>
              <div className="col">
                  <img src="https://pubcdn2.ivymoda.com/images/img-congthuong.png" alt="" />
              </div>
              <li>Công ty Cổ phần Dự Kim với số đăng ký kinh doanh: 0105777650</li>
              <li><b>Địa chỉ đăng ký:</b> Tổ dân phố Tháp, P.Đại Mỗ, Q.Nam Từ Liêm, TP.Hà Nội, Việt Nam</li>
              <li><b>Số điện thoại:</b> 0243 205 2222</li>
          </div>
          <div className="row mt-3 pt-3">
              <div className="col">
                  <img width="15px" src="https://pubcdn2.ivymoda.com/images/ic_fb.svg" alt="" />
              </div>
              <div className="col">
                  <img width="30px" src="https://pubcdn2.ivymoda.com/images/ic_gg.svg" alt="" />
              </div>
              <div className="col">
                  <img width="30px" src="https://pubcdn2.ivymoda.com/images/ic_instagram.svg" alt="" />
              </div>
              <div className="col">
                  <img width="30px" src="https://pubcdn2.ivymoda.com/images/ic_pinterest.svg" alt="" />
              </div>
              <div className="col">
                  <img width="30px" src="https://pubcdn2.ivymoda.com/images/ic_ytb.svg" alt="" />
              </div>
          </div>
       </div>
       <div className="col-3">
          <h2>Giới thiệu</h2>
          <p>Về IVY moda</p>
          <p>Tuyển dụng</p>
          <p>Hệ thống cửa hàng</p>
       </div>
       <div className="col-3">
          <h2>Dịch vụ khách hàng</h2>
          <p>Chính sách điều khoản</p>
          <p>Hướng dẫn mua hàng</p>
          <p>Chính sách thanh toán</p>
          <p>Chính sách đổi trả</p>
          <p>Chính sách bảo hành</p>
          <p>Chính sách giao nhận vận chuyển</p>
       </div>
       <div className="col-3">
          <h2>Liên hệ</h2>
          <p>Hotline</p>
          <p>Email</p>
          <p>Live Chat</p>
          <p>Messenger</p>
          <p>Liên hệ</p>
       </div>
   </div>
  )
}

export default Footer