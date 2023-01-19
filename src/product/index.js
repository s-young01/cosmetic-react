import React from 'react';
import { useParams } from 'react-router-dom';
import './index.css';

const ProductPage = () => {
    const {p_id} = useParams();
    return (
        <div className='productDetail'>
            <h2>선케어 누적판매 1위</h2>
            <div className='productImg'>
                <img src={`../images/product${p_id}.jpg`} alt=''/>
            </div>
            <div>
                <strong>UV프로텍터 멀티디펜스 SPF50+/PA++++ 50ml</strong>
                <p>가격 : 34,000원</p>
                <p>배송 : 무료배송</p>
            </div>
        </div>
    );
};

export default ProductPage;