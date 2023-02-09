const theme=document.querySelector('.nav__mode');
const inputSearch=document.querySelector('.hero__input__search');
const inputSelect=document.querySelector('.hero__input__dropdown');
const navBar =document.querySelector('.nav');
const app =document.querySelector('.app');
const section =document.querySelector('.hero__section');
const menu =document.querySelector('.hero__input__dropdown__menu')
const dropdown=document.querySelector('ul svg')
 theme.onclick=function () {
    navBar.classList.toggle('nav--dark');
    inputSearch.classList.toggle('hero__input__search--dark');
    inputSelect.classList.toggle('hero__input__dropdown--dark');
    app.classList.toggle('app--dark');
    menu.classList.toggle('hero__input__dropdown__menu--dark')

};


dropdown.addEventListener(
    'click',()=>{
        menu.classList.toggle('hero__input__dropdown__menu--display')
    }
)
fetch('data.json').then(
    response=>{
  if (response.ok=true) {
   return response.json()

}
    }
).then(data=>{

 for (let i = 0; i < data.length; i++) {

     
   
 }
 console.log(inputSelect);
 console.log(data[0]);
function populateCountry(id) {
    return data[id].name
}
function populateCountryimg(id) {
    return data[id].flags.svg
}
function populatePopulation(id) {
    return data[id].population
}
section.innerHTML=`<div class="hero__section__card">
<img src='${populateCountryimg(84)}'alt='flag' >
<p class="hero__section__card__country">${populateCountry(84)}</p>
<p class="hero__section__card__population"><span class='hero__section__card__population__span'>Population:<span/>${populatePopulation(84)}</p>

</div>
<div class="hero__section__card">
<img src='${populateCountryimg(239)}'alt='flag' >
<p class="hero__section__card__country">${populateCountry(239)}</p>
<p class="hero__section__card__population"><span class='hero__section__card__population__span'>Population:<span/>${populatePopulation(239)}</p>

</div>
<div class="hero__section__card">
<img src='${populateCountryimg(31)}'alt='flag' >
<p class="hero__section__card__country">${populateCountry(31)}</p>
<p class="hero__section__card__population"><span class='hero__section__card__population__span'>Population:<span/>${populatePopulation(31)}</p>

</div>
<div class="hero__section__card">
<img src='${populateCountryimg(103)}'alt='flag' >
<p class="hero__section__card__country">${populateCountry(103)}</p>
<p class="hero__section__card__population"><span class='hero__section__card__population__span'>Population:<span/>${populatePopulation(103)}</p>

</div>
<div class="hero__section__card">
<img src='${populateCountryimg(0)}'alt='flag'>
<p class="hero__section__card__country">${populateCountry(0)}</p>
<p class="hero__section__card__population"><span class='hero__section__card__population__span'>Population:<span/>${populatePopulation(0)}</p>

</div>
<div class="hero__section__card">
<img src='${populateCountryimg(1)}'alt='flag'>
<p class="hero__section__card__country">${populateCountry(1)}</p>
<p class="hero__section__card__population"><span class='hero__section__card__population__span'>Population:<span/>${populatePopulation(1)}</p>

</div>
<div class="hero__section__card">
<img src='${populateCountryimg(2)}'alt='flag'>
<p class="hero__section__card__country">${populateCountry(2)}</p>
<p class="hero__section__card__population"><span class='hero__section__card__population__span'>Population:<span/>${populatePopulation(2)}</p>

</div>
<div class="hero__section__card">
<img src='${populateCountryimg(3)}'alt='flag'>
<p class="hero__section__card__country">${populateCountry(3)}</p>
<p class="hero__section__card__population"><span class='hero__section__card__population__span'>Population:<span/>${populatePopulation(3)}</p>

</div>`

    const card = document.querySelectorAll('.hero__section__card');
    card.forEach(element=>{
        theme.addEventListener('click',()=>{
            element.classList.toggle('hero__section__card--dark')
        }
        )
    })
}).catch(err=>{
    console.error(new Error(err));
});
