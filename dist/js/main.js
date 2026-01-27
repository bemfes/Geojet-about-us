const lineLeftHorizontalPlus = document.querySelector('.abt-pluses-sec__line-x_left_desctop');
const lineRightHorizontalPlus = document.querySelector('.abt-pluses-sec__line-x_right_desctop');
const itemsPlusLeft = document.querySelectorAll('.abt-pluses-sec__item_left');
const itemsPlusRight = document.querySelectorAll('.abt-pluses-sec__item_right');

if (itemsPlusLeft) {
    itemsPlusLeft.forEach(item => {
        item.addEventListener('mouseenter', () => {
            lineLeftHorizontalPlus.classList.add('abt-pluses-sec__line-x_hovered-left')
        })
        item.addEventListener('mouseleave', () => {
            lineLeftHorizontalPlus.classList.remove('abt-pluses-sec__line-x_hovered-left')
        })
    })
}
if (itemsPlusRight) {
    itemsPlusRight.forEach(item => {
        item.addEventListener('mouseenter', () => {
            lineRightHorizontalPlus.classList.add('abt-pluses-sec__line-x_hovered')
        })
        item.addEventListener('mouseleave', () => {
            lineRightHorizontalPlus.classList.remove('abt-pluses-sec__line-x_hovered')
        })
    })
}

const textPrepositions = document.querySelectorAll('.without-prepositions');
if (textPrepositions)
    console.log(2);
    textPrepositions.forEach(text => {

        text.innerHTML = text.innerHTML.replace(/\sк\s|\sи\s|для\s|\sв\s|\sоб\s|\sиз\s|\sдо\s|\sза\s|\sна\s|\sбез\s|\sпри\s|\sот\s|\sс\s|\sо\s|\sпо\s|\sкак\s|\sчтобы\s|\sтак\s|\sа\s|\sне\s|\sпод\s|\sвне\s|\sчто\s|\sгде\s/gi, '$&&nbsp;')
        text.innerHTML = text.innerHTML.replaceAll(' &nbsp;', '&nbsp;')
})

