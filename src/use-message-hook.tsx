import { useEffect, useState } from "react";
import { MessageBroker } from "./MessageBroker";

const messageBroker = new MessageBroker(); 


export const useMessage = () => {
    const [message, setMessage] = useState('');  
    const updateMessage = (newMessage: string) => setTimeout(() => setMessage(newMessage))
    useEffect(() =>  {
        messageBroker.subscribe(updateMessage);
        return () => messageBroker.unsubscribe(updateMessage);
    })
    return message;
}