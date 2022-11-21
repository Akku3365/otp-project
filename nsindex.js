let bodyTag = document.body;
document.addEventListener("keydown",(e)=>{
    console.log(e)
})

let inputBoxesTag = document.querySelectorAll('.otp-code')
console.log(inputBoxesTag);

inputBoxesTag.forEach((element, index) => {
    element.addEventListener("keydown",(e)=>{
        if(e.key>=0 && e.key<10){
            inputBoxesTag[index].value ="";
            setTimeout(()=>{
                inputBoxesTag[index+1].focus()
            },0)
        }
        else if(e.key === 'Backspace'){
             inputBoxesTag[index-1].focus();
        }
        console.log(index)
    })
});