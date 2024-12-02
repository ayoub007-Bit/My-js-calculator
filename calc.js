let input = document.getElementById('inputBox');

let buttons = document.querySelectorAll('button');

let string = "";

let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }else if(e.target.innerHTML =='AC'){
          string = "";
          input.value = string;
        }else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }

        
    })
})


console.log("hello");











/* array.from is for converting element or a lot of elements(called by querySeAll)
 that are in the html and converting them to an array */

 //element.addEventListener(event, function, options);

 //foreach is to loop into all elements of an array  Syntaxe : forEach(function{})

 //.substring() used to extract caracters from a word  Syntax .substring(start index, end index)