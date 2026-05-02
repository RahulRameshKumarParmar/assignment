import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import Login from './pages/Login'
import ProductList from './pages/ProductList';
import { useEffect } from 'react';
import { setPage } from './store/slices/dataSlice';

function App() {
  const page = useSelector((state) => state.data.page);
  const dispatch = useDispatch();

  useEffect(() => {
    const page = JSON.parse(localStorage.getItem("page"));
    dispatch(setPage(page));
  }, [])
  return (
    <>
      {page === 'login' && <Login /> ||
        page === 'productList' && <ProductList />}
    </>
  )
}

export default App
