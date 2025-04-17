let allData =[]; // this  is empy array used to store the data which is fetch by  the computer .json      
fetch("computer.json")   //fetch is built in function in js to geta file or connect a server  here fetch promise it will give the data as return 
.then(res =>res.json())  //   after the fetched the dat it should convert to the json file    res which mean the response by  you got from fetch   .json turns it into    turn into js object/array
.then(data =>{  
  allData =data;  // it is stored   data    into the   all data
  productsList(allData)   //this is the function used to show these product to webpage 
               
})                                            

function productsList(items) {  //this is a function which take input as item which is the list of items
    const module = document.querySelector(".container");    
    module.innerHTML = ""; // here clear all the content in container  in case where there is old data in the container dat is there it will clear the the data
    const limitedItems = items.slice(0, 18);  //  items is the data we collected as above   here used to stored to cut the items 0to 18 data in array which is stored into the     this variable     
    limitedItems.forEach(post => {    // here selected  the dta goes through each loop 
      const details = document.createElement("div");     // create div 
      details.classList.add("subcontainer");    //create class name for it
      details.innerHTML = `    
        <div class="subimg">      
          <img src="${post.image}" alt="">           
          <span class="icon"></span>
          <div class="compare"><div></div><p>Compare</p></div>  
        </div>    
        <div class="content">       
          <div class="pinfo">      
            <div class="ph1">${post.name} (In Ear, Blue)</div>
            <div class="rating"> 
              <span class="rating-text">${post.rating}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="..." fill="#12DAA8"></path></svg>
              </span> 
              <span class="numlist">${post.reviews}</span>          
            </div>                                 
          </div>                              
          <div class="price">     
            <div class="amount">${post.price}</div>
            <div class="offers">
              <span class="uamount">${post.original_price}</span>   
              <span class="save">${post.discount}</span>
              <span class="off">${post.discount_percent}</span>
            </div>  
          </div>                                                  
          <div class="delivery">
            <span class="truck"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20 8H17V4H3C1.9 4 1 4.9 1 6V17H3C3 18.66 4.34 20 6 20C7.66 20 9 18.66 9 17H15C15 18.66 16.34 20 18 20C19.66 20 21 18.66 21 17H23V12L20 8ZM19.5 9.5L21.46 12H17V9.5H19.5ZM6 18C5.45 18 5 17.55 5 17C5 16.45 5.45 16 6 16C6.55 16 7 16.45 7 17C7 17.55 6.55 18 6 18ZM8.22 15C7.67 14.39 6.89 14 6 14C5.11 14 4.33 14.39 3.78 15H3V6H15V15H8.22ZM18 18C17.45 18 17 17.55 17 17C17 16.45 17.45 16 18 16C18.55 16 19 16.45 19 17C19 17.55 18.55 18 18 18Z" fill="white"></path></svg></span>
            <span class="express">Express Delivery by today</span>
          </div>    
        </div>            
      `;
                       
      module.appendChild(details);  // addd this container inside module tag
    });   
  }        
 
 
  const filterDatas={         //this is js { which means object  this is the structed      used to stored html things    
    //this          key which means lable of tile here  categories  which map to filter items         
     
    categories:`  
                    <div class="muiteam">   
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                         <span class="muiitems">Truly Wireless Earbuds (661)</span>
                    </div>
                    <div class="muiteam">  
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems">WINDOWS LAPTOPS (415)</span>
                    </div>   
                    <div class="muiteam">            
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems">ANDROID TABLETS (252)</span>           
                    </div>             
                    <div class="muiteam">         
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox" ></span>   
                        <span class="muiitems">Tablet and iPad Covers, Cases & Sleeves (415)</span>          
                    </div>               
                    <div class="muiteam">                        
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox" ></span>
                        <span class="muiitems">MICE(415)</span>          
                    </div>      
                    <div class="muiteam">             
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems">IPAD(415)</span>          
                    </div>           
                    <div class="muiteam">            
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox" ></span>
                        <span class="muiitems">LAPTOP COVERS(415)</span>             
                    </div>   
                    <div class="muiteam">            
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems">BLUETOOTH HEADPHONES(160)</span>         
                    </div> 
                    <div class="muiteam">              
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems">BLUETOOTH EARPHONES(160)</span>         
                    </div>   
                    <div class="muiteam">              
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems">Gaming laptops (160)</span>         
                    </div>         
    `,
    Brand:`
     <div class="muiteam">              
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems">SAMSUNG(248)</span>         
     </div>
       <div class="muiteam">              
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems">Croma(79)</span>         
     </div>
     
       <div class="muiteam">              
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems">lg(3)</span>         
     </div>

       <div class="muiteam">              
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems">apple(520)</span>         
     </div>
       <div class="muiteam">              
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems">hp(213)</span>         
     </div>
    <div class="muiteam">              
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems">Sony(56)</span>         
     </div>

     <div class="muiteam">              
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems">Oneplus(44)</span>         
     </div>            

      <div class="muiteam">              
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems">philips(32)</span>         
     </div>

     <div class="muiteam">              
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems">Boat(186)</span>         
     </div>
     <div class="muiteam">              
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems">Boat(2)</span>         
     </div>

       
     <div class="muiteam">              
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems">lenovo(174)</span>         
     </div>   
     <div class="muiteam">              
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems">Asus(114)</span>         
     </div>     
    `,
    Price:`<div class="muiteam">               
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems">501 - 1,000 (383)</span>         
     </div>
     <div class="muiteam">              
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems">10,001 - 20,000 (306)</span>         
     </div>
     <div class="muiteam">              
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems">5,001 - 10,000 (317)</span>         
     </div>
      <div class="muiteam">              
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems">500 & Below (444)</span>      
         </div>
          <div class="muiteam">              
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems">1,501 - 3,000 (575)</span>         
     </div> 

      <div class="muiteam">              
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems">20,001 - 30,000 (143)</span>         
     </div> <div class="muiteam">              
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems">1,001 - 1,500 (295) </span>         
     </div> <div class="muiteam">              
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems">30,001 - 40,000 (112) </span>         
     </div> <div class="muiteam">              
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems">3,001 - 5,000 (296) </span>         
     </div> <div class="muiteam">              
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems">40,001 - 50,000 (82) </span>         
     </div> <div class="muiteam">              
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems">1,00,001 - 2,00,000 (349) </span>         
     </div> <div class="muiteam">               
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems">60,001 - 70,000 (124)</span>         
     </div> <div class="muiteam">              
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems">50,001 - 60,000 (109)</span>         
     </div> <div class="muiteam">              
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems"> 70,001 - 80,000 (96) </span>         
     </div>
     
         
     
     `,
     Processor:`
      <div class="muiteam">              
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems">Core i5 (126)</span>         
      </div>
      <div class="muiteam">              
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems">Core i7 (76)</span>         
      </div>

      <div class="muiteam">              
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems">Ryzen 7 (37)</span>         
      </div>

      <div class="muiteam">              
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems"> Ryzen 5 (52) </span>         
      </div>

      <div class="muiteam">              
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems">Core Ultra 7 (61)  </span>         
      </div>

      <div class="muiteam">              
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems">Core i3 (41)  </span>         
      </div>

      <div class="muiteam">              
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems"> M2 (17)  </span>         
      </div>
      <div class="muiteam">              
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems"> Core Ultra 5 (32)  </span>         
      </div>

      <div class="muiteam">              
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems"> M4 (30)  </span>         
      </div>

      <div class="muiteam">              
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems">M3 (47) </span>         
      </div>

      <div class="muiteam">              
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems">Ryzen 3 (18)  </span>         
      </div>

      <div class="muiteam">              
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems">Core Ultra 9 (15)  </span>         
      </div>
     `,
     Ram:`

      <div class="muiteam">              
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems">  16GB (393) </span>         
      </div>
      <div class="muiteam">              
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems"> 8GB (186)  </span>         
      </div>

      <div class="muiteam">              
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems"> 32GB (55)  </span>         
      </div>
                     
      <div class="muiteam">              
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems">  24GB (36) </span>         
      </div>
      <div class="muiteam">                 
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems">  36GB (11) </span>         
      </div>

      <div class="muiteam">              
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems">18GB (6)  </span>         
      </div>
               
      <div class="muiteam">              
                        <span class="muicheck"><input type="checkbox" name="" id="" class="greenbox"></span>
                        <span class="muiitems"> 48GB (6)                 </span>         
      </div>  
     `                   
} 
                                               
const  catBtns=document.querySelectorAll('.cat')      
const  muiBox =document.querySelector('.muibox') 
const  muiBtn =document.querySelector('.muictnbtn') 
const  muiUl =document.querySelector(".muiul");      
const  muiHead =document.querySelector(".muih1 h1");                                                   
catBtns.forEach(cat =>{                             
  cat.addEventListener("click",()=>{           
    const filterType=cat.getAttribute("cat-filter")
    muiUl.innerHTML =filterDatas[filterType];       // muil inner html  == that value we clik get from cat filters       
    muiHead.textContent =filterType;  //this to get head of the content
    if(window.innerWidth>=768){        // here i used to check the to work this conditiotrue  
      const rect =cat.getBoundingClientRect();    // getBouding client rect whech mean mean it give the position of the button which is placed on the screen  which top 150 || left 100 || boottom and w and h this is stored in the in the rect
    
      muiBox.style.top=`${rect.bottom  +8}px`; //here we take cat bottom px range and we  add plus          
      muiBox.style.left =`${rect.left }px`     //here we take cat left side px range and we  add plus     
    }      
    muiBox.classList.add("active")                
  })               
}) 
muiBtn.addEventListener("click",()=>{    //there is close btn in the mui box to closefilter it use to remove it 
  muiBox.classList.remove("active")       
}) 
   

document.addEventListener("click",(e)=>{  
    if(!muiBox.contains(e.target) && !e.target.closest(".scrolls")){
      muiBox.classList.remove("active")    // when screen size is more     768 and below that i use this when i clik out side on that div i should close the div
    }         
})         
        
const svg=`  
<svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M9.66665 1.27337L8.72665 0.333374L4.99998 4.06004L1.27331 0.333374L0.333313 1.27337L4.05998 5.00004L0.333313 8.72671L1.27331 9.66671L4.99998 5.94004L8.72665 9.66671L9.66665 8.72671L5.93998 5.00004L9.66665 1.27337Z" fill="#191919"></path></svg>
`                     
                                                                     
document.addEventListener('DOMContentLoaded', () => { //this event used in html to wait     unit the html content to load     
  const parentContainer = document.body;      
  parentContainer.addEventListener('change', (e) => {              
    if (e.target && e.target.classList.contains('greenbox')) {  //this were    this work of e.target has green box          
      const labelText = e.target.closest('.muiteam').querySelector('.muiitems').innerText.trim();      //    here taken close item and selct .inner text .tim mean it is used to remove extra space if theerr "rosh "     "roshan"                                                                     
       console.log(labelText);  //                                                        
       const parentBox = document.createElement("div"); //     used to create prent for fil box and svg                                    
      const cleanTexts = labelText.replace(/\s*\(.*?\)\s*/g, '').trim();        
      const rwlDiv= document.querySelector('.rwl')            // all parent were stote here               
      const clearBtn =document.querySelector(".clear")         // used to clear all filter  inside the div in this so we need select this div                     
      const exists   =Array.from(rwlDiv.children).some(child=>        //some mean loops through each child   to chech is there any child with  condtion true  //array.from(ruvdiv.child)  it is the collection of the child eleement inside the  rwldiv  .some() is array method which is used used goes each array one by one it codition is true it will return  if conditon is  flase it will return it as false     
        child.querySelector(".fil")?.textContent ===cleanTexts   //      here this each child div there is the arrow function  for check          here we check   inside that child has fil and its.content is == clean text                 
      )                                                                                                                    
      if(exists) return;                      
      const filBox=document.createElement("div")       // this tag creat for storing label text         
      const svgspan=document.createElement("span")     // this tag is used for the  spann which contain the close svg
      svgspan.innerHTML=svg;           // here we created and stored svg on top  varible that svg insert to innerhtml
      filBox.className='fil'        //we give a class name fill to here                         
      filBox.textContent=cleanTexts;     //the text content of fiill is selected by clean text                                
      parentBox.appendChild(filBox)     // div where is gon to add the child 
      parentBox.appendChild(svgspan)        
      rwlDiv.appendChild(parentBox)
      clearBtn.style.display="flex";   // when      we get any  product is filter to clear we need    all by sing so we used it        
      svgspan.addEventListener("click",()=>{ 
        parentBox.remove();            
        productsList(allData);              
        if(rwlDiv.children.length ===0){              
          clearBtn.style.display="none"  //          
        }       
      })                                 
      clearBtn.addEventListener("click",()=>{    //when we click all the but     
        rwlDiv.innerHTML="";    // this how to remove all the content which is inside on this      
        productsList(allData)  // this only work if array has no element it should display any thing
        clearBtn.style.display="none"      //    this where there i create a clear but there this is where i remove the that button
      })                    
      let filtered = allData.filter(post => post.brand === labelText);  // this is the place where create the varialble d it sore  value    all .filter function post .brand  which == we clicked label text 
      if (filtered.length === 0) {                   
        filtered = allData.filter(post => post.cats === labelText);          
      }                  
      if (filtered.length === 0) {      
        filtered = allData.filter(post => post.processor=== labelText);          
      }         
      if (filtered.length === 0) {
        filtered = allData.filter(post => post.ram=== labelText); 
      }             
      if(filtered.length==0){    
        const pRange= extractRange(labelText);     // here we store the from function    
        if(pRange){     // p range has vaild number
          filtered=allData.filter(post=>{       
            const productPrice =cleanPrice(post.price);  // here product      clean p is functionn iused here                    
            return productPrice >= pRange.min && productPrice <=pRange.max
          })   
        }                 
      }                                                 
      productsList(filtered);                                                                                              
    }                                    
  });                         
});                                                    
const cleanPrice =(priceStr)=>{      // this function used to clean   this one agrument used to contsainr the price                                           
  return parseInt(priceStr.replace(/[₹,]/g, ''), 10);  // this function used to convert the  tplace the ruppes to empy and 10 to covert this integer
}                                
const extractRange =(label)=>{     //this used to extarct the value of the   the o=price range and clean it
  const match = label.match(/(\d{1,3}(?:,\d{3})?)\s*-\s*(\d{1,3}(?:,\d{3})?)/);  ///([\d,]+) this  this matchhes one more digits or comma s*- used   " "  "-"
  if (match) {   
    const min = parseInt(match[1].replace(/,/g, ''), 10);    
    const max = parseInt(match[2].replace(/,/g, ''), 10);
    return { min, max };
  }                              
  return null;             
}         
  

const  catBtns=document.querySelectorAll('.cat')
const  muiBox =document.querySelector('.muibox')               
const  muiBtn =document.querySelector('.muictnbtn')  
const  muiUl =document.querySelector(".muiul");       
const  muiHead =document.querySelector(".muih1 h1");   
const  storeGreenBox= new Set();  // is js build in object to store unique value which means there is repeat value

                                                        
catBtns.forEach(cat =>{                        
  cat.addEventListener("click",()=>{           
    const filterType=cat.getAttribute("cat-filter")      
    muiUl.innerHTML =filterDatas[filterType];   
    muiHead.textContent =filterType  
  
    setTimeout(() =>{  // set timeout is build in js used to delays the execution
      document.querySelectorAll(".greenbox").forEach(chk =>{  //used to select all the iteams which is grreen mob
        const label =chk.closest(".muiteam")?.querySelector(".muiitems")?.innerText.trim();// used reurn undefine the value if we did not get the value
        const cleanLabel=label?.replace(/\s*\(.*?\)\s*/g, '').trim(); // \s*zero any spaces \( to rplace this .*? inside of it   replace ""   // is used for the removal of the space inthe text
        if(storeGreenBox.has(cleanLabel)){// this were is check the green box were prvisoly slected 
          chk.checked =true;      
        } 
      })
    },0);
    if(window.innerWidth>=768){     
      const rect =cat.getBoundingClientRect();          
      muiBox.style.top=`${rect.bottom +.2}px`;  
      muiBox.style.left =`${rect.left }px`
    }           
    muiBox.classList.add("active")               
  })                                                
})          
muiBtn.addEventListener("click",()=>{         
  muiBox.classList.remove("active")       
})                        
document.addEventListener("click",(e)=>{  
    if(!muiBox.contains(e.target) && !e.target.closest(".scrolls")){
      muiBox.classList.remove("active")
    }                                                      
})                               
                                                  
const svgs=`
<svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M9.66665 1.27337L8.72665 0.333374L4.99998 4.06004L1.27331 0.333374L0.333313 1.27337L4.05998 5.00004L0.333313 8.72671L1.27331 9.66671L4.99998 5.94004L8.72665 9.66671L9.66665 8.72671L5.93998 5.00004L9.66665 1.27337Z" fill="#191919"></path></svg>
`                                                                    
document.addEventListener('DOMContentLoaded', () => {                                           
  const parentContainer = document.body;                                                            
  const rwlDiv= document.querySelector('.rwl')                     
  const clearBtn =document.querySelector(".clear")                         
  parentContainer.addEventListener('change', (e) => { 
    if (e.target && e.target.classList.contains('greenbox')) { 
      const checkbox =e.target; 
      const labelTexts = checkbox.closest('.muiteam').querySelector('.muiitems').innerText.trim(); 
      const cleanTexts = labelTexts.replace(/\s*\(.*?\)\s*/g, '').trim();     
      const labelText = labelTexts.toUpperCase();                                                                    
      console.log(labelText);                                                                                                                
      if(checkbox.checked){                             
        if(![...rwlDiv.children].some(child=> child.querySelector(".fil")?.textContent === cleanTexts)){ // ! is condtion flase it skip the code insie ... used rwl chil ... to store all the html inside it
          const filBox=document.createElement("div") 
          const parentBox = document.createElement("div");        
          const svgspan=document.createElement("span")   
          svgspan.innerHTML=svg;                            
          filBox.className='fil'                                           
          filBox.textContent=cleanTexts;                                                                           
          parentBox.appendChild(filBox)       
          parentBox.appendChild(svgspan)        
          rwlDiv.appendChild(parentBox)                              
          clearBtn.style.display="flex";
          storeGreenBox.add(cleanTexts);                                     
          svgspan.addEventListener("click",()=>{
            parentBox.remove(); 
            storeGreenBox.delete(cleanTexts) 
            document.querySelectorAll(".muiteam").forEach(team=>{
              const item =team.querySelector(".muiitems")?.innerText.trim().replace(/\s*\(.*?\)\s*/g, '');
              if(item === cleanTexts){
                 const box =team.querySelector(".greenbox");
                 if(box) box.checked =false;
              }   
            });                 
            productsList(allData);         
            if(rwlDiv.children.length ===0){     
              clearBtn.style.display="none" 
            }
          })        
        } 
         
        let filtered = allData.filter(post => post.brand === labelText);  
        if (filtered.length === 0) {
        filtered = allData.filter(post => post.cats === labelText);
        }                   
        if (filtered.length === 0) {
          filtered = allData.filter(post => post.processor=== labelText);
        }      
        if (filtered.length === 0) {  
          filtered = allData.filter(post => post.ram=== labelText);   
        }                  
        if(filtered.length==0){        
          const pRange= extractRange(labelText);             
          if(pRange){   
            filtered=allData.filter(post=>{      
              const productPrice =cleanPrice(post.price);  
              return productPrice >= pRange.min && productPrice <=pRange.max
            }) 
          }        
        }                                                  
        productsList(filtered);                  
        }else{
          [...rwlDiv.children].forEach(child=>{
            const pill =child.querySelector(".fil");
            if(pill?.textContent ===cleanTexts){ 
              child.remove();
            }
          })
          storeGreenBox.delete(cleanTexts);
          productsList(allData);
          if(rwlDiv.children.length==0){
            clearBtn.style.display ="none";
          }
        }                                    
    }                                                                          
  });                                   
    
  clearBtn.addEventListener("click",()=>{
      rwlDiv.innerHTML="";
      productsList(allData);
      storeGreenBox.clear();
      clearBtn.style.display="none";

      document.querySelectorAll(".greenbox").forEach(box=>{
        box.checked =false;
      });

  })
}); 
const cleanPrice =(priceStr)=>{                                         
  return parseInt(priceStr.replace(/[₹,]/g, ''), 10);
}                                            
const extractRange =(label)=>{                        
  const match = label.match(/([\d,]+)\s*-\s*([\d,]+)/);
  if (match) {               
    const min = parseInt(match[1].replace(/,/g, ''), 10);      
    const max = parseInt(match[2].replace(/,/g, ''), 10);
    return { min, max };             
  }                                      
  return null;                 
}                                        
      