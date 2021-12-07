const mcc=document.createElement('div')
mcc.className='mousecircle'
const body=document.querySelector('body')
body.append(mcc)

function mouseMove(e){
    console.log(e.clientX, e.clientY)
    const mouseX = e.clientX
    const mouseY = e.clientY
    mcc.style.left = mouseX + 'px'
    mcc.style.top = mouseY + 'px'
    mcc.style.transition='all ease 0.8s'
}
window.addEventListener('mousemove',mouseMove)

const mclose=document.querySelector('.close')
const mmain=document.querySelector('.main')
function closemodal(){
    mmain.classList.add('hide')
}
mclose.addEventListener('click',closemodal)

const button=document.getElementById('button')
const call=document.getElementById('call')
const pattys=document.querySelectorAll('.patty')
const title=document.getElementById('title')
const nav=document.getElementById('nav')
const cuts=document.querySelectorAll('.cut')
const header=document.querySelector('.header')
const main_body=document.querySelector('.main_body')
const footer=document.querySelector('.footer')
const p=document.querySelector('p')
//주간모드 야간모드
function openmodal(){
    if(button.style.float=='right'){
        button.style.float='left'
        button.style.background='brown'
        body.style.background='white'
        clock.style.color='brown'
        title.style.color='indianred'
        mcc.style.backgroundImage=`url('pica.png')`;
        nav.style.background='tan'
        header.style.background='tan'
        header.style.color='brown'
        main_body.style.background='tan'
        main_body.style.color='brown'
        p.style.color='brown'
        footer.style.background='tan'
        mclose.style.background='brown'
        nav.style.boxShadow=`${0} ${5}px ${10}px ${4}px darksalmon`
        mmain.style.background=`rgba(${247}, ${117}, ${94}, ${0.3})`
        for(let patty of pattys){
            patty.style.background='brown'
        }
        for(let cut of cuts){
            cut.style.boxShadow=`${0} ${5}px ${10}px ${4}px darksalmon`
        }
    }else{
        button.style.float='right'
        button.style.background='black'
        body.style.background='black'
        clock.style.color='white'
        title.style.color='white'
        mcc.style.backgroundImage=`url('black_pica.png')`;
        nav.style.background='grey'
        header.style.background='dimgray'
        header.style.color='snow'
        main_body.style.background='dimgray'
        main_body.style.color='snow'
        p.style.color='black'
        footer.style.background='dimgray'
        mclose.style.background='black'
        nav.style.boxShadow=`${0} ${5}px ${10}px ${4}px dimgray`
        mmain.style.background=`rgba(${51}, ${51}, ${51}, ${0.5})`
        for(let patty of pattys){
            patty.style.background='snow'
        }
        for(let cut of cuts){
            cut.style.boxShadow=`${0} ${5}px ${10}px ${4}px dimgray`
        }
    }
    mmain.classList.remove('hide')
}
button.addEventListener('click',openmodal)

const clock=document.querySelector('.clock')

function changeFormat(t){
    //10보다 작으면 t앞에 0을 붙여줌.
    return t<10? `0${t}`:t
}
//현재시각을 가져옴.
function getTime(){
    const time = new Date()//자바스크립트 내장함수 : 현재시각을 불러옴.
    const hours = time.getHours() //중의 시간을 가져옴
    const minutes = time.getMinutes()//분을 가져옴
    const seconds = time.getSeconds()//초를가져옴

    clock.innerHTML =`${changeFormat(hours)}:${changeFormat(minutes)}:${changeFormat(seconds)}`
}

setInterval(getTime,1000)//1초마다 getTime을 호출