import { createContext, useContext, useEffect, useState } from "react";
import { addCollectionAndDocuments, getCollectionAndDocuments } from "../utils/firebase/firebase.utils";

// import SHOP_DATA from '../shop-data.js';

export const CategoriesContext = createContext({
    categories:{},
});


export const CategoriesProvider = ( { children } ) => {
    const [categoriesMap, setcategoriesMap] = useState({});
    // used for putting the collection on firebase
    // useEffect(() => {
    //     addCollectionAndDocuments("Categories", SHOP_DATA);

    //     // console.log("ProductsProvider", SHOP_DATA);
        
    // }, [])

    useEffect(()=>{
        const getCategoryMap = async () => {
            const categoriesMap = await getCollectionAndDocuments();
            // console.log(categoryMap)
            setcategoriesMap(categoriesMap);
        };
        getCategoryMap();

    }, [])

    const value = { categoriesMap };

    return <CategoriesContext.Provider value={value} > { children } </CategoriesContext.Provider>

}