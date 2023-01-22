import { checkIfMessageOnMultipleDate } from "../functions/checkIfMessageOnMultipleDates";
import { getMergedMessage } from "../functions/mergeMessages";
import { dateFormatter } from "../functions/dateFormatter";
import { chartOptions } from "../constants/chartOptions";

const messagesMap = new Map(); // [channelId]: messages[]
const channelMap = new Map(); // [channelId]: channel


export const engagementHelper = {
    engagementMessageOverTimeChartOptions(messageCountList, channels){
        let filteredChannels = [];

        // create a Map for (channelId: messages)
        messageCountList.forEach((message) => {
            const key = `${message.channelId}`;
            if(messagesMap.has(key)){
                const messagesInChannel = messagesMap.get(key);
                messagesMap.set(key,[...messagesInChannel,message])
            } else {
                messagesMap.set(key,[message])
            }
        })

        // create a Map for (channelId: Channel details)
        channels.forEach((channel) => {
            if(!channelMap.has(channel.id)){
                channelMap.set(channel.id, channel);
            }
        })
        
        // filter the Map for (channelId: messages) for messages with multiple dates
        checkIfMessageOnMultipleDate(messagesMap);
        
        // creating a custom array for the required details can be skipped!
        messagesMap.forEach((item,key) => {
            filteredChannels.push({ id: key, messages: item });
        })

        // get series
        const series = filteredChannels.reduce((acc,channel) => {
            const messageCountArr = getMergedMessage(channel.messages,"timeBucket").map((data) => data.count);
            const channelData = channelMap.get(channel.id);
            return [...acc,{ type: "spline",data: messageCountArr,name: channelData?.name || "unknown", color: "#038b8a" }]
        }, [])

        // get categories
        const categories = filteredChannels.reduce((acc,channel) => {
            const datesArr = getMergedMessage(channel.messages,"timeBucket").map((data) => dateFormatter(data.respectTo));
            return [...acc,...datesArr]
        },[])

        const { xAxis: xAxisOptions, ...otherOptions } = chartOptions; // some default options here for styles
        
        return ({
            ...otherOptions,
            xAxis: { categories, ...xAxisOptions },
            series,
        });
    }
}