// loading part javascript -----
let loading = document.querySelector(".loading");
window.addEventListener("load", ()=>{
    loading.style.display = "none";
})

// toggle menu js 
// initialize constent variable 
const toggleBtn = document.querySelector(".toggle_btn"),
      menu = document.querySelector(".menu"),
      closeBtn = document.querySelector(".close_btn"),
      menuOverlay = document.querySelector(".menu_overlay"),
      menuLinks = document.querySelectorAll(".link"),
      header = document.getElementById("header");

toggleBtn.addEventListener('click' , menuActive);
closeBtn.addEventListener('click' , menuActive);
menuOverlay.addEventListener('click' , menuActive);

function menuActive(){
    menu.classList.toggle("active");
    menuOverlay.classList.toggle("active");
    document.body.classList.toggle("scroll_off");
}
menuLinks.forEach(function(menulink){
    menulink.addEventListener('click', menuActive)
});

// active menu link ------------
const sections = document.querySelectorAll('section[id]');

function linkActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(currrent =>{
        const sectionHeight = currrent.offsetHeight;
        const sectionTop = currrent.offsetTop - 100;
        sectionId = currrent.getAttribute('id');

        if(scrollY > sectionTop && (scrollY <= sectionTop + sectionHeight)){
            document.querySelector('.menu a[href*=' + sectionId + ']').classList.add('active_link');
            document.querySelector("title").innerText =  sectionId + " | Sajjadur" ;
        }else{
            document.querySelector('.menu a[href*=' + sectionId + ']').classList.remove('active_link');
        };
    });
};
window.addEventListener('scroll' , linkActive);


// scroll to menu active ------------- 
window.addEventListener('scroll', scrollFunction );
scrollFunction();
function scrollFunction(){
    // header scroll to active -----
    if(window.scrollY > 150){
        header.classList.add("header_active");
        // social link 
        document.querySelector(".social_item").classList.add("scroll_top");
    }else{
        header.classList.remove("header_active");
        // social link 
        document.querySelector(".social_item").classList.remove("scroll_top");
    };
}




// services section js ---------------
// initialize variable 
let serviceViews = document.querySelectorAll(".service_link"),
    singleServices = document.querySelectorAll(".single_service"),
    serviceClose = document.querySelector(".service_close"),
    serviceExplane = document.querySelector(".service_explane"),
    serviceOverlay = document.querySelector(".service_overlay"),
    serviceExplaneTitle = document.querySelector(".service_explane_title"),
    serviceExplaneUl = document.querySelector(".service_explane_ul");

let ExplaneArray = [
    ["I design portfolio", "create user interface for your requerment", "I design user inter face with animation","with hover effect"],
    ["I designing big website", "website customize", "I design user inter face with animation","with hover effect"],
    ["wordpress user interface design", "wordpress plagin setup", "wordpress problem solver", "and responsive website"]
];

function explaneServiceData(index){
    serviceExplaneUl.innerHTML = `
                    <li class="service_explane_items flex align_center">
                         <i class="far fa-check-circle "></i><p class="p_text color_dark">${ExplaneArray[index][0]}</p>
                    </li>
                    <li class="service_explane_items flex align_center">
                        <i class="far fa-check-circle "></i><p class="p_text ">${ExplaneArray[index][1]}</p>
                    </li>
                    <li class="service_explane_items flex align_center">
                        <i class="far fa-check-circle "></i><p class="p_text ">${ExplaneArray[index][2]}</p>
                    </li>
                    <li class="service_explane_items flex align_center">
                        <i class="far fa-check-circle "></i><p class="p_text ">${ExplaneArray[index][3]}</p>
                    </li>
    `;

}

serviceViews.forEach(function(serviceView , index){
    serviceView.addEventListener("click", ()=>{

        serviceClickTitle = serviceView.parentElement.querySelector(".service_title");
        serviceExplaneTitle.innerText = serviceClickTitle.innerText;

        singleServicesActive();
        explaneServiceData(index);
    });
    
})
serviceClose.addEventListener("click" , singleServicesActive)
serviceOverlay.addEventListener("click" , singleServicesActive)

function singleServicesActive(){
    singleServices.forEach(function(singleService){
        singleService.classList.toggle("active");
    });
    serviceExplane.classList.toggle("active");
    document.body.classList.toggle("scroll_offall");
    serviceOverlay.classList.toggle("active");
}

// project view js -------------------------
// initialize varialbe 
const liveViews = document.querySelectorAll(".project_live"),
      closeView = document.querySelector(".close_project"),
      viewProjects = document.querySelector(".view_project"),
      projectOverlay = document.querySelector(".project_overlay");
let projectLink = [
        "file:///D:/learning%20page/project/educavo/educavo.html",
        "file:///D:/learning%20page/project/corporx/corporx.html",
        "file:///D:/learning%20page/project/Digilab/digilab.html",
        "file:///D:/learning%20page/project/js%20sort%20project/calculator/calculator.html",
        "file:///D:/learning%20page/project/portfolio2/youtube_project2.html",
        "file:///D:/learning%20page/project/brigate/brigate.html",
        "file:///D:/learning%20page/project/youtube_project1/index.html",
        "file:///D:/learning%20page/project/js%20sort%20project/js%20clock%20project/clock.html",
        "file:///D:/learning%20page/project/psd%20to%20html-%20cuda/cuda.html",
        "https://sajjad126.github.io/snake_game.github.io/index.html"
];

liveViews.forEach(function(liveView , index){
    liveView.addEventListener('click', ()=>{
        projectUpgrade(index);
        projectactive();
       
    });
})

function projectUpgrade(index){
    projectIframe = viewProjects.querySelector(".project_iframe iframe")
    projectIframe.src = projectLink[index];
    
}

closeView.addEventListener('click',  projectactive);
projectOverlay.addEventListener('click',  projectactive);

function projectactive(){
    // viewProject.classList.toggle("active");
    projectOverlay.classList.toggle("active");
    document.body.classList.toggle("scroll_offall");
    viewProjects.classList.toggle("active");
}


// testimonial section js -------
// slick slider jquery -------

$('.responsive').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


// social links and setting active ------
const socialHendeler = document.querySelector(".social_hendeler");
      socialul = document.querySelector(".social_ul"),
      setting = document.querySelector(".setting"),
      settingcolor = document.querySelector(".color_choice");

socialHendeler.addEventListener("click", ()=> {
    socialul.classList.toggle("social_ul_active");
    settingcolor.classList.remove("color_choice_active");
    socialHendeler.classList.toggle("social_hendeler_of");
    setting.classList.remove("social_hendeler_of")
});
setting.addEventListener("click", ()=>{
    settingcolor.classList.toggle("color_choice_active");
    socialul.classList.remove("social_ul_active");
    setting.classList.toggle("social_hendeler_of");
    socialHendeler.classList.remove("social_hendeler_of");
})
// if(window.innerWidth > 650){ socialHendeler.click()};


// select a color 
let mainColor = "--main-alt",
    settingColors = document.querySelectorAll(".color_list"),
    colorArr = [349,240,115,303,550];

settingColors.forEach(function(settingColor , index){
    settingColor.addEventListener("click", ()=>{
        document.documentElement.style.setProperty( mainColor, colorArr[index]);
        console.log(settingColor.value);
    })
})


// ----==== dark theme with localStorage

const themeButton = document.querySelector('.day_night i');
const darkTheme = 'dark_mode'
const iconTheme = 'fa-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('sajjadur-theme');
const selectedIcon = localStorage.getItem('sajjadur-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.parentElement.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('sajjadur-theme', getCurrentTheme())
    localStorage.setItem('sajjadur-icon', getCurrentIcon())
})