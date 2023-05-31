export function inValidTime(usertime){
    const hours = usertime.slice(0, 2);
    const minutes = usertime.slice(2, 4);        
    const isValidHours = hours >= 0 && hours < 24;
    const isValidMinutes = minutes >= 0 && minutes < 60;
    return isValidHours && isValidMinutes;       
}


    
export function inValidDate( userbirth ){
    const year = userbirth.slice(0, 4);
    const month = userbirth.slice(4, 6);
    const day = userbirth.slice(6, 8);
    const date = new Date(year, month - 1, day);
    return (
      date.getFullYear() === Number(year) &&
      date.getMonth() === Number(month) - 1 &&
      date.getDate() === Number(day)
    );
}