import { useEffect, useState } from "react";

function randomeIsOnline(): Promise<boolean>  {
    return new Promise(resolve => {
        setTimeout(() => resolve(Math.random() > 0.5), 1000)
    })
}

let timer: any;
export function useProductStatus() {
    const [isOnline, setIsOnline] = useState(false);
    useEffect(() => {
        timer =  setInterval(() =>  randomeIsOnline().then(res => setIsOnline(res) ), 1000);
       
        return () => {
            clearInterval(timer);
        }
    })
    return isOnline;
}