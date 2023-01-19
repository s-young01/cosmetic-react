import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({p_id, p_name, p_price, p_info}) => {
    return (
        <li>
            <Link to={`/detailView/${p_id}`}>
                <img src={`images/product${p_id}.jpg`} alt='상품1'/>
                <h3>{p_name}</h3>
                <p>{p_price}원</p>
                <p>{p_info}</p>
            </Link> 
        </li>
    );
};

export default ProductList;