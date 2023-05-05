import { default as dayjs } from 'dayjs';

export const formatDate = (date: number) => dayjs(date).format('MM-DD-YYYY');
