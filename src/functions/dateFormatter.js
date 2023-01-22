import { MONTHS } from "../constants/months";

export const dateFormatter = (date) => {
    if(typeof date === "string") date = new Date(date);
    const day = date.getDate();
    const monthNumber = date.getMonth();
    return `${day} ${MONTHS[monthNumber]}`
}