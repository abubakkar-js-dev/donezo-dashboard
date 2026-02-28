import { useEffect } from "react";


const useTitle = (title)=>{
    useEffect(()=>{
        document.title =  `${title} | Donezo`
    },[title])
}

export default useTitle;