'use strict';

let ratingStars=document.querySelectorAll('.star');
let submitButton=document.querySelector('.rating-button');
let count=0;
let closeDiv=document.querySelector('.close');
let divContainer=document.querySelector('#container');
let divResult=document.querySelector('.container-result');
let result=document.querySelector('.result');

//ADD STAR
const addStar=(el,index)=>{
	
	//img element to add
	let image=document.createElement('img');
	image.setAttribute('src','images/icon-star.svg');

	//check if the image already exist
	if(el.innerHTML==='<img src="images/icon-star.svg">'){
		el.innerHTML=index+1;
	}
	else {
		el.textContent='';
		el.appendChild(image);
	}
}

//COUNT STARS
const starCount=()=>{
	let countValue;
	for(let i=0;i<ratingStars.length;i++){
		
		if(ratingStars[i].innerText===''){
			count++;
		}
	};
	countValue=count;
	count=0;
	return countValue;
}

//SHOW RESULTS
const showResult=()=>{
	result.textContent=starCount();
}

//close thank you div, reset 
const closeMesage=()=>{
	divResult.classList.remove('show');
	starReset();
	divContainer.classList.remove('hide-first');
}

//RESET STARS
const starReset=()=>{
	for(let i=0;i<ratingStars.length;i++){
		ratingStars[i].innerHTML=i+1;
	}
}

//CLOSE MESSAGE
closeDiv.onclick=()=>{
	closeMesage();
}

//SUBMIT STARS
submitButton.onclick=()=>{
	//if number of stars is 0
	if(starCount() ===0){}
	else{
		divContainer.classList.add('hide-first');
		divResult.classList.add('show');
		showResult();
	}
}

//click event for every star-div
ratingStars.forEach((element, index)=>{
	
	element.onclick=()=>{
		addStar(element, index);
	}
});
