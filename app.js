const theme=document.querySelector('.nav__mode');
const inputSearch=document.querySelector('.hero__input__search');
const inputSelect=document.querySelector('.hero__input__dropdown');
const navBar =document.querySelector('.nav');
const app =document.querySelector('.app');
const section =document.querySelector('.hero__section');
const menu =document.querySelector('.hero__input__dropdown__menu')
const dropdown=document.querySelector('ul svg')
const SearchBtn=document.querySelector('.fa-search');
const backBtn= document.querySelector('.hero2__button');
const backBtnImg= document.querySelector('.hero2__button__image');
const main= document.querySelector('.hero');
const main2=document.querySelector('.hero2')
const main2Card=document.querySelector('.hero2__card')
const main2Img =document.querySelector('.hero2__card__img')
const main2Header =document.querySelector('.hero2__card__details__header')
const detailsContainer1=document.querySelectorAll('.hero2__card__details__container--1__text');
const detailsContainer2=document.querySelectorAll('.hero2__card__details__container--2__text');
const nativeName=document.querySelectorAll('.hero2__card__details__container--1__text')[0];
const population=document.querySelectorAll('.hero2__card__details__container--1__text')[1];
const region=document.querySelectorAll('.hero2__card__details__container--1__text')[2];
const subregion=document.querySelectorAll('.hero2__card__details__container--1__text')[3];
const capital=document.querySelectorAll('.hero2__card__details__container--1__text')[4];
const tld=document.querySelectorAll('.hero2__card__details__container--2__text')[0];
const currency=document.querySelectorAll('.hero2__card__details__container--2__text')[1];
const lang=document.querySelectorAll('.hero2__card__details__container--2__text')[2];


//Toggle theme

theme.onclick=function () {
    navBar.classList.toggle('nav--dark');
    inputSearch.classList.toggle('hero__input__search--dark');
    inputSelect.classList.toggle('hero__input__dropdown--dark');
    app.classList.toggle('app--dark');
    menu.classList.toggle('hero__input__dropdown__menu--dark');

    //next page
    main2.classList.toggle('hero2--dark');
    backBtn.classList.toggle('hero2__button--dark');
    backBtnImg.classList.toggle('hero2__button__image--dark')
};
SearchBtn.onclick=function () {
    if (!inputSearch.value=='') {
        main.classList.toggle('display');
        main2.classList.toggle('display')

        
        
    }

  
}
backBtn.onclick=function () {
    main.classList.toggle('display');
  main2.classList.toggle('display')
}
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

  setTimeout(()=>{
  
 
     inputSearch.addEventListener(
        'input', (e)=>{

            
            for (let i = 0; i < data.length; i++) {
       
                const country=data[i].name;

                //filter element
            
            const searchInput=inputSearch.value.trim().slice(0);
          
            if (country.startsWith(searchInput)) {
            
                var search=country.search(searchInput);
            const SEARCH__ON__EACH_INPUT =  country.slice(search-search)
                //console.log(SEARCH__ON__EACH_INPUT);
                //   showdetails(img)
            
                //     }
                searchIndex=data.findIndex(x=>x.name==SEARCH__ON__EACH_INPUT)
                main2Img.setAttribute('src',data[searchIndex].flags.png)
            main2Header.textContent=data[searchIndex].name
            nativeName.innerHTML=`Native name: <span class='hero2__card__details__container--1__text__span'>${data[searchIndex].nativeName}</span>`
            population.innerHTML=`Population: <span class='hero2__card__details__container--1__text__span'>${data[searchIndex].population}</span>`
            region.innerHTML= `Region: <span class='hero2__card__details__container--1__text__span'>${data[searchIndex].region}</span>`
            subregion.innerHTML= `Sub Region: <span class='hero2__card__details__container--1__text__span'>${data[searchIndex].subregion}</span>`
            capital.innerHTML= `Capital: <span class='hero2__card__details__container--1__text__span'>${data[searchIndex].capital}</span>`
            tld.innerHTML= `Top Level Domain: <span class='hero2__card__details__container--2__text__span'>${data[searchIndex].topLevelDomain
            }</span>`
           const languages=data[searchIndex].languages.map(obj=>{
           return obj.name
        });
        const currencies=data[searchIndex].currencies.map(obj=>{
            return obj.name
         });
        lang.innerHTML= `Languages: <span class='hero2__card__details__container--2__text__span'>${languages.join()
        }</span>`
        currency.innerHTML= `Currencies: <span class='hero2__card__details__container--2__text__span'>${currencies.join()
        }</span>`;
        }
    }
        }
    );

    //targeting the keys
inputSearch.addEventListener('keydown',(e)=>{
    
    if (e.key=='Enter') {

        if (inputSearch.value==='') {
            return;
            
        }
        if (inputSearch.value===' ') {
             return;
            
        }
        main.classList.toggle('display');
main2.classList.toggle('display')
    }
})

function populateCountry(id) {
    return data[id].name
}
function populateCountryimg(id) {
    return data[id].flags.svg
}
function populatePopulation(id) {
    return data[id].population
}

//Generate random country
 randomNum=Math.floor(Math.random()*data.length)


section.innerHTML=`<div class="hero__section__card">
<img src='${populateCountryimg(randomNum)}'alt='flag' >
<p class="hero__section__card__country">${populateCountry(randomNum)}</p>
<p class="hero__section__card__population"><span class='hero__section__card__population__span'>Population:<span/>${populatePopulation(randomNum)}</p>

</div>
<div class="hero__section__card">
<img src='${populateCountryimg(Math.floor((randomNum/2)+90))}'alt='flag' >
<p class="hero__section__card__country">${populateCountry(Math.floor((randomNum/2)+90))}</p>
<p class="hero__section__card__population"><span class='hero__section__card__population__span'>Population:<span/>${populatePopulation(Math.floor((randomNum/2)+90))}</p>

</div>
<div class="hero__section__card">
<img src='${populateCountryimg(Math.floor((randomNum/3)+90))}'alt='flag' >
<p class="hero__section__card__country">${populateCountry(Math.floor((randomNum/3)+90))}</p>
<p class="hero__section__card__population"><span class='hero__section__card__population__span'>Population:<span/>${populatePopulation(Math.floor((randomNum/3)+90))}</p>

</div>
<div class="hero__section__card">
<img src='${populateCountryimg(Math.floor((randomNum/4)+90))}'alt='flag' >
<p class="hero__section__card__country">${populateCountry(Math.floor((randomNum/4)+90))}</p>
<p class="hero__section__card__population"><span class='hero__section__card__population__span'>Population:<span/>${populatePopulation(Math.floor((randomNum/4)+90))}</p>

</div>
<div class="hero__section__card">
<img src='${populateCountryimg(Math.floor((randomNum/5)+90))}'alt='flag'>
<p class="hero__section__card__country">${populateCountry(Math.floor((randomNum/5)+90))}</p>
<p class="hero__section__card__population"><span class='hero__section__card__population__span'>Population:<span/>${populatePopulation(Math.floor((randomNum/5)+90))}</p>

</div>
<div class="hero__section__card">
<img src='${populateCountryimg(Math.floor((randomNum/6)+90))}'alt='flag'>
<p class="hero__section__card__country">${populateCountry(Math.floor((randomNum/6)+90))}</p>
<p class="hero__section__card__population"><span class='hero__section__card__population__span'>Population:<span/>${populatePopulation(Math.floor((randomNum/6)+90))}</p>

</div>
<div class="hero__section__card">
<img src='${populateCountryimg(Math.floor((randomNum/7)+90))}'alt='flag'>
<p class="hero__section__card__country">${populateCountry(Math.floor((randomNum/7)+90))}</p>
<p class="hero__section__card__population"><span class='hero__section__card__population__span'>Population:<span/>${populatePopulation(Math.floor((randomNum/7)+90))}</p>

</div>
<div class="hero__section__card">
<img src='${populateCountryimg(Math.floor((randomNum/8)+90))}'alt='flag'>
<p class="hero__section__card__country">${populateCountry(Math.floor((randomNum/8)+90))}</p>
<p class="hero__section__card__population"><span class='hero__section__card__population__span'>Population:<span/>${populatePopulation(Math.floor((randomNum/8)+90))}</p>

</div>`
const heroCards=document.querySelectorAll('.hero__section__card');


//Clicking each card for on the main page event
function populateDetails(id) {
     main2Img.setAttribute('src',data[id].flags.png);
    main2Header.textContent=data[id].name;
    nativeName.innerHTML=`Native name: <span class='hero2__card__details__container--1__text__span'>${data[id].nativeName}</span>`;
    population.innerHTML=`Population: <span class='hero2__card__details__container--1__text__span'>${data[id].population}</span>`;
    region.innerHTML= `Region: <span class='hero2__card__details__container--1__text__span'>${data[id].region}</span>`;
    subregion.innerHTML= `Sub Region: <span class='hero2__card__details__container--1__text__span'>${data[id].subregion}</span>`;
    capital.innerHTML= `Capital: <span class='hero2__card__details__container--1__text__span'>${data[id].capital}</span>`;
    tld.innerHTML= `Top Level Domain: <span class='hero2__card__details__container--2__text__span'>${data[id].topLevelDomain
    }</span>`;
    const languages=data[id].languages.map(obj=>{
        return obj.name
     });
     const currencies=data[id].currencies.map(obj=>{
         return obj.name
      });
     lang.innerHTML= `Languages: <span class='hero2__card__details__container--2__text__span'>${languages.join()
     }</span>`
     currency.innerHTML= `Currencies: <span class='hero2__card__details__container--2__text__span'>${currencies.join()
     }</span>`;
    main.classList.toggle('display');
    main2.classList.toggle('display');
}
heroCards[0].addEventListener('click',()=>{
    populateDetails(randomNum)
});
heroCards[1].addEventListener('click',()=>{
    populateDetails(Math.floor((randomNum/2)+90))
});
heroCards[2].addEventListener('click',()=>{
    populateDetails(Math.floor((randomNum/3)+90))
});
heroCards[3].addEventListener('click',()=>{
    populateDetails(Math.floor((randomNum/4)+90))
});
heroCards[4].addEventListener('click',()=>{
    populateDetails(Math.floor((randomNum/5)+90))
});
heroCards[5].addEventListener('click',()=>{
    populateDetails(Math.floor((randomNum/6)+90))
});
heroCards[6].addEventListener('click',()=>{
    populateDetails(Math.floor((randomNum/7)+90))
});
heroCards[7].addEventListener('click',()=>{
    populateDetails(Math.floor((randomNum/8)+90))
});


heroCards.forEach(element=>{
    theme.addEventListener('click',()=>{
        element.classList.toggle('hero__section__card--dark');
    })
    })
}) 


},1000).catch(err=>{
    console.error(new Error(err));
});
