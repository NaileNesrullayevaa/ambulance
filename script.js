const person=document.querySelector(".person")
const ambulance=document.querySelector(".ambulance")
const sound=new Audio('ambulance-6399.mp3')
person.addEventListener('click',function(){
    this.classList.add("active")
    setTimeout(()=>{
        person.classList.add("active2")
    },1000)
    setTimeout(()=>{
        ambulance.classList.add("active2")
        sound.play()
    },2000)
    setTimeout(()=>{
        person.classList.add("active3")
    },3000)
    setTimeout(()=>{
        ambulance.classList.add("active3")
    },3000)
  

})
