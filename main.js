const heroTitle = document.querySelector(".hero__title");

function splitWord(container, text) {
  const splitText = text.split(" ").map((word, i) => {
    return `<span class="o-hidden hero__word-container"><span class="hero__word">${word}&nbsp;</span></span>`;
  });

  container.innerHTML = splitText.join(" ");
  console.log(container);
  // Added offset class in order ot check if words are wrapped
  let x = 0;

  document.querySelectorAll(".hero__word").forEach((el, i) => {
    x = el;
    if (x === el) el.classList.add(`offsettop-${el.offsetTop}`);
  });
}

splitWord(heroTitle, heroTitle.textContent);

/* -------Get New line ------------ */ 
// const heroWords = [...document.querySelectorAll('.hero__word')];
// const offsetTopHeroWords = heroWords.map((el) => el.className.split(' ')[1]);
// const removeDuplicates = (arr) => arr.filter((item, i) => arr.indexOf(item) === i);
// const y = removeDuplicates(offsetTopHeroWords);

// y.forEach((el,i)=> {
  //   gsap.to(`.${el}`, {
    //     delay: 0.3,
    //     y: 0,
    //     ease: Power4.easeOut,
    //     duration: 0.5,
    //     stagger: 0.1,
    //   });
    // })
/* -------Get New line ------------ */ 

gsap.to('.hero__word', {
  delay: 0.3,
  y: 0,
  ease: Power4.easeOut,
  duration: 0.5,
  stagger: 0.03,
});
gsap.to('.hero__word', {
  delay: 0.3,
  opacity: 1,
  ease: Power4.easeOut,
  duration: 5,
  stagger: 0.03,
});
