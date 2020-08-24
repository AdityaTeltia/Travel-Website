document.querySelector('.toggle').addEventListener('click',(e)=>{
    document.querySelector('.toggle').classList.toggle('active')  
    document.querySelector('.navigation').classList.toggle('active')
})

document.querySelector('.play').addEventListener('click',(e)=>{
    document.querySelector('.trailer').classList.toggle('active');
    const video = document.querySelector('video');
    video.currentTime = 0;
    video.pause();
})

document.querySelector('.close').addEventListener('click',(e)=>{
    document.querySelector('.trailer').classList.toggle('active');
    video.currentTime = 0;
    video.pause();
})