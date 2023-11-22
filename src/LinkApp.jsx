import { Link, NavLink, Navigate, Route, Routes } from 'react-router-dom';
import { ProductsPage } from './pages/ProductsPage';

export const LinkApp = () => {

   return (
    <>
        <h1>MainApp</h1>
        <hr/>

        <NavLink to="products/3"> Product by ID</NavLink>
        <Routes>
            <Route path="products">
                <Route path='id' element={ <ProductsPage/>}/>
            </Route>
        </Routes>
    </>
    )
}