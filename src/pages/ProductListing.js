import { useEffect, useState} from "react";

export const ProductListing = () => {
    const [productData, setProductData] = useState([])
    const serverData = async() => {
        try {
            const response = await fetch("/api/products");
            const products = await response.json();
            setProductData(products)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        serverData();
    }, [])
   
    return (
        <>
        <h1>This is Product Listing Page</h1>
        {/* <ul>
            {
                
                products.map(({title, author}) => {
                       return (<li>{title} : {author}</li>)
                    })
                
            }
        </ul> */}
        </>
    )
}