// your code here
document.getElementById('formSubmit').addEventListener('submit',function(e) {
	e.preventDefault();
	const formData = new FormData(e.target)
	const name = formData.get('name')
	const year = formData.get('year')
	// const name = document.getElementById('name').value
	// const year = document.getElementById('year').value
	if(name !== "" && year !== ""){
	const formDataDisplay = document.getElementById('formDataDisplay');
	formDataDisplay.innerHTML = `https://localhost:8080/?name=${name}&year=${year}`	
	}
	else if(name !== "" && year === ""){
		const formDataDisplay = document.getElementById('formDataDisplay');
	formDataDisplay.innerHTML = `https://localhost:8080/?name=${name}`
	}
	else if(name === "" && year !== ""){
		const formDataDisplay = document.getElementById('formDataDisplay');
	formDataDisplay.innerHTML = `https://localhost:8080/?year=${year}`
	}
	
})