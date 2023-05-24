export function getTimeList( yyyy, mm, dd) {
  const tianGan = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
  const diZhi = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
  
  console.log(yyyy,mm,dd)
  const year = parseInt(yyyy);
  
  const yearTianGanIndex = (yyyy - 4) % 10;
  const yearDiZhiIndex = (yyyy - 4) % 12;
  const monthTianGanIndex = (yearTianGanIndex * 2 + (mm - 1)) % 10;
  const monthDiZhiIndex = (yearDiZhiIndex * 2 + (mm - 1)) % 12;
  const dayTianGanIndex = (yearTianGanIndex + monthTianGanIndex + (dd - 1)) % 10;
  const dayDiZhiIndex = (yearDiZhiIndex + monthDiZhiIndex + (dd - 1)) % 12;
  
  const sajuList = [];
  
  for (let i = 0; i < 24; i++) {
    const hourTianGanIndex = (dayTianGanIndex * 2 + i) % 10;
    const hourDiZhiIndex = (dayDiZhiIndex * 2 + i) % 12;
    
    const tianGanHour = tianGan[hourTianGanIndex];
    const diZhiHour = diZhi[hourDiZhiIndex];
    
    const sajuTime = `${tianGanHour}${diZhiHour}`;
    sajuList.push(sajuTime);
  }
  console.log(sajuList);
  return sajuList;
}