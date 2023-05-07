import {differenceInCalendarDays} from 'date-fns';

type CalcDifferDaysType = (firstDate: number | Date, secondDate: number | Date) => string;

const calcDifferDays: CalcDifferDaysType = (firstDate, secondDate) => {
  const differDays = differenceInCalendarDays(firstDate, secondDate);

  if (differDays === 0) return '';
  if (differDays > 0 && differDays <= 31) return `${differDays}일 전 수정됨`;
  if (differDays > 31 && differDays <= 365) return `${Math.floor(differDays / 31)}달 전 수정됨`;
  return `${Math.floor(differDays / 365)}년 전 수정됨`;
};
export default calcDifferDays;
