function showMenu() {
	var menu = document.getElementById('drop-content');
	if(menu.style.display === 'block'){
		menu.style.display = 'none';
	}else {
		menu.style.display = 'block';
	}
}
var getIcon = document.getElementById('drop-btn');
getIcon.addEventListener('click', showMenu)