import React, {useState, useEffect} from "react";
import ItemCount from '../ItemCount'
import ItemList from "../ItemList";
import Title from '../Item';


const films = [
    {id: 1, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.puntosport.com.ar%2Fbuzos-h%2F1979-buzo-wilson-training-hombre-algodon-gris-melange-claro-90496.html&psig=AOvVaw0eE7S9Kvkv5BsIHNQE1bSN&ust=1697576716805000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCLCSoqe8-4EDFQAAAAAdAAAAABAD", title: "buzo gris hombre"},
    {id: 2, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.megasports.com.ar%2Faloud-buzo-mujer----rustico-melange%2Fp&psig=AOvVaw1ENHRy1BxhY9ylkDAyg9Wh&ust=1697576881209000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCIDa1fG8-4EDFQAAAAAdAAAAABAD", title: "buzo gris mujer"},


];

export const ItemListContainer = ({ texto }) => {
    const [data, setData] = useState ([]);
    useEffect (() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(films);

            }, 2000);
        });
        getData.then (res => console.log(res));
    },[])
    
    const onAdd = (quantity) => {
        console.log('Compraste ${quantity} unidades');
    }


    return (
    <>
        <Title greeting={texto} />
        <ItemCount initial={3} stock={5} onAdd={onAdd} />   
        <ItemList data={data} />
    
    </>
    );
}

export default ItemListContainer; 