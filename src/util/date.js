import {format, parse} from 'date-fns';
var intervalToDuration = require('date-fns/intervalToDuration');

export const dateUTC = () => {
  return format(new Date(), 'yyyy-MM-dd HH:mm:ss xx');
};

export const dateBR = aDate => {
  return format(new Date(aDate), 'dd/MM/yyyy');
};

export const dateToImageProfile = () => {
  return format(new Date(), 'yyyy-MM-dd-HH-mm-ss');
};

export const intervalDateUTC = (aStart, aEnd) => {
  // console.log('Conversao de data: '+ parse('2020-07-14 09:49:19 -0300', 'yyyy-MM-dd HH:mm:ss xx', new Date()));
  let lInterval = intervalToDuration({
    start: parse(aStart, 'dd/MM/yyyy', new Date()),
    end: parse(aEnd, 'dd/MM/yyyy', new Date()),
  });
  // console.log(lInterval);

  return lInterval;
};

export default {dateUTC, dateBR, intervalDateUTC};
