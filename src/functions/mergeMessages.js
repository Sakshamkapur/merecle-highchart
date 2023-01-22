export const getMergedMessage = (messages,withRespectTo) => {
    let counterMap = {};
    messages.forEach((message) => {
        counterMap[message[withRespectTo]] = { respectTo: message[withRespectTo], count: parseInt(message.count)};
    })
    return Object.keys(counterMap).map((key) => counterMap[key]);
}