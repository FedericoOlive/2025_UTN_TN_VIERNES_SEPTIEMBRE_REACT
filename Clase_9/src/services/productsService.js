import { collection, getDocs } from "firebase/firestore";
import { database } from "../config/firebaseConfig";

const COLLECTIONS = {
    PRODUCTS: 'productos'
}
async function getAllProducts (){
    //Seleccionar la coleccion que queremos consumir
    const products_collection_reference = collection(database, COLLECTIONS.PRODUCTS)
    //llama a todos los documentos de una coleccion
    const result = await getDocs(products_collection_reference)
    
    //Lista de documentos resultantes
    //result.docs
    //por cada documento si queremos acceder a su contenido debemos ejecutar el metodo .data()
    const products = result.docs.map(
        (document) => {
            //Extraigo todos los campos de documento (excepto el ID)
            const data = document.data()
            return {
                id: document.id,
                ...data //Propago en el nuevo objeto el resto de propiedades de data
            }
        }
    )

    return products
}

export {getAllProducts}