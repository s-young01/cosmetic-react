import axios from 'axios';
import React from 'react';
import ProductList from '../components/ProductList';
import './index.css';
import useAsync from '../customHook/UseAsync';
 
async function productFetch() {
    const response = await axios.get('http://localhost:8080/products');
    return response.data;
}

const MainPage = () => {
    const state = useAsync(productFetch, []);
    const {loading, data, error} = state;
    if(loading) return <div>로딩중...</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!data) return null;
    return (
        <div className='main'>
            <div className='visual'>
                <img src='images/benner2.JPG' alt='베너이미지1'/>
            </div>
            <div className='product'>
                <h2>NEW & ISSUE</h2>
                <ul>
                    {data.map(pro => 
                        <ProductList p_id={pro.p_id} p_name={pro.p_name} p_price={pro.p_price} p_info={pro.p_info}/>)}
                </ul>
            </div>
        </div>
    );
};

export default MainPage;