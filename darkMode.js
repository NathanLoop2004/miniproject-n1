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

//Card

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