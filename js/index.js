import { NewsData } from "./APICalling.js";
import { Pagination } from "./Pagination.js";

const newsimg = document.querySelectorAll(".newsimg");
const newslink = document.querySelectorAll(".newslink");
const newshead = document.querySelectorAll(".newshead");
let count = document.querySelector('.count');
const paginations_row = document.querySelector("#paginations_row");
const spinner_border = document.querySelectorAll(".spinner-border");

let flag = false;
let html = ``;
let data = []
let i = 0;
let previousnumber = i;
// countingnumbers.innerHTML = i;

if(!flag){
    for(let p = 0; p <= spinner_border.length-1; p++){
        spinner_border[p].style.display = "block";
    }
}

NewsData().then((news)=>{
    let newnews = news.slice(0,100)
    
    const paginations = Pagination(newnews.length,newnews);
    data = paginations;
    
    
}).catch((c)=>{
    flag = false;
    if(!flag){
        for(let p = 0; p <= spinner_border.length-1; p++){
            spinner_border[p].style.display = "block";
        }
    }
})


let spantag;
let allspantags;
setTimeout(()=>{

    flag = true;
    for(let p = 0; p <= spinner_border.length-1; p++){
        spinner_border[p].style.display = "none";
    }

    for(let p = 0; p <= data[i].length-1; p++){
        newsimg[p].src = data[i][p].imglink;
        newshead[p].innerHTML = data[i][p].heading;
        newslink[p].href = data[i][p].link;
    }

    for(let k = 0; k <= data.length-1; k++){
        spantag = document.createElement("span");
        spantag.setAttribute('id',k);
        spantag.setAttribute("class","countnumbers")
        spantag.style.color = "gray";
        spantag.style.fontSize = "1.3rem";
        spantag.style.margin = "0.2rem";
        spantag.style.padding = "0.5rem";
        spantag.innerHTML = k;
        count.appendChild(spantag)
    }
    allspantags = document.querySelectorAll(".countnumbers");
    allspantags[i].style.backgroundColor = "#DA0037";
    allspantags[i].style.borderRadius = "100%";
    allspantags[i].style.color = "white";
    
    previousnumber = data.length - 1
    allspantags[previousnumber].style.backgroundColor = "#FFF7E9";
    allspantags[previousnumber].style.borderRadius = "100%";
    allspantags[previousnumber].style.color = "gray";
    
},1000)

const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

next.addEventListener('click',()=>{
    if(i >= data.length-1){
        i = 0;
        allspantags[i].style.backgroundColor = "#DA0037";
        allspantags[i].style.borderRadius = "100%";
        allspantags[i].style.color = "white";


        previousnumber = data.length-1
        allspantags[previousnumber].style.backgroundColor = "#FFF7E9";
        allspantags[previousnumber].style.borderRadius = "100%";
        allspantags[previousnumber].style.color = "gray";


        for(let p = 0; p <= data[i].length-1; p++){
            newsimg[p].src = data[i][p].imglink;
            newshead[p].innerHTML = data[i][p].heading;
            newslink[p].href = data[i][p].link;
            
        }
    }else{
        i++;
        allspantags[i].style.backgroundColor = "#DA0037";
        allspantags[i].style.borderRadius = "100%";
        allspantags[i].style.color = "white";

        previousnumber = i - 1
        allspantags[previousnumber].style.backgroundColor = "#FFF7E9";
        allspantags[previousnumber].style.borderRadius = "100%";
        allspantags[previousnumber].style.color = "gray";


        for(let p = 0; p <= data[i].length-1; p++){
            newsimg[p].src = data[i][p].imglink;
            newshead[p].innerHTML = data[i][p].heading;
            newslink[p].href = data[i][p].link;
        }
    }   
})

prev.addEventListener('click',()=>{
    if(i==0){
        i = data.length-1;  
        allspantags[i].style.backgroundColor = "#DA0037";
        allspantags[i].style.borderRadius = "100%";
        allspantags[i].style.color = "white";

        previousnumber = 0
        allspantags[previousnumber].style.backgroundColor = "#FFF7E9";
        allspantags[previousnumber].style.borderRadius = "100%";
        allspantags[previousnumber].style.color = "gray";
        for(let p = 0; p <= data[i].length-1; p++){
            newsimg[p].src = data[i][p].imglink;
            newshead[p].innerHTML = data[i][p].heading;
            newslink[p].href = data[i][p].link;
        }
    }else{
        i--;
        allspantags[i].style.backgroundColor = "#DA0037";
        allspantags[i].style.borderRadius = "100%";
        allspantags[i].style.color = "white";

        previousnumber = i + 1
        allspantags[previousnumber].style.backgroundColor = "#FFF7E9";
        allspantags[previousnumber].style.borderRadius = "100%";
        allspantags[previousnumber].style.color = "gray";

        for(let p = 0; p <= data[i].length-1; p++){
            newsimg[p].src = data[i][p].imglink;
            newshead[p].innerHTML = data[i][p].heading;
            newslink[p].href = data[i][p].link;
        }
    }    
    
})