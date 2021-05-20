
const checkYuGiOh = (n)=>{
let int = parseInt(n)
if(int === NaN){
    return console.log(`Invalid parameter: "${n}"`);
}

else{
     arrayOfNum(int);
}
}

const checkFactors = (n)=>{
         if (n % 2 === 0 && n % 3 === 0 & n % 5 === 0){return "yu-gi-oh";}
        else if(n % 2 === 0 && n % 3 === 0) {return "yu-gi";}
        else if(n % 2 === 0 && n % 5 === 0) {return "yu-oh";}
        else if(n % 3 === 0 && n % 5 === 0) {return "gi-oh";}
        else if (n % 2 === 0) {return "yu";}
        else if (n % 3 === 0) {return "gi";}
        else if (n % 5 === 0) {return "oh";}
        else {return n}
    }


const arrayOfNum = (n)=>{
   let arry = [...Array(n).keys()].map(i=> checkFactors(i + 1));
   console.log(arry);
}

checkYuGiOh(30);



const convertFahrToCelsius = (n)=>{
    let int = parseInt(n);
    if(int === NaN){
        let type = typeof int;
        console.log(`${n} is not a number but a ${type}`)
    }
    else{
        let celsius = ((n-32)/1.8).toFixed(5);
        console.log(celsius);
    }
}

convertFahrToCelsius("40");




