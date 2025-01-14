import { createContext, ReactElement, useEffect, useState } from "react"

export type ProductType = {
    sku: string,
    name: string,
    price: number,
}
const initState: ProductType[] = []

export type UseProductsContextType = { products: ProductType[] }

const initContestState: UseProductsContextType = { products: [] }
const ProductContext = createContext<UseProductsContextType>
    (initContestState)

type ChildrenType = { children?: ReactElement | ReactElement[] }

export const ProductsProvider = ({ children }: ChildrenType):
    ReactElement => {
    const [products, setProducts] = useState<ProductType[]>
        (initState)
        useEffect(()=>{
            const fetchProduct = async ():Promise<ProductType[]>=> {
                const data =await fetch('http://localhost:3500/products').then(rest=>{
                    return rest.json()
                }).catch(err=>{
                    if(err instanceof Error) console.log(err.message)
                })
            return data
            }
            fetchProduct().then(products=>setProducts(products))
        },[])
        return(
            <ProductContext.Provider value={{products}}>
                {children}
            </ProductContext.Provider>
        )
}
export default ProductContext