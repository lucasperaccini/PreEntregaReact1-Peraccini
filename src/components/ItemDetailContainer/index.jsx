import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail";

const film = {id: 1, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.puntosport.com.ar%2Fbuzos-h%2F1979-buzo-wilson-training-hombre-algodon-gris-melange-claro-90496.html&psig=AOvVaw0eE7S9Kvkv5BsIHNQE1bSN&ust=1697576716805000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCLCSoqe8-4EDFQAAAAAdAAAAABAD", title: "buzo gris hombre"};



export const ItemDetailContainer = () => {
    const [data, setData] = useState ({});

    useEffect(() => {
        const getData = new Promise(resolve=> {
            setTimeout(() => {
                resolve(film);
            },2000);
        });

            getData.then(res => setData(res));
    }, [])

    return(
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer