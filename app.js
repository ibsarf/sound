let sounds=["applause", "boo","gasp", "tada", "victory", "wrong"];

for (let i = 0; i < sounds.length; i++) {
    let btn=document.createElement("button");
    btn.classList.add("btn");
    btn.innerText=sounds[i];
    // console.log(btn);

    let div=document.querySelector("#buttons");
    // console.log(item);
    div.appendChild(btn);

    btn.addEventListener("click",()=>{
        stopMusic();

        document.getElementById(sounds[i]).play();
    })
}
function stopMusic(){
    for (let i = 0; i < sounds.length; i++) {
        let song=document.getElementById(sounds[i])

        song.pause();
        song.currentTime=0; //tekrar geriye gelip aynı tuşa basınca baştan başlaması için
    }
};

            // other example 


// sounds.forEach(sound=>{
//     let btn=document.createElement("button");
//     btn.classList.add("btn");
//     btn.innerText=sound;
//     // console.log(btn);

//     btn.addEventListener("click",()=>{
        
//        stopMusic(); 

//        document.getElementById(sound).play()
//     });

//     let div=document.querySelector("#buttons");
//     div.appendChild(btn);
// });
// function stopMusic(){
//     sounds.forEach((sound)=>{
//         let song=document.getElementById(sound);
//         song.pause();
//         song.currentTime=0;
//     })
// }
