
window.addEventListener("load", function() {
    document.querySelector(".preloader").classList.add(".opacity-0"); 
  
    setTimeout(()=>{
      document.querySelector(".preloader").style.display = "none";    
   },1000)
})



// Portfolio Item Filter

const filterContainer = document.querySelector(".portfolio-filter");
filterBtns=filterContainer.children,
totalFilterBtn=filterBtns.length,
portfolioItems=document.querySelectorAll(".portfolio-item"),
totalPortfolioItem=portfolioItems.length;

for(let i=0;i<totalFilterBtn;i++){
     filterBtns[i].addEventListener("click",function(){
     filterContainer.querySelector(".active").classList.remove("active");
     this.classList.add("active");   
    
    const filterValue=this.getAttribute("data-filter");
    for(let j=0; j<totalPortfolioItem;j++){
        if(filterValue===portfolioItems[j].getAttribute("data-category")){
            portfolioItems[j].classList.remove("hide");
            portfolioItems[j].classList.add("show");
        }
        else{
            portfolioItems[j].classList.remove("show");
            portfolioItems[j].classList.add("hide");
        }
          if(filterValue==="all"){
            portfolioItems[j].classList.remove("hide");
            portfolioItems[j].classList.add("show");             
        }
    }
    
    })
}
// Portfolio Lightbox
const lightbox=document.querySelector(".lightbox"),
      lightboxClose=lightbox.querySelector(".lightbox-close"),
      lightboxImg=lightbox.querySelector(".lightbox-img"),
      lightboxText=lightbox.querySelector(".caption-text"),
      lightboxCounter=lightbox.querySelector(".caption-counter");
  let itemIndex=0;
  
  for(let i=0;i<totalPortfolioItem;i++){
      portfolioItems[i].addEventListener("click", function(){
          itemIndex=i;
          changeItem();
          toggleLightbox();
      }) 
} 
function changeItem(){
    imgSrc=portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
    lightboxImg.src=imgSrc;
    lightboxText.innerHTML=portfolioItems[itemIndex].querySelector("h4").innerHTML;
    lightboxCounter.innerHTML=(itemIndex+1)+" of "+totalPortfolioItem;
}
function toggleLightbox(){
    lightbox.classList.toggle("open");
}  
function nextItem(){
if(itemIndex===totalPortfolioItem-1)
 {itemIndex=0;}
else{
   itemIndex++ 
}
changeItem();
}
function prevItem(){
    if(itemIndex===0) 
     {itemIndex=totalPortfolioItem-1;}
    else{
       itemIndex-- 
    }
    changeItem();
}
// closse lightbox
lightbox.addEventListener("click", function(event){
    if(event.target===lightboxClose || event.target===lightbox){
      toggleLightbox();
    }
})  

// Aside Navbar
const nav=document.querySelector(".nav"),
      navList=nav.querySelectorAll("li"),
      totalNavlist=navList.length,
      allSection=document.querySelectorAll(".section"),
      totalSection=allSection.length;
  for(let i=0; i<totalNavlist;i++){
     const a=navList[i].querySelector("a");
     a.addEventListener("click", function(){
        for(let i=0; i<totalSection;i++){
        allSection[i].classList.remove("back-section");}
        //remove back-section Class
         for(let j=0; j<totalNavlist;j++){

           if(navList[j].querySelector("a").classList.contains("active")){
               allSection[j].classList.add("back-section");
           }  //add back-section Class
              
           navList[j].querySelector("a").classList.remove("active");
          }
             this.classList.add("active");
                 
           showSection(this);
           
           if(window.innerWidth<1200){
            asideSectionTogglerBtn();
           }
        })
    }
     function showSection(element){
        for(let i=0; i<totalSection;i++){
            allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
     document.querySelector("#" + target).classList.add("active")
     } 
     function updateNav(element){
        for(i=0;i<totalSection;i++){
            navList[i].querySelector("a").classList.remove("active");
            const target=element.getAttribute("href").split("#")[1];
            if(target===navList[i].querySelector("a").getAttribute("href").split("#")[1]){
               navList[i].querySelector("a").classList.add("active"); 
            } 
        }
     }
     document.querySelector(".hire-me").addEventListener("click", function(){
       showSection(this); 
       updateNav(this);

     })



     const navTogglerBtn=document.querySelector(".nav-toggler"),
        aside= document.querySelector(".aside");
 
    navTogglerBtn.addEventListener("click",asideSectionTogglerBtn
    )     
        
  
     function asideSectionTogglerBtn(){
      aside.classList.toggle("open");
      navTogglerBtn.classList.toggle("open");
      for(let i=0; i<totalSection;i++){
        // allSection[i].classList.toggle("open");
    }
}
  























