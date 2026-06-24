async function getWeather() {
    const API_KEY = 'e30fb89e7e189e8739c3aaedeaeb80b1'; // Apni key yahan daalein
    const city = document.getElementById('cityInput').value.trim();
    
    if (city === "") return;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (response.ok) {
            document.getElementById('resultBox').style.display = 'block';
            document.getElementById('cityName').innerText = data.name;
            document.getElementById('temp').innerText = `Temperature: ${Math.round(data.main.temp)}°C`;
            document.getElementById('condition').innerText = data.weather[0].main;
            
            // Icon set karna
            const iconCode = data.weather[0].icon;
            document.getElementById('weatherIcon').src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        } else {
            alert("City not found!");
        }
    } catch (error) {
        console.error(error);
    }
}