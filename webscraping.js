// const puppeteer = require("puppeteer");

// const webscraping = async pageURL => {
//   const browser = await puppeteer.launch({
//     headless: true,
//     args: ["--no-sandbox"]
//   });
//   const page = await browser.newPage();
//   let dataObj = {};

//   try {
//     await page.goto(pageURL);

//     const publishedNews = await page.evaluate(() => {
//       const newsDOM = document.querySelectorAll("li.cat-post-item");
//       let newsList = [];
//       newsDOM.forEach(linkElement => {
//         const currentNews = linkElement.querySelector("a.cat-post-title")
//           .innerText;
//         newsList.push(currentNews);
//       });
//       return newsList;
//     });

//     dataObj = {
//       amount: publishedNews.length,
//       publishedNews
//     };
//   } catch (e) {
//     console.log(e);
//   }

//   browser.close();
//   return dataObj;
// };

// module.exports = webscraping;


// const puppeteer = require("puppeteer");
// const pageURL = "https://vtu.ac.in/en/";

// const webscraping = async pageURL => {
//     const browser = await puppeteer.launch({
//         headless: true
      
//     });

//     const page = await browser.newPage();
//     let dataObj = {};
//     try {
//         await page.goto(pageURL);
//         const publishedNews = await page.evaluate(() => {
//             const newsDOM = document.querySelectorAll('#recent-posts-2 .wrapper');
//             let newsList = [];
//             newsDOM.forEach(linkElement => {
//                 const currentNews = linkElement.querySelector('.wrapper>div:nth-child(2)>a')
//                     .innerText;
//                 newsList.push(currentNews);

//             });
//             return newsList;

//         });

//         dataObj = {
//             amount: publishedNews.length,
//             publishedNews
//         };

//     } catch (e) {
//         console.log(e);
//     }
//     console.log(dataObj)
//     // browser.close();
//     return dataObj;

// };
// webscraping(pageURL).catch(console.error);





const puppeteer = require("puppeteer");

const webscraping = async pageURL => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox"]
  });
  const page = await browser.newPage();
  let dataObj = {};

  try {
    await page.goto(pageURL);

    const publishedNews = await page.evaluate(() => {
      const newsDOM = document.querySelectorAll('.col-md-5>div>div:nth-child(2)>div:nth-child(2)>div');
      // const newsDOM = document.querySelectorAll('');
      // const newsDOM = document.querySelectorAll('#webc>div:nth-child(2)>.col-md-12');
      let newsList = [];
      newsDOM.forEach(linkElement => {
        const currentNews = linkElement.querySelector('div>div>div>b').innerText;
        // const currentNews = linkElement.querySelector('.col-md-12>div>div>b>span>img')
          // .innerText;
        newsList.push(currentNews);
        console.log(newsList.length);
        console.log(newsList);

      });
      return newsList;
    });

    // console.log(publishedNews);
    // console.log(publishedNews.length);

    dataObj = {
      amount: publishedNews.length,
      publishedNews
    };
  } catch (e) {
    console.log(e);
  }

  browser.close();
  return dataObj;
};

module.exports = webscraping;





// import puppeteer from 'puppeteer';
// import fs from "fs";


//       (async () => {
//     // Launch the browser and open a new blank page
//     const browser = await puppeteer.launch({
//         headless: false,
//         defaultViewport: false,
//         userDataDir: "./tmp"
//     });
//     const page = await browser.newPage();

//     // Navigate the page to a URL
//     await page.goto('https://www.flipkart.com/wearable-smart-devices/smart-watches/pr?sid=ajy%2Cbuh&marketplace=FLIPKART&p%5B%5D=facets.brand%255B%255D%3DFastrack&hpid=SVKCw8G6nMCuH4Eqbt2Crap7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTEsMzk5Il0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwiaGVyb1BpZCI6eyJzaW5nbGVWYWx1ZUF0dHJpYnV0ZSI6eyJrZXkiOiJoZXJvUGlkIiwiaW5mZXJlbmNlVHlwZSI6IlBJRCIsInZhbHVlIjoiU01XR040WUVXR05aMkdHTSIsInZhbHVlVHlwZSI6IlNJTkdMRV9WQUxVRUQifX0sInRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkZhc3RyYWNrIFNtYXJ0d2F0Y2hlcyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&fm=neo%2Fmerchandising&iid=M_73e33556-575b-4d53-9870-e00cbb35dcae_1.E1YF2OWYF3ML&ssid=h4vr4jlq9s0000001716038834580&otracker=dynamic_omu_infinite_Best%2Bof%2BElectronics_6_1.dealCard.OMU_INFINITE_E1YF2OWYF3ML&cid=E1YF2OWYF3ML&page=2');

//     const productHandles = await page.$$(".cPHDOP>div>div>._1sdMkc");
//     // .cPHDOP.col-12-12>._75nlfW.LYgYA3>div>div>div

//     // .cPHDOP>div>div>._1sdMkc

//     //   .rPDeLR

//     // // loop thru all handles
//     let i = 0;
   
//     // let buffer = fs.readFileSync("./result.json");
//     // //   console.log(buffer);
//     // //   console.log("after parsing to json it will give the actual data");
//     //   let data = JSON.parse(buffer);
//     let data = [];

//     for (const product of productHandles) {
//         let title = "NULL";
//         let image = "NULL";

//         // pass the single handle below
//         try {

//             title = await page.evaluate(el => el.querySelector("div>.WKTcLC").textContent, product);
//             // console.log(title);
//         }
//         catch (error) {
//             console.error;
//         }
//         try {

//             image = await page.evaluate(el => el.querySelector("a").getAttribute("href"), product);
//             // console.log(image);
//         }
//         catch (error) {
//             console.error;
//         }

//         data.push({ title, image });

//         // do whatever you want with the data

//     }

//     // console.log(data);
//     // console.log(data.length);
//     let stringdata = JSON.stringify(data);
//     fs.writeFileSync("resultiinging345.json" , stringdata);






//     //    await browser.close();
// })();     // stackovefow bala yaha se suru hua hain bro 






















































// const puppeteer = require('puppeteer');
// import puppeteer from 'puppeteer';
//   import fs from  "fs";

// let scrape = async () => {
//     const browser = await puppeteer.launch({ headless: true });
//     const page = await browser.newPage();

//     await page.goto('https://www.flipkart.com/wearable-smart-devices/smart-watches/pr?sid=ajy%2Cbuh&marketplace=FLIPKART&p%5B%5D=facets.brand%255B%255D%3DFastrack&hpid=SVKCw8G6nMCuH4Eqbt2Crap7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTEsMzk5Il0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwiaGVyb1BpZCI6eyJzaW5nbGVWYWx1ZUF0dHJpYnV0ZSI6eyJrZXkiOiJoZXJvUGlkIiwiaW5mZXJlbmNlVHlwZSI6IlBJRCIsInZhbHVlIjoiU01XR040WUVXR05aMkdHTSIsInZhbHVlVHlwZSI6IlNJTkdMRV9WQUxVRUQifX0sInRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkZhc3RyYWNrIFNtYXJ0d2F0Y2hlcyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&fm=neo%2Fmerchandising&iid=M_73e33556-575b-4d53-9870-e00cbb35dcae_1.E1YF2OWYF3ML&ssid=h4vr4jlq9s0000001716038834580&otracker=dynamic_omu_infinite_Best%2Bof%2BElectronics_6_1.dealCard.OMU_INFINITE_E1YF2OWYF3ML&cid=E1YF2OWYF3ML&page=2');

//     var results = []; // variable to hold collection of all book titles and prices
//     var lastPageNumber = 4; // this is hardcoded last catalogue page, you can set it dunamically if you wish
//     // defined simple loop to iterate over number of catalogue pages
//     for (let index = 0; index < lastPageNumber; index++) {
//         // wait 1 sec for page load
//         await page.waitFor(1000);
//         // call and wait extractedEvaluateCall and concatenate results every iteration.
//         // You can use results.push, but will get collection of collections at the end of iteration
//         results = results.concat(await extractedEvaluateCall(page));
//         // this is where next button on page clicked to jump to another page
//         if (index != lastPageNumber - 1) {
//             // no next button on last page
//             await page.click('._9QVEpD>span');
//         }
//     }

//     // browser.close();
//     // console.log(results);
//     fs.writeFileSync("result12.json" , JSON.stringify(results));
//     return results;
// };

// async function extractedEvaluateCall(page) {
//     // just extracted same exact logic in separate function
//     // this function should use async keyword in order to work and take page as argument
//     return page.evaluate(async () => {
//         // (async () => {
//         let data = [];
//         let elements = document.querySelector('.cPHDOP>div>div>._1sdMkc');   // parent ka  div  hain yehh toh bro 

//         for (var element of elements) {
//             let title = element.querySelector("div>.WKTcLC").textContent;
//             let price = element.querySelector("a").getAttribute("href");
            

//             data.push({ title, price });
//         }

//         // for (const product of productHandles) {
//         //     let title = "NULL";
//         //     let image = "NULL";
    
//         //     // pass the single handle below
//         //     try {
    
//         //         title = await page.evaluate(el => el.querySelector("div>.WKTcLC").textContent, product);
//         //         // console.log(title);
//         //     }
//         //     catch (error) {
//         //         console.error;
//         //     }
//         //     try {
    
//         //         image = await page.evaluate(el => el.querySelector("a").getAttribute("href"), product);
//         //         // console.log(image);
//         //     }
//         //     catch (error) {
//         //         console.error;
//         //     }
    
//         //     data.push({ title, image });
    
//         //     // do whatever you want with the data
    
//         // }


//         return data;
//     });
// }

// // scrape().then((value) => {
// //     console.log(value);
// //     console.log('Collection length: ' + value.length);
// //     console.log(value[0]);
// //     console.log(value[value.length - 1]);
// // });

// // console.log(results);


