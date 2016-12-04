function handleClick(){
var userName = document.getElementById('user').value
var password = document.getElementById('password').value
//console.log(userName,password);

if(userName === "rahim" && password ==="555"){
	console.log('correct');
	window.location.replace('file:///C:/workspace/sampleweb/app/template/cart.html')
}
else {
	console.log('incorrect');
}
}

