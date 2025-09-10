const cl = console.log;

const setZero = (num) =>{
	if(num < 10){
		return "0" + num;
	}else{
		return num;
	}
}
//targetDate = 15 March 2026
const countDownHandler = () => {
	let countDown = document.getElementById("countDown");
	
	let currentTime = new Date()
	
	let targetDate = new Date("March 15, 2026 23:59:59");
	
	let diff = targetDate - currentTime;
	
	let days = diff / (1000*60*60*24);
	let daysInt = Math.floor(days);
	
	let hr = (diff % (1000*60*60*24)) / (1000*60*60);
	let hrInt = Math.floor(hr);
	
	let min = (diff % (1000*60*60)) / (1000*60);
	let minInt = Math.floor(min);
	
	let sec = (diff % (1000*60)) / 1000;
	let secInt = Math.floor(sec);
	
	countDown.innerHTML = `${setZero(daysInt)} Days ${setZero(hrInt)} Hours ${setZero(minInt)} Min ${setZero(secInt)} sec`
	
	if(diff < 0){
		clearInterval()
		countDown.innerHTML = "countDown is Over"
	}
}

countDownHandler()

setInterval(countDownHandler,1000)