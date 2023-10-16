import React from "react";
import './ItemDetail.css'
//tampoco me deja importar el css aca, no encuentro el error
export const ItemDetail = ({data}) => {
    return(
       <div className="container">
        <div className="detail">
            <img className="detailt_image" src={data.image} alt=""/>
            <div className="content">
                <h1>{data.title}</h1>
            </div>

        </div>
       </div>
    )
}

export default ItemDetail