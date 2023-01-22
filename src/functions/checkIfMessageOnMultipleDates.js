export const checkIfMessageOnMultipleDate = (messagesMap) => {
    messagesMap.forEach((messages,key) => {
        if(messages.length > 1){
            messages.forEach((message) => {
                let dateMap = {};
                const date = new Date(message.timeBucket).toDateString();
                if(date in dateMap) {
                    messagesMap.delete(key);
                };
                dateMap[date] = true;
            })
        } else {
            messagesMap.delete(key);
        }
    })
}