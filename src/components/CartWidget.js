import React from 'react';
import cart from './cart.png';


function CartWidget(){
    return<>
    <img src={cart} style={{height: "1 px"}}/>
    </>

}

export {CartWidget}