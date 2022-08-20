var carObject = {
    vehicle : "Car",
    imageUrl : "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    farePerkilo : 3, 
    capacity : 5 ,
    description : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam veniam autem adipisci ipsum consequuntur voluptate? Quae, corrupti. Ipsum eos fugiat exercitationem consequuntur quasi!"
}
var busObject = {
    vehicle : "Bus",
    imageUrl : "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    farePerkilo : 5, 
    capacity : 50 ,
    description : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam veniam autem adipisci ipsum consequuntur voluptate? Quae, corrupti. Ipsum eos fugiat exercitationem consequuntur quasi!"
}
var bikeObject = {
    vehicle : "Bike",
    imageUrl : "https://images.unsplash.com/photo-1541625602330-2277a4c46182?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmlrZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
    farePerkilo : 2, 
    capacity : 2,
    description : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam veniam autem adipisci ipsum consequuntur voluptate? Quae, corrupti. Ipsum eos fugiat exercitationem consequuntur quasi!"
}

var boatObject = {
    vehicle : "Boat",
    imageUrl : "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Ym9hdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
    farePerkilo : 6, 
    capacity : 200,
    description : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam veniam autem adipisci ipsum consequuntur voluptate? Quae, corrupti. Ipsum eos fugiat exercitationem consequuntur quasi!"
}

const serviceArray = [carObject,busObject,bikeObject,boatObject];
function displayServices(service){
    const mainSection = document.getElementById('main-section');
    const stringifieObj = JSON.stringify(service);
    const div = document.createElement('div');

    div.innerHTML = `

            <div class="card mb-3 mx-auto" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
            <img src="${service.imageUrl}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">Transport Mood ${service.vehicle}</h5>
                <p class="card-text">${service.description}</p>
                <p class="card-text"><small class="text-muted">Fare per kilo ${service.farePerkilo}</small> <small class="text-muted">Fare per kilo ${service.capacity}</small></p>
            </div>
            </div>
        </div>
        </div> 
    `
    mainSection.appendChild(div)
}

displayServices(serviceArray);