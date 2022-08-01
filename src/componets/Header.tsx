import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
  return (
    <div>
         <div className="m-[auto] " style={{ width: 150 }}>
          <img src="https://pubcdn2.ivymoda.com/images/logo.png" alt="" />
        </div>
      <nav className="navbar navbar-expand-lg  bg-light my-4">
        <div className="menu">
          <li>
           <Link to={`/`}>NỮ</Link>
          </li>
          <li>
          <Link to={`/nam`}>NAM</Link>
          </li>
          <li>
            <a href="/#/nu"> TRẺ EM</a>
          </li>
          <li>
            <a href="/#/nu"> CLEARANCE SALE</a>
          </li>
          <li>
            <a href="/#/nu"> BỘ SƯU TẬP</a>
          </li>
          <li>
            <a href="/#/nu"> LIFESTYLE</a>
          </li>
          <li>
            <a href="/#/nu">  VỀ CHÚNG TÔI</a>
          </li>
        </div>
     
       <div className="other ">
  <li><input type="text" placeholder="Tìm"  /> <button className="fas fa-search" /></li>
  <li><a className="fa fa-paw"  /></li>
  <li>  <Link className="fa fa-user" to="/signin"></Link>

    
  </li>
  <li><a className="fa fa-shopping-bag" href="/#/cart" />
  </li>
</div>

      </nav>
    </div>
  );
};

export default Header;
