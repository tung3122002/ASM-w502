import React from 'react'
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';



const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
type Props = {}

const Banner = (props: Props) => {
  return (
    <div>
         <Carousel autoplay>
    <div className="img-trending-desktop">
    <img src="https://pubcdn.ivymoda.com/files/news/2022/03/25/2e94e40cbc8d89801f6c64ccd409efd0.jpg"className="img-fluid "></img>
    </div>
    <div className="img-trending-desktop">
    <img src="https://pubcdn.ivymoda.com/files/news/2022/03/25/a79a2e2b244dda0f0262c5010b1a7848.jpg"className="img-fluid"></img>
    </div>
    <div className="img-trending-desktop">
    <img src="https://pubcdn.ivymoda.com/files/news/2022/03/25/745781688e2255918b23a702bfb22988.jpg"className="img-fluid"></img>
    </div>
    <div className="img-trending-desktop">
    <img src="https://pubcdn.ivymoda.com/files/news/2022/03/25/c0d1482f38a42489a2f2835039bfddc9.jpg"className="img-fluid"></img>
    </div>
  </Carousel>

    </div>
  )
}

export default Banner