export const getAge = (birthday: string) => {
  const newDate = new Date();
  const thisYear = newDate.getFullYear();
  const thisMonth = newDate.getMonth() + 1;
  const thisDate = newDate.getDate();

  const dates = birthday.split('/');

  let yearOfBirthday = 0;
  let monthOfBirthday = 0;
  let dayOfBirthday = 0;

  const defaultValue = {
    year: 0,
    month: 0,
  };

  if (dates && dates.length >= 3) {
    try {
      yearOfBirthday = parseFloat(dates[0]);
      monthOfBirthday = parseFloat(dates[1]);
      dayOfBirthday = parseFloat(dates[2]);
    } catch (error) {
      return defaultValue;
    }
  } else {
    return defaultValue;
  }

  if (
    newDate.getTime() -
      new Date(yearOfBirthday, monthOfBirthday, dayOfBirthday).getTime() >
    0
  ) {
    let month = dayOfBirthday > thisDate ? 0 : 1; // eg birthday: xxxx/xx/21 now: xxxx/xx/22 => 1; birthday: xxxx/xx/23 now: xxxx/xx/22 => 0
    let year = 0;

    if (thisYear === yearOfBirthday) {
      if (thisMonth === monthOfBirthday) {
        return {year, month: 1};
      } else {
        return {year, month: month + monthOfBirthday - thisMonth};
      }
    } else {
      month =
        month + (thisYear - yearOfBirthday) * 12 - monthOfBirthday + thisMonth;
      return {year: (month - (month % 12)) / 12, month: month % 12};
    }
  }
  return defaultValue;
};
