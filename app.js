/**
 *  Auther            :Hossam
 *  Created           : 15/3/2022
 * last modification  : 21/3/2022
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * Dependencies: None
 * JS Version: ES2015/ES6
 * JS Standard: ESlint
*/
/**
 * Define Global Variables
*/ 
//  1) to save all sections  that matches the "section"               ==> i used it in main function.
let existingSections;
//  2) to save all ancors   that matches the "a"                      ==> i used it in main functio.
//  3) to Creates a new empty nodes can be added to build an UL tree  ==> just for fet good performance.
let emptyList;
//  4) another way to save  all sections  that matches the "section"  ==> i used it to scoop in active section.
let SectionsArray;
 
/**
 * End Global Variables
 * 
 * 
 * 
 * 
 * 
 * Start assignment values to Variables
 * 
*/

  

 existingSections     = document.querySelectorAll("section");
 SectionsArray        = Array.from(document.querySelectorAll("section"));
 ElemontsArray        = [] ;
 //MenuItemsArray        = Array.from(document.querySelectorAll("section"));
 ourUl                = document.getElementById('navbar__list');
 emptyList            = document.createDocumentFragment();

    // <=== to counte number of sections 
    let counter = 0;

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
    
    //==============================================================================//
    // ==========================> MAIN Functiom <==================================//
    //==============================================================================//
    /*=========== I want to buile a UL (menue bar) to be like this ============================//
                  =====================================                             
       <li>  <a  class="menu__link"  "#section1">  Personal Informations </a> </li>
       <li>  <a  class="menu__link"  "#section2">  Skills </a> </li>
       <li>  <a  class="menu__link"  "#section3">  Skills </a> </li>
       <li>  <a  class="menu__link"  "#section4">  Skills </a> </li>
    */
    // start loop on all  existind sections
    existingSections.forEach 
      ((newEliment)=>
        {
          counter++;
          /**
            * Define local Variables and assgint thier values inside the loop
          */ 
          //  to get  the value of a section defiend by 'id' actuallt z section name  .
          const sectionId = newEliment.getAttribute('id');
          console.log('id= '+ sectionId);
          //  to get  the value of a section defiend by ''data-nav'' actually z section title  .
          const sectionTitle = newEliment.getAttribute('data-nav');
          console.log("data-nav= "+ sectionTitle)
          // method to create a new element specified by 'li'
          const NewLi = document.createElement('li');
          // method to create a new element specified by 'a'
          const anchors = document.createElement('a');
          // to save containe of each section title in new menu item as a link
          anchors.innerText = sectionTitle;
          // method to add a new element  to the end of the list of UL
          NewLi.appendChild(anchors);
          // to append new contents to the existing  element.
          NewLi.innerHTML= `<a class='menu__link' data-nav='#${sectionTitle} '#${sectionId}' >${sectionTitle}</a>`;
         // " data-nav="${section.id}
         console.log(NewLi);
          // method to add a new element  to the end of the emptyNewLi wich will be add to list of UL
          if (sectionId != 'newsectiom')
          {
              emptyList.appendChild(NewLi);
              NewLi.addEventListener
              (
                  "click",(smoothScolling) =>
                    {   
                      // start fnuction Scrolling to section where link click
                      // Scroll amoothly  to anchor ID using scroll TO event
                      newEliment.scrollIntoView({behavior:"smooth",block:"center"});
                      smoothScolling.preventDefault();
                     // console.log(newEliment);
                      // end nuction Scrollin 
                   }
              )
          }
        }
      )
      //==============================================================================//
      // ==========================> END MAIN Functiom <==================================//
      //==============================================================================//
        // now i can buld z Navigation bar (horizontal menu)
      ourUl.appendChild(emptyList);
    //============================================================================================================================//
    // ===============================================> SUB Function 1 <============================================================//
    //================================ to test whether a section is in the viewport.==============================================//
      function detSectionScope (secElement)
      {
        let secPosition = secElement.getBoundingClientRect()
        // console.log(secPosition)
        if (secPosition.top >= 0  ||secPosition.buttom <100  )
          return true;
        else
          return false;
       }
     //============================================================================================================================//
    // ===============================================> SUB Function 2 <============================================================//
    //===================================== to performing interactivity with the DOM .==============================================//
           
      function perfomActvation()
      {
        for (  currentSec of SectionsArray) {
       //   let activeLink = navBar.querySelector(`[data-nav=${active.id}]`);
       let activeLink = document.querySelector('.menu__link');
       const sectionTitle = currentSec.getAttribute('data-nav');
           // console.log(currentSec);
             console.log("menue link= " + activeLink);
             console.log("section title = " + sectionTitle)
          if (detSectionScope(currentSec))
          { 
            if (!currentSec.classList.contains('your-active-class'))
            {
                  currentSec.classList.add('your-active-class');

             //     currentSec.classList.add('your-active-class');
                  
            };    // ===> active if it in vewport if it in vewport
            }
          else 
                 // ===> disactive if it is not in vewport if it in vewport
            currentSec.classList.remove('your-active-class')
        }

       }
    //===========================================================================================================================//
    // ===============================================> End SUB Functions <======================================================//
    //===========================================================================================================================//
      document.addEventListener('scroll',perfomActvation);
 // =======>  Begin Events whin Scroll to section on link click
    

/**
 * End Main Functions
 * Begin Events
 * 
*/
    //============================================================================================================================//
    // =====================================> create new custom sectios Functions  ===================================================//
    //============================================================================================================================//
    // =====================================================> function 1 ===================================================//
    //===================================== to build new custom paragraph as new section ==============================================//
    //==============================================================================//
    //  to get  the value of a section defiend by user 'data-nav'' actually z section title  .
    /*just like that 
        <section id="section4" data-nav="Previous Experience" > 
          <div class="landing__container">
            <h2> Previous Experience</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus 
              pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. 
              Phasellus imperdiet porta orci eget mollis. 
            </p>
         </div>
      </section>
   */ 
function  createSection  (newTitle , newContaine)
{
  const content=
   `<section id="section${counter}" data-nav="${newTitle}" class="your-active-class">
    <div class="landing__container">
    <h2>${newTitle}</h2>
    <p> ${newContaine} 
    </p>

    </div>
    </section>`;
     document.querySelector("main").insertAdjacentHTML("beforeend", content); // <========put the new section as last  section
     return (content) ;
};

// =====================================================> function 2 ===================================================//
//================ creating  sections by click on the button """press to create your Custom Paragraph!""" ==========//

document.getElementById("submit").addEventListener
(
  "click", () => 
    {
      //  <===== title of paragraph
      let newHeader = document.getElementById('fname').value;
      // console.log ('newHeader = '+ newHeader);
         //  <===== body of paragraph
      let  newText = document.getElementById('mytextarea').value;
      // console.log ('newText = '+ newText);
      createSection(newHeader,newText);
      addItemToMenue (newHeader);
    }
);


// =====================================================> function 3 ===================================================//
//=================================== append the new section title to the navigation bar  ==============================//
//=================================================== and rebulid menue ================================================//
function addItemToMenue (newHeaderaSSectiontitle)
{
  const sectionId = "section"+counter ;
  // console.log(sectionId);
  // console.log(counter) ;
  //  to get  the value of a section defiend by ''data-nav'' actually z section title  .
  // method to create a new element specified by 'li'
  const NewLi = document.createElement('li');
  // method to create a new element specified by 'a'
  const anchors = document.createElement('a');
  // to save containe of each section title in new menu item as a link
  anchors.innerText = newHeaderaSSectiontitle;
  // method to add a new element  to the end of the list of UL
  NewLi.appendChild(anchors);
  // to append new contents to the existing  element.
  //          <li>  <a class="menu__link"  href="#section2">  Skills </a> </li>
  // NewLi.innerHTML= `<a class='menu__link' '#${sectionId}'>${sectionTitle}</a>`;
  NewLi.innerHTML= `<a class='menu__link' '#${sectionId}'>${newHeaderaSSectiontitle}</a>`;
  // method to add a new element  to the end of the emptyNewLi wich will be add to list of UL
  counter++;
  NewLi.addEventListener
  
  (
    "click", (smoothScolling) =>
    {
      // start fnuction Scrolling to section where link clicked
      // Scroll amoothly  to anchor ID using scroll TO event
      NewLi.scrollIntoView({  behavior:"smooth"});
     // addSection.scrollIntoView({  behavior:"smooth"});
       // end nuction Scrollin 
      // smoothScolling.preventDefault();
    }
  )
  
  ourUl.appendChild(NewLi);
  }
// Scroll to section on link click

// Set sections as active

