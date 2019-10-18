function showMenu() {
	let menu = document.getElementById('drop-content');
	if(menu.style.display === 'block'){
		menu.style.display = 'none';
	}else {
		menu.style.display = 'block';
	}
}

let getIcon = document.getElementById('drop-btn');
getIcon.addEventListener('click', showMenu);

let home = document.getElementById('home');
let about = document.getElementById('about');
let hobbies = document.getElementById('hobbies');

let link = document.getElementsByClassName('link-active');
link[0].className = 'link-active active';

let yHome = home.offsetHeight;
let yAbout = about.offsetHeight;
let yHobbies = hobbies.offsetHeight;


function linkActive(list, index, defaultStr = "link-active", newStr = "link-active active") {
	for(let i in list) {
		if(i == index) {
			list[i].className = newStr;
		}else {
			list[i].className = defaultStr;
		}
	}
}

function navChange() {
	if(document.body.scrollTop == 0 || document.documentElement.scrollTop == 0){
		linkActive(link,0)
	}
	if(document.body.scrollTop > yAbout - 100 || document.documentElement.scrollTop > yAbout - 100){
		linkActive(link,1)
	}
	if(document.body.scrollTop > yAbout + yHobbies - 100 || document.documentElement.scrollTop > yAbout + yHobbies - 100){
		linkActive(link,2)
	}
}

window.addEventListener('scroll', navChange);

for(let i = 0; i < 6; i++){
	let unDisplay = document.getElementById('unSeeMore' + i);
	if(unDisplay) {
		unDisplay.addEventListener('click', function() {
			for(let j = 0; j < 6; j++) {
				if(j === i) {
					document.getElementById('see-more' + j).style.display = 'none';
				}
			}
		}) 
	}
}


for(let i= 0; i < 6; i++) {
	let display = document.getElementById('btn-seeMore' + i)
	if(display) {
		display.addEventListener('click', function() {
			for(let j = 0; j < 6; j++) {
				if(j === i) {
					document.getElementById('see-more' + j).style.display = 'block';
				}
			}
		})
	}
}


