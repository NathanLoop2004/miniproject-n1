let buttonDM = document.querySelector('#buttonDM');

buttonDM.addEventListener("click", switchDarkMode);

function switchDarkMode(){
    document.documentElement.classList.toggle("dark")};




//------------------------------------------------------------------------------------------------------------------------------------------


//Boton Contact

const arrayButtonContact = [
    "Contact Me",
]

let buttonContactXD = document.getElementById("buttonContact");

buttonContactXD.innerHTML = "";

buttonContactXD.innerHTML += `

        <span class="text-white dark:text-[#0D1117] font-sans w-[70%] text-center mx-auto font-bold text-[14px] transition-discrete ease-in-out delay-700 duration-[1s]">${arrayButtonContact[0]}</span>
 <button class="bg-[#83aa71] h-8 w-8 rounded-[360px] m-0.5 cursor-pointer mr-1 flex justify-center items-center hover:bg-[#8eeb63]" >

    <svg class="dark:text-white text-[#0D1117] transition ease-in-out delay-500 duration-[1s] " xmlns="http://www.w3.org/2000/svg" 
    width="70" 
    height="70" 
    viewBox="0 0 24 24" 
    style="fill: currentColor;transform: ;msFilter:;">
    <path d="M12.006 2.007a9.927 9.927 0 0 0-7.071 2.922c-3.898 3.899-3.898 10.243 0 14.142 1.885 1.885 4.396 2.923 7.071 2.923s5.187-1.038 7.071-2.923c3.898-3.898 3.898-10.242 0-14.142a9.928 9.928 0 0 0-7.071-2.922zm5.657 15.649c-1.507 1.507-3.517 2.337-5.657 2.337s-4.15-.83-5.657-2.337c-3.118-3.119-3.118-8.194 0-11.313 1.507-1.507 3.516-2.336 5.657-2.336s4.15.829 5.657 2.336c3.118 3.119 3.118 8.194 0 11.313z">

    </path><path d="m11.467 11.125-3.214 3.214 1.414 1.414 3.214-3.214 2.125 2.124V9H9.343z"></path></svg>

    <a href=""></a>
</button>

    `;





//////////////////////////////////////////////////////////////////////////////////////////////////////////////














//Nav Bar
const arrayNav = [
    "About Me",
    "Skills",
    "Projects",
]

let barraDeNavegacion = document.getElementById("navbar");

barraDeNavegacion.innerHTML = "";



barraDeNavegacion.innerHTML += 

`


<section class="border-rose-500  w-100 hidden lg:flex flex-row" id="navbar">

<nav class="">    
<ul class="decoration-none flex justify-center  gap-15 mt-9 text-white dark:text-[#0D1117] font-bold font-weight-500 transition ease-in-out delay-500 duration-[1s] ">
<li class="transition ease-in-out hover:underline delay-500 duration-[1s] underline-offset-4"><a href="">${arrayNav[0]}</a></li>
<li class="transition ease-in-out hover:underline delay-500 duration-[1s] underline-offset-4"><a href="">${arrayNav[1]}</a></li>
<li class="transition ease-in-out hover:underline delay-500 duration-[1s] underline-offset-4"><a href="">${arrayNav[2]}</a></li>
</ul>
</nav>
</section>
`;



////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Presentacion
const arrayPresentacion = [
    " I'm ",
    "Nathanael Borja",
    "Front End",
    "Developer",
]

let presentacion = document.getElementById("presentacion");

presentacion.innerHTML = "";



presentacion.innerHTML += 
` <div class="bg-[]"><p class="text-white dark:text-[#0D1117] text-[40px] mt-[100px] font-bold transition ease-in-out delay-500 duration-[1s]">${arrayPresentacion[0]}<span class="text-[#A4FF7A] dark:text-[#034ec7d7] dark:font-bold mt-[120px] font-bold transition ease-in-out delay-500 duration-[1s]">${arrayPresentacion[1]}</span></p>
        </div>
        <div class="flex flex-row  gap-2"> 
          <p class="text-white dark:text-[#0D1117] text-[50px] border-white dark:border-[#0D1117] dark:font-bold font-bold border-2  px-4  rounded-[25px] transition ease-in-out delay-500 duration-[1s]">${arrayPresentacion[2]}<p class="text-white dark:text-[#0D1117] text-[50px] font-bold transition ease-in-out delay-500 duration-[1s]">${arrayPresentacion[3]}</p></p>
        </div>`


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Card  1

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//LetterChart

const arrayChartLetters = [
    "  Client Review From Australia ",
]

let chartLetters = document.getElementById("chartLetters");

chartLetters.innerHTML = "";

chartLetters.innerHTML = `
<h1 class="text-wrap font-bold text-white text-[24px]"> ${arrayChartLetters[0]}</h1>
`;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//StarChart

const arrayStart = [
    "./Photo/icons8-estrella-48.png",
    "./Photo/icons8-estrella-48.png",
    "./Photo/icons8-estrella-48.png",
    "./Photo/icons8-estrella-48.png",
]

let star = document.getElementById("chartStars")

star.innerHTML = "";

for (let index = 0; index < 4; index++) {
    star.innerHTML += `
     <img class="w-7 h-7" src="${arrayStart[index]}">
    `
    
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//LetterChartMini

const arrayChartLettersMini = [
    "Worked for a major Australian startup from Canberra, working on an ecommerce application",
]

let captionLettersMini = document.getElementById("chartMiniText")

captionLettersMini.innerHTML = "";

captionLettersMini.innerHTML = `
 <p>${arrayChartLettersMini[0]}</p>
`


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Card 2

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Section 2
const arraySection2 = [
    "./Photo/klipartz.com.png",
    "MY PROJECTS",
]

let section2 = document.getElementById("section2");

section2.innerHTML = "";

section2.innerHTML += `
 <img src="${arraySection2[0]}" class="h-[91%] drop-shadow-3xl dark:drop-shadow-3xld transition ease-in-out delay-500 duration-[1s]">
            <button class="bg-[#A4FF7A] hover:bg-[#6bbd68] dark:bg-[#034ec7] hover:dark:bg-[#038fc7] dark:text-white dark:border-2 px-4 py-1 bottom-8 lg:left-48 left-60 rounded-[30px] font-bold absolute border-2 cursor-pointer transition ease-in-out delay-500 duration-[1s]">${arraySection2[1]}</button>
            
`


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Card 3

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Card 3 Letters Part My Expertise

const arrayCard3Letters = [
    "MY EXPERTISE",
]

let card3Array = document.getElementById("card3Letters")

card3Array.innerHTML = "";

card3Array.innerHTML = `
<h1 class="font-semibold text-white text-[23px]">${arrayCard3Letters[0]}</h1>
`


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Card 3 mini Text

const arrayCard3miniText = [
"BACKEND",
"98%",
]

let Card3miniText = document.getElementById("Card3miniText")

Card3miniText.innerHTML = "";

Card3miniText.innerHTML = `
 <p class="text-white">${arrayCard3miniText[0]}</p>
                        <div class="border border-white w-38 h-0 mt-1 ml-1 "></div>
                        <div class="bg-purple-900 border-white border-2 mt-1 left-50 rounded-full h-3 w-3 absolute"></div>
                        <p class="text-white font-semibold ml-7">${arrayCard3miniText[1]}</p>`

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Card 3 mini Text Part 2

const arrayCard3miniText2 = [
"CMS",
"90%",
]

let Card3miniText2 = document.getElementById("Card3miniText2")



Card3miniText2.innerHTML = "";

Card3miniText2.innerHTML = `
<p class="text-white">${arrayCard3miniText2[0]}</p>
                     <div class="border border-white w-38 h-0 mt-1 ml-1 "></div>
                     <div class="bg-cyan-500 border-white border-2 mt-1 left-35 rounded-full h-3 w-3 absolute"></div>
                     <p class="text-white font-semibold ml-14">${arrayCard3miniText2[1]}</p>`
                     
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Card 3 mini Text Part 3

const arrayCard3miniText3 = [
"FRONTEND",
"91%",
]

let Card3miniText3 = document.getElementById("Card3miniText3")

Card3miniText3.innerHTML = "";

Card3miniText3.innerHTML = `
 <p class="text-white">${arrayCard3miniText3[0]}</p>
                    <div class="border border-white w-38 h-0 mt-1 ml-1 "></div>
                    <div class="bg-green-700 border-white border-2 mt-1 left-45 rounded-full h-3 w-3 absolute"></div>
                    <p class="text-white font-semibold ml-2">${arrayCard3miniText3[1]}</p>
`
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//WHO AM I?

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Section 1

const arrayPhoto = [
    "./Photo/MisionPhoto.jpeg",
    "./Photo/PersonalPhoto.jpeg",
]


let sectionphoto = document.getElementById("photoSection")

sectionphoto.innerHTML = "";

sectionphoto.innerHTML += `
    
    <!-- Foto 1 -->
    <section>
     <img src="${arrayPhoto[0]}" class="h-40 w-30 rounded-[10px] rotate-[-10deg] ml-30 border-white  drop-shadow-5xl dark:drop-shadow-5xld transition ease-in-out delay-500 duration-[1s]">
    </section>


    <!-- Foto 2 -->
        <section>
       <img src="${arrayPhoto[1]}" class="h-60 w-40 rounded-[10px] rotate-[10deg] border-white  drop-shadow-6xl dark:drop-shadow-6xld transition ease-in-out delay-500 duration-[1s]">
        </section>
`

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Section 2 WHO AM I?

const arrayH1Section = [
    "WHO AM I ?",
]

let sectionH1 = document.getElementById("h1section")

sectionH1.innerHTML = "";

sectionH1.innerHTML += `
<h1 class="text-[#A4FF7A] dark:text-[#034ec7d7]  mx-auto text-center text-[70px] mt-[-30px] font-semibold transition ease-in-out delay-500 duration-[1s]">${arrayH1Section[0]}</h1>
`


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Section 2 Text

const arrayParagraphText = [
    "I am a Front-End website developer specialized in ReactJs Plus, I also know some Wordpress front-end and development with Elementor  and WooComerce.",
    "Programming is my passion, that´s the reasson I am working at the time of my academic carrer.",
    "Additonally, I line to play Pc games and reed story-type books in my leisume time which is kinda fun and relaxing.",
]

let paragraphText = document.getElementById("paragraphText")

paragraphText.innerHTML = "";

paragraphText.innerHTML += `
<p>${arrayParagraphText[0]}
            </p>
            <br>
            <p>${arrayParagraphText[1]}</p>
            <br>
            <p>${arrayParagraphText[2]}</p>
`



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Section 2 button

const arrayButtonSection = [
"SHOW MY PROJECTS",
]

let buttonArray = document.getElementById("sectionbutton")

buttonArray.innerHTML = "";

buttonArray.innerHTML += `
 <a href="">${arrayButtonSection}</a>
`
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Section 3

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const arraySection3 = [
    "./Photo/EvaniPhoto.jpeg",
]

let section3 = document.getElementById("photoSection3")

section3.innerHTML = "";

section3.innerHTML += `
 <img src="${arraySection3[0]}" class="h-60 w-40 rounded-[10px] rotate-[5deg] border-white  drop-shadow-4xl dark:drop-shadow-4xld transition ease-in-out delay-500 duration-[1s]">
`

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//MY SKILLS

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//Tittle


const arrayTittle = [
    "MY SKILLS",
]

let tittle = document.getElementById("skills1")

tittle.innerHTML = "";

tittle.innerHTML += `
<h1 class="text-[#A4FF7A] dark:text-[#034ec7] mx-auto text-center text-[70px] mt-[-30px] font-semibold">${arrayTittle[0]}</h1>
`



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//THE WORKS CLOSEST TO MY HEART

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Section 1

const Array2Section = [
"THE WORKS CLOSEST TO MY HEART",
"SHOW MY PROJECTS",
]

let section_2 = document.getElementById("section-2")

section_2.innerHTML = "";

section_2.innerHTML += `
<div class="  h-[40%] w-[50%] ml-25 ">
      <h1 class="text-[45px] text-white font-semibold text-center mt-[-120px] lg:mt-0 dark:text-[#034ec7] transition ease-in-out delay-500 duration-[1s]">${Array2Section[0]}</h1>
    </div>
    
    <button class="bg-[#A4FF7A] hover:bg-[#6bbd68] dark:bg-[#034ec7] cursor-pointer hover:dark:bg-[#038fc7] dark:text-white px-35 bottom-18 left-17 py-4 rounded-[30px] font-bold absolute z-1 text-nowrap transition ease-in-out delay-500 duration-[1s]">${Array2Section[1]}</button>
`

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Section 2

const section3Array = [
    "./img-3/istockphoto-1205230318-612x612.jpg",
    "Plumbing Company",
]

let section_3 = document.getElementById("section-3")

section_3.innerHTML = "";

section_3.innerHTML += 
`
 <div class="w-[97%] h-[97%]  rounded-[20px] relative">
      <img src="${section3Array[0]}" alt="img-3" class="w-250 h-[100%] rounded-[20px]">
      <h1 class="text-[23px] absolute bottom-22 left-12 text-white text-warp h-10 w-10 font-bold hidden lg:block">${section3Array[1]}</h1>
      </div>
`

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Section 3

const Section4Array = [
    "./img-3/vertical-pictures-d8n9viqi1q14gwj2.jpg",
]

let section_4 = document.getElementById("section-4")

section_4.innerHTML = "";

section_4.innerHTML += `
<div class="w-[80%] h-[97%]  rounded-[20px] ml-5">
        <img src="${Section4Array[0]}" class="w-250 h-[100%] rounded-[20px]">
      </div>
`

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Section 4

const Section5Array = [
    "./img-3/photo-1526512340740-9217d0159da9.jpeg"
]

let section_5 = document.getElementById("section-5")

section_5.innerHTML = "";

section_5.innerHTML += 	`
<div class="w-[80%] h-[97%]  rounded-[20px]">
     <img src="${Section5Array[0]}" class="w-250 h-[100%] rounded-[20px]">
      </div>
`



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Les´t Have A Chat



const arrayChat = [
    "LET´S HAVE A CHAT",
]

let chat = document.getElementById("haveChat")

chat.innerHTML = "";

chat.innerHTML +=  `
<h1 class="font-bold text-[50px]">${arrayChat[0]}</h1>
`