import '../Item'
//desconozco por qué pero no estoy pudiendo relacionar el item.css, directamente no aparece, tengo que importar la carpeta completa//
import React from "react";
;

const Item = ({info}) => {
    return (
        <a href="" className="film">
            <img src='{info.image}' alt='' />
            <p>{info.title}</p>

        </a>
    )
}

export default Item;