/* Створіть 10 тегів А в яких заданий class="menu-item", target, href зі занченнями index1.html, index2.html і т.д */
window.onload = () => {
    let bodyEl = document.querySelector('body')
    for (i=0; i<10; i++){
        let newElement = document.createElement('a')
        newElement.innerHTML = "Hello" + '<br>';
        newElement.className = 'menu-item';
        newElement.setAttribute('href',`index.${i}html` )
        newElement.setAttribute('target','_blank' )

    

/*     2) Задайте створеним елементам за допомогою js правило display:inline-block, падінг 20рх а також змініть колір на червоний */
newElement.style.padding = '20px';
newElement.style.color = 'red'
newElement.style.display = 'inline-block'
document.body.appendChild(newElement)
    }
/*     Задайте 3 елементу в списку додатковий класс active */
    let thirdElement = document.querySelector("a:nth-child(3)");
    thirdElement.classList.add('active');
/*     4) Створіть в html форму з інпутами в яких є атрибут дісейблед, за допомогою Js виберіть всі інпути на сторінці і видаліть в них атрибут disabled та задайте бекграунд зеленого кольору, а колір шрифта зробіть білим */
let inputEl = document.querySelectorAll('input')
for (i=0; i< inputEl.length; i++){
    inputEl[i].removeAttribute('disabled')
inputEl[i].style.backgroundColor = 'green'
inputEl[i].style.color = 'white'
}
}