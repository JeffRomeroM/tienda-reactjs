import { Route, Routes } from "react-router-dom"
import { CssBaseline } from "@mui/material";
import Header from "./components/header/Header";
import { Products } from "./pages/Products";
import './index.css'
import NotFound from "./components/notFound/NotFound";
import Home from "./components/home/Home";
import Excel from "./components/Excel";

function App() {
  

  return (
    <>
    <CssBaseline />
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="products" element={<ProductList />} />
        <Route path="products/:id" element={<ProductItem />}/>  */}
        <Route path="productos" element={<Products />} />
        {/* <Route path="excel" element={<Excel />} /> */}
        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </>
    
  )
}

export default App;
