import axios from 'axios';
import React from 'react';
import UseAsync from '../customHook/UseAsync';

// Asyns함수 요청 시 받을 callback함수 작성
async function getProducts() {
    const response = await axios.get(
        'http://localhost:8080/products'
    );
    return response.data;
}

const Products = () => {
    const state = UseAsync(getProducts,[]);
    const {loading, data, error} = state;
    if (loading) return <div>로딩중...</div>
    if (error) return <div>에러가 발생했습니다.</div>
    if (!data) return null;
    return (
        <div>
            {data.products.map(pr => 
            <div><p>{pr.name}</p>
            <p>{pr.price}</p>
            <p>{pr.seller}</p></div>)}
        </div>
    );
};

export default Products;