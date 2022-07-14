const menu_sections =document.querySelectorAll(".menu-section");
const menu = document.querySelector(".menu__list");
const menu_links =Array.from(document.querySelectorAll(".menu-link"));

//---menu collpasible code-----
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);


//--- detecting which section user views so that the menu is changed according to that

// window.addEventListener("scroll",setMenuSection);

// function setMenuSection(){
//  // console.log("scroll");
//   // for(let section in menu_sections){

    
//   //   let section_pos = menu_sections[section].getBoundingClientRect().y;
//   //   if(section_pos.top>= 0 
//   //     && section_pos.bottom <= window.innerHeight
//   //    ){
//   //     //if a section is veiwed then set the menu
//   //     console.log(section + "=> Top: "+ section_pos.top + " client-height: "+window.innerHeight);
//   //     console.log(section + "=> Bottom: "+ section_pos.bottom);

//   //   }
//   //   // if(section_pos.top>=0 && 
//   //   //    section_pos.bottom<=(window.innerHeight || document.documentElement.clientHeight)){ //if one of the section is viewed

//   //   //     console.log("reached");
//   //   // }
//   // }
// }



if(window.innerWidth<=650){ //--- if its mobile then set that menu link at top which is in viewport
  // This object below "IntersectionObserver" is used to
  // detect whether an element is in viewport
  var observer = new IntersectionObserver((sections)=>{

    
    if(sections[0].isIntersecting === true) //if its true, then element is visible in the veiwport
    menuNameChange(sections[0].target.id);
    

},{threshold: [0.10]}); //based on this 2nd argument, we decide when will "isInterscting" property be true
// 0 threshold means that element is visible slightly, 1 threshold means that element is fully visible
// I set it to "0.10" because its working best for me here.

for(let i=0; i<menu_sections.length; i++ )
observer.observe(menu_sections[i]); //Which element should be observed by this object that whether its showing in the veiwport or not
// so i have applied on all the 3 sections on my webpage


//------------ show the current viewed section menu link name at the top of menu-------

function menuNameChange(target_sec){
 
  //in this function we check which section is showing in
  //the veiwport and then we get the ID of the section and
  // compare it with the target section which is currently
   // observed by the "IntersectionObserver" object.
   //if both equal, then we get the menu link using the 
   //section name (while converting the string to lowercase cuz
   //the id is in lowercase in html), and then we add that
   //menu link at the top of the menu. 
   //so when user scrolls down the menu links will be changed
   //according to the current section that is veiwed in the
   //veiw port. 
 
  menu_sections.forEach(section=>{ 
    
    if(section.id == target_sec){
      let sec_name = (target_sec+"").toLowerCase();
      let sec_list = menu.getElementsByClassName(sec_name)[0];
        
      menu.prepend(sec_list);
      
    }
  });
}

//-------when a menu link is clicked show that name at the top of menu
menu_links.forEach(link=>{
  link.addEventListener("click",()=>{
    console.log("clicked");
  menu.prepend(link);
  });
});

} 

