# Frontend Mentor - REST Countries API with color theme switcher

![Design preview for the REST Countries API with color theme switcher coding challenge](./design/desktop-preview.jpg)

# Frontend Mentor -  REST Countries API solution

This is a solution to the [REST Countries API](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca/hub). 

## Table of contents

  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)




### The challenge

- Users should be able to:
- See all countries from the API on the homepage
- Search for a country using an input field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode (optional)





### Links
- Live Site URL: [(https://serene-elf-634e03.netlify.app/)]


### Built with

- Semantic HTML5 markup
- CSS custom properties
-API
- Flexbox
- CSS Grid
- Json



### What I learned

CSS grid layouts
Fetch API



```css
.section{
            display: grid;
            grid-template-columns:   auto auto auto auto  ;
            width: 90%;
            min-height: 70vh;
           row-gap: 2rem;
           margin: 3rem 0 0 3rem;
           column-gap: 1rem;
}
```
```js
fetch('data.json').then(
    response=>{
  if (response.ok=true) {
   return response.json()

}
    }
)
}
```


### Continued development

React Js


## Author

- Website - [Joseph Kingsley](https://serene-elf-634e03.netlify.app/)
- Frontend Mentor - [@kvnqsley](https://www.frontendmentor.io/profile/kvnqsley)
- Twitter - [@zaddytomany](https://www.twitter.com/zaddytomany)
*
