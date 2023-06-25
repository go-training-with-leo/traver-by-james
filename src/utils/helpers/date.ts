import dayjs from "dayjs";

export const renderDate = (date: Date) => {
    return dayjs(date).format('DD MMM YYYY')
};
