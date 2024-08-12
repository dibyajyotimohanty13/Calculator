let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let body=document.querySelectorAll('body');
let theme= document.querySelector('.theme');
let sun=document.querySelector('.icon-sun');
let moon=document.querySelector('.icon-moon');
theme.onclick = function(){
    document.body.classList.toggle("light");
}
let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string = string + e.target.innerHTML;
            input.value = string;
        }
        
    })
})
