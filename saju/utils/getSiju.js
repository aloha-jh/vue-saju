
const dayTop = {'갑':0,'을':1,'병':2,'정':3,'무':4,'기':0,'경':1,'신':2,'임':3,'계':4}
const dayTopTypes ={ 
    0:['갑자(甲子)','을축(乙丑)','병진(丙寅)','정묘(丁卯)','무진(戊辰)','기사(己巳)','경오(庚午)','신미','임신','계유','갑술','을해','병자'], 
    1:['병자(丙子)','정축(丁丑)','무인','기묘','경진','신사','임오','계미','갑신','을유','정해','무자'],
    2:['무자','기축','경인','신묘','임진','계사','갑오','을미','병신','정유','무술','기해','경자'],
    3:['경자','신축','임인','계묘','갑진','을사','병오','정미','무신','기유','경술','신해','임자'],
    4:['임자','계축','갑인','을묘','병진','정사','무오','기미','경신','신유','임술','계해','갑자'],
}

// const time = '1305'; 
// this.timeList = getSiju(body.lunIljin[0],time);


export function getSiju(txt,time) { 
    const txtNum = dayTop[txt];    
    const hours = parseInt(String(time).slice(0, 2)); //13
    const minutes = parseInt(String(time).slice(2, 4) ); //5    

    let totalMinutes = hours * 60 + minutes;  

    const ranges = [
      [0, 89, 0],
      [90, 209, 1],
      [210, 329, 2],
      [330, 449, 3],
      [450, 569, 4],
      [570, 689, 5],
      [690, 809, 6],// 11:30~13:29
      [810, 929, 7],
      [930, 1049, 8],
      [1050, 1169, 9],
      [1170, 1289, 10],
      [1290, 1439, 11]
    ];
 
    for (const range of ranges) {
      let [start, end, value] = range; 
      if (totalMinutes >= start && totalMinutes <= end) { 
        return dayTopTypes[txtNum][value];
      }
    }
    return -1;  
  }
   