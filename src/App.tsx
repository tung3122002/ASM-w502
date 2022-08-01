import { useEffect, useState } from 'react'
import 'antd/dist/antd.css';
import { Route, Routes } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import Websitelayout from './page/layouts/Websitelayout'
import { Product } from './types/Product'
import { create, list, remove, update } from './api/product';
import ProducList from './componets/ProducList'
import ProductDetaill from './page/layouts/ProductDetaill'
// import Homepage from './page/homepage'
import Products from './page/layouts/Products'
import Adminlayout from './page/layouts/adminlayout'
import Dashboard from './page/layouts/Dashboard'
import ProductManager from './page/layouts/ProductManager'
import ProductAdd from './page/layouts/ProductAdd'
import ProductEdit from './page/layouts/ProductEdit'
import Signup from './page/layouts/Singup';
import Signin from './page/layouts/Signin';
import PrivateRouter from './componets/PrivateRouter';
import './App.css'
import CategoryManager from './page/layouts/CategoryManager';
import { TypeCategory } from './types/category';
import { addct, listct, removect, updatect } from './api/category';
import AddCategory from './page/layouts/AddCategory';
import EditCategory from './page/layouts/EditCategory';
function App() {
  const [isLoading,seLoatding]=useState(false)
  const [products, setProducts]= useState<Product[]>([]) 
  const [categorys, setCategory] = useState<TypeCategory[]>([])
  useEffect(()=>{
     const getProducts= async ()=>{
       const {data}= await list()
       setProducts(data)
     };
     getProducts()
  },[]);

  useEffect(() => {
    const getCategory = async () => {
      const { data } = await listct();
      setCategory(data);
    }
    getCategory()
  }, [])
  const onhandleRemove = (id :number|string) =>{
    remove(id);
 setProducts (products.filter(item=>item._id !==id));
  };
  const UpdateCategory = async (editcategory: TypeCategory) => {
    const { data } = await updatect(editcategory)
 
    setCategory(categorys.map(item => item._id == data._id ? data : item))
  }
  const AddCategorys = async (category: any) => {
    const { data } = await addct(category)
    
    setCategory([...categorys, data])
  }
  const categorysRemove = (id :number|string) =>{
    removect(id);
    setCategory (categorys.filter(item=>item._id !==id));
  };
  const onhandleAdd = async (product :Product) =>{
    const {data}=await create(product)
  setProducts([...products,data])
  };
  const onhandleUpdate= async (product :Product) =>{
    console.log(product)
    const { data } = await update(product)
     setProducts(products.map(item => item._id == data._id ? data : item));
  }

  return (
   
    <div className="App">
    <Routes>
   
    
      <Route path="/" element={<Websitelayout/>}>
     
        {/* <Route path="product" element={<Products product={products}/>}> */}
        <Route index element ={<Products product={products}/>}/>
        <Route path="/product/:id" element={<ProductDetaill/>}/>
        <Route path="signin" element={<Signin />}/>
        <Route path="signup" element={<Signup />}/>
        
        {/* </Route> */}
     
     
      </Route>
      <Route path="admin" element={  <Adminlayout/>  }>
        <Route index  element={<Dashboard />}/>
        <Route path="products" >
          <Route index element={<ProductManager products={products} onRemove={onhandleRemove} categorys={categorys}/>}/>
          <Route path="add" element={<ProductAdd onAdd={onhandleAdd} categorys={categorys} />}/>
          <Route path=":id/edit" element={<ProductEdit onUpdate={onhandleUpdate} categorys={categorys} />}/>
        </Route>
        <Route path="categorys" >
      
          <Route index element={<CategoryManager categorys={categorys} onRemoveCt={categorysRemove}/>}/>
          <Route path="add" element={<AddCategory  onAddCategory={AddCategorys}/>}/>
          <Route path=":id/edit" element={<EditCategory UpdateCt={UpdateCategory} />}/>
        </Route>
        </Route>
    </Routes>
    </div>
  )
}

export default App
