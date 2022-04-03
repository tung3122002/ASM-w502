import React from 'react'

type Props = {}

const GALLERY = (props: Props) => {
  return (
    <div>
        <h1 className="text-center">GALLERY</h1>
        <div className="row mb-2.5">
            <div className="col-2">
                <img src="https://pubcdn.ivymoda.com/files/news/2022/03/08/c24f5d8ce0b592aa60d6d86c67fb06d2.jpg" alt="" />
            </div>
            <div className="col-2">
                <img src="https://pubcdn.ivymoda.com/files/news/2022/03/08/d886e3a3279b15ec66eca8f07ed74bf8.jpg" alt="" />
            </div>
            <div className="col-2">
                <img src="https://pubcdn.ivymoda.com/files/news/2022/03/08/6d4e484d5afd561fe96c76a96046bf74.jpg" alt="" />
            </div>
            <div className="col-2">
                <img src="https://pubcdn.ivymoda.com/files/news/2022/03/08/e7511ebdbb36f62ba35c87d2b5e1639e.jpg" alt="" />
            </div>
            <div className="col-2">
                <img src="https://pubcdn.ivymoda.com/files/news/2022/03/08/baec5340471c5a5e4da91082ce0b95ea.jpg" alt="" />
            </div>
            <div className="col-2">
                <img src="https://pubcdn.ivymoda.com/files/news/2022/03/08/baec5340471c5a5e4da91082ce0b95ea.jpg" alt="" />
            </div>
        </div>
        <hr />
        
    </div>
  )
}

export default GALLERY