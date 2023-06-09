
const dayTop = {'갑':0,'을':1,'병':2,'정':3,'무':4,'기':0,'경':1,'신':2,'임':3,'계':4}
const dayTopTypes ={ 
    0:['갑자(甲子)','을축(乙丑)','병진(丙寅)','정묘(丁卯)','무진(戊辰)','기사(己巳)',
    '경오(庚午)','신미(辛未)','임신(壬申)','계유(癸酉)','갑술(甲戌)','을해(乙亥)','병자(丙子)'], 
    1:['병자(丙子)','정축(丁丑)','무인(戊寅)','기묘(己卯)','경진(庚辰)','신사(辛巳)',
    '임오(壬午)','계미(癸未)','갑신(甲申)','을유(乙酉)','병술(丙戌)','정해(丁亥)','무자(戊子)'],
    2:['무자(戊子)','기축(己丑)','경인(庚寅)','신묘(辛卯)','임진(壬辰)','계사(癸巳)',
    '갑오(甲午)','을미(乙未)','병신(丙申)','정유(丁酉)','무술(戊戌)','기해(己亥)','경자(庚子)'],
    3:['경자(庚子)','신축(辛丑)','임인(壬寅)','계묘(癸卯)','갑진(甲辰)','을사(乙巳)',
    '병오(丙午)','정미(丁未)','무신(戊申)','기유(己酉)','경술(庚戌)','신해(辛亥)','임자(壬子)'],
    4:['임자(壬子)','계축(癸丑)','갑인(甲寅)','을묘(乙卯)','병진(丙辰)','정사(丁巳)',
    '무오(戊午)','기미(己未)','경신(庚申)','신유(辛酉)','임술(壬戌)','계해(癸亥)','갑자(甲子)'],
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
   