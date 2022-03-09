let Glow = ()=>{
    
    let glow = document.getElementById("glow")
    glow.style.textShadow= " 0px -1px 2px	#85a5c2, 0px -3px 6px	#85a5c2,0px -6px 12px	#85a5c2,0px -10px 20px	#85a5c2,0px -15px 30px	#85a5c2,0px -21px 42px	#85a5c2"
}
setTimeout (Glow ,900)


//change img//

let imgArray = ["./imgaes/1.png" ,"./imgaes/2.png" ,"./imgaes/3.png","./imgaes/10.png","./imgaes/11.png","./imgaes/13.png","./imgaes/14.png"]

setInterval(()=>{

    let img = document.getElementById("img")
    let random = Math.floor(Math.random()* 7)
    
    img.src = imgArray[random] 
        
},800)


const Toggel = ()=>{

    let mobilemenu = document.querySelector(".mobilemenu")
   


    if (mobilemenu.style.visibility === "hidden") {
        mobilemenu.style.visibility = "visible"
        mobilemenu.style.transform = " scale(1)"
    }
    else {
        mobilemenu.style.visibility = "hidden"
        mobilemenu.style.transform = " scale(0.3)"


    }



}