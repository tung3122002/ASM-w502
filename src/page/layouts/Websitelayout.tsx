import React from 'react'
import { Outlet } from 'react-router-dom'
import Banner from '../../componets/Banner'
import Banner2 from '../../componets/Banner2'
import Footer from '../../componets/Footer'
import GALLERY from '../../componets/GALLERY'

import Header from '../../componets/Header'
import ProducList from '../../componets/ProducList'
import Showinfo from '../../componets/Showinfo'

type Props = {}

const Websitelayout = (props: Props) => {
  return (
    <div>
        <header>
            <div className="container">
               
              <Header/>
              <Banner/>
             
              <Outlet/>
              <Banner2/>
              <GALLERY/>
              <Footer/>
            </div>
            
        </header>
    </div>
  )
}

export default Websitelayout