import { createContext } from "react";


export type ContextProductListingCountType = {
    contextProductListingCount : number;
    setContextProductListingCount : (contextProductListingCount: number) => void;
}

export const ContextProductListingCount = createContext<ContextProductListingCountType>({
    contextProductListingCount: 0,
    setContextProductListingCount(){},
})