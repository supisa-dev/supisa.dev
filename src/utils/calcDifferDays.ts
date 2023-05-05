import {differenceInCalendarDays} from 'date-fns';

type CalcDifferDaysType = (firstDate: number | Date, secondDate: number | Date) => number;

const calcDifferDays: CalcDifferDaysType = (firstDate, secondDate) => {
  const differHours = differenceInCalendarDays(firstDate, secondDate);

  if (differHours > 0) return differHours;
  return 0;
};
export default calcDifferDays;
