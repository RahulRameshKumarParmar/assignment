import { useSelector } from 'react-redux';
import './App.css'
import Login from './pages/Login'
import ProductList from './pages/ProductList';

function App() {

  const page = useSelector((state) => state.data.page);
  return (
    <>
      {page === 'login' && <Login /> ||
        page === 'productList' && <ProductList />}
    </>
  )
}

export default App
