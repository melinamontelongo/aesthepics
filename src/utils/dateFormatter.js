export const dateFormatter = (date) => {
    const dateStr = new Date(date).toDateString().split(" ").slice(1).join(", ");
    const timeStr = new Date(date).toLocaleTimeString();
    return {
        date: dateStr,
        time: timeStr,
    };
};