const nxt = document.getElementById('next')
const prev = document.getElementById('previus')
let px= 0;
const  imgs = [
{'url':'./imgs/chrono.jpg', 'id':'1'},
{'url':'./imgs/inuyasha.jpg', 'id':'2'},
{'url':'./imgs/tenjhotenge.jpg','id':'3'},
{'url':'./imgs/tenchi.jpg','id':'4'},
{'url':'./imgs/ippo.png','id':'5'}
]

const loadImages = (url,id) =>{
    const imgContainer = document.querySelector('.slides')
    const slide = document.createElement('img')
    slide.classList.add('imagens')
    slide.setAttribute('id', id)
    slide.src = url
    imgContainer.appendChild(slide)

}
imgs.forEach((slide) => loadImages(slide.url,slide.id))
const attPosition = () =>{
    for(let i = 1; i < 6; i++){
        document.getElementById(`${i}`).style.left = px +'px'
    }
}
const changePosition = (event) =>{
    if (px > 0){
        px = -3200
    }else if (px < -3200){
        px = 0
    }else if (event.target.id == 'next'){
        px -= 800
    }else if (event.target.id == 'previus'){
        px +=  800
    } 
    attPosition()
}
nxt.addEventListener('click',changePosition)
prev.addEventListener('click',changePosition)

const nav = document.querySelectorAll('.navbuttons')
const changePositionNav = (event) =>{
    if(event.target.id == '1'){
        px = 0
    }else if (event.target.id =='2'){
        px = -800
    }else if (event.target.id =='3'){
        px = -1600
    }else if (event.target.id =='4'){
        px = -2400
    }else if (event.target.id =='5'){
        px = -3200
    }
  attPosition()  
}
nav.forEach((elemento)=>elemento.addEventListener('click',changePositionNav))