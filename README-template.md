# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)



### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./images/project%20screenshot.png)


### Links

- Solution URL: [Add solution URL here](https://github.com/TheOnlyAbdull/web3-FP)
- Live Site URL: [Add live site URL here](https://theonlyabdull.github.io/web3-FP/)

### Built with

- HTML-5
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS
- Mobile-first workflow


### What I learned

I learnt new methods of creating responsive navigation, with  HTML, CSS and JAVASCRIPT, and page layout


```html
<div class="menu">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
</div>
```
```css
 .menu.active .line:nth-child(2){
        opacity: 0;
    }
    .menu.active .line:nth-child(1){
        transform: translateY(9px) rotate(45deg);
    }
    .menu.active .line:nth-child(3){
        transform: translateY(-9px) rotate(-45deg);
    }
```
```js
links.forEach(n => n.addEventListener('click', () => {
    nav.classList.remove('active');
    menuBar.classList.remove('active');
}));
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.



### Useful resources

- [Example resource 1](https://http://responsivegridsystem.com/) - This helped me for the page responsiveness. I really liked this pattern and will use it going forward.


## Author

- Website - [Add your name here](https://theonlyabdull.github.io/Abdull/)
- Frontend Mentor - [@TheOnlyAbdull](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@TheOnlyAbdull](https://www.twitter.com/TheOnlyAbdull)



