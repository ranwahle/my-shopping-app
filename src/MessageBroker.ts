export type MessageCallback = (message: string) => void;
export class MessageBroker {

    callbacks: MessageCallback[] = [];  

    subscribe(messageCallback:MessageCallback) {
        this.callbacks.push(messageCallback);
    }

    unsubscribe(messageCallback: MessageCallback) {
            this.callbacks = this.callbacks.filter(cb => cb !== messageCallback);
    }

    sendMessage = () => {
        const message = `Now is ${new Date()}`;
        console.log(`There are ${this.callbacks.length} callbacks`);
        this.callbacks.forEach(callback => callback(message) )
        setTimeout(this.sendMessage, 1000)
    }

    constructor() {
        setTimeout(this.sendMessage, 1000);
    }
}