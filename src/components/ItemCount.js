import React from 'react';
import './ItemCount.css';

function ItemCount({ stock, initial,  onAdd }){
    initial = parseInt(initial);
    stock = parseInt(stock);

    const Suma = () => {
        
        
        // If (initial < stock) {
        //    initial = initial + 1;
        // } 
        // initial = stock;         
        
        initial = initial + 1;
        
        document.getElementById("contador").value = initial;

    };

    const Resta = () => {
        
        
        
        initial = initial - 1;
        document.getElementById("contador").value = initial;

    };

    return<>
     <button //Boton Resta
     className='estiloBoton' 
     onClick={Resta}
     >
         -
    </button>

     <input placeholder="1" className='estiloBoton' id='contador' readOnly/>

     <button //Boton Suma
     className='estiloBoton'
     onClick={Suma}>
         +
        </button>

    </>


}

export{ItemCount}