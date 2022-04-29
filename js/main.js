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
  console.log("reached");
  var observer = new IntersectionObserver((sections)=>{

    
    if(sections[0].isIntersecting === true)
    menuNameChange(sections[0].target.id);
    

},{threshold: [0.10]});

for(let i=0; i<menu_sections.length; i++ )
observer.observe(menu_sections[i]);


//------------ show the current viewed section menu link name at the top of menu-------

function menuNameChange(target_sec){
 
  let temp_section;
 
  menu_sections.forEach(section=>{
    console.log(target_sec);
    if(section.id == target_sec){
      let name = (target_sec+"").toLowerCase();
      let sec_list = menu.getElementsByClassName(name)[0];
      let temp_sec = sec_list;
        
      menu.prepend(temp_sec);
      
    }
  });
}

//-------when a menu link is clicked show that name at the top of menu
menu_links.forEach(link=>{
  link.addEventListener("click",()=>{
  menu.prepend(link);
  });
});

} 

 