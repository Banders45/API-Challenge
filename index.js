// console.log('JavaScript is connected')
const baseURL ='https://api.spacexdata.com/v2/rockets';

const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('table');

function fetchSpaceShips(event){
    event.preventDefault();

    fetch(baseURL)
    .then(result =>{
        return result.json();
    })
    .then(json =>{
        // Display the datad in the table
        console.log(json);
        displayRockets(json);
    })
    .catch(err =>{
       console.error(err); 
    })
    console.log('I should be after the JSON data pops up')
}

function displayRockets(json){
    let rockets = json.forEach(rocket =>{
        let rocketRow = document.createElement('tr');
        let rocketName = document.createElement('td');
        let first_flight = document.createElement('td');
        let country = document.createElement('td');
        let launchCost = document.createElement('td');
        let successratepct = document.createElement('td');
        let rocketImage = document.createElement('td');
        let img = document.createElement('img');

        rocketName.innerText = rocket.name;
        first_flight.innerText = rocket.first_flight;
        country.innerText = rocket.country;
        launchCost.innerText = rocket.cost_per_launch;
        successratepct.innerText = rocket.success_rate_pct;

        img.src = rocket.flickr_images[0];
        img.height = 225;
        img.width = 225;

        rocketImage.appendChild(img);
        rocketRow.appendChild(rocketName);
        rocketRow.appendChild(launchCost);
        rocketRow.appendChild(successratepct);
        rocketRow.appendChild(first_flight);
        rocketRow.appendChild(country);
        rocketRow.appendChild(rocketImage);

        spaceShips.appendChild(rocketRow);
    })
}

searchForm.addEventListener('submit', fetchSpaceShips);