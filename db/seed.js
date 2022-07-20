const mongoose = require("./connection");
const UserMarket = require("../models/Market");
const UserLogin = require("../models/User");
const Tours = require("../models/Tours");


console.log(UserMarket)

UserMarket.deleteMany({}).then(() => {
    UserMarket.create([
        {
            name: "Bike",
            description: "Honda R6",
            image: "https://i.pinimg.com/564x/3d/10/a4/3d10a486844a848b08e8a3604a6c1a05.jpg",
            price: 1200,
            transaction: "Sale",
            location: "Antalya",
            category: "Bike",
            year: 2020

        },
        {
            name: "Property",
            description: "Villa is located in Demirtas, 300 meters from the sea. There are sea views from the 2nd and 3rd floors",
            image: "https://www.izzyshomes.com/img/gallery/908/img34935179.jpg",
            price: 250000,
            transaction: "Sale",
            location: "Alanya",
            category: "Villa",
            year: "2019",
            createdAt: new Date(Date.now())
        }
    ]).then(() => {
        console.log("Market Seeded");
    })
})   .catch(err => {
    console.log(err);
})   


Tours.deleteMany({}, (err, data) => {
    Tours.create([
        {   
            name:"Boat Tour",
            description: "What a full program, isn't it? Keep calm! You don't need to worry about lunch. Delicious lunches are prepared for you by our local chefs. Enjoy the special Alanya Blue Cruise while delighting with unlimited soft drinks, beers, and wines.Don't forget your camera to add lovely photos to your family album!Throw your sunglasses, swimsuit, and towel in your bag, and leave the rest to us!",
            image: "String",
            price: "25"
        },
        {
            name:"Water Sports - Paragliding",
            description: "The weather and the nature conditions of the Turkish riviera is ideal for paragliding and we invite you to feel the Mediterranean wind in Alanya, where nature and sun are in perfect harmony! Land on the world-famous Cleopatra beach from a 700metres high flat hill, accompanied by our experienced pilots! Paragliding in Alanya gives you the opportunity to glide like a bird in the skies of Alanya and discover the unique beauties of nature. With our experienced pilots you can take part in this adventure even without training or experience.Each paragliding flight is recorded by a GoPro camera and can be purchased on a DVD, family members or friends can join the expedition as a companion and watch the take-off or landing. The fee is only the transportation costs.",
            image: "String",
            price: "65"
        },
        {
            name:"Jeep Safari - Sapadere Canyon",
            description: "Sapadere Canyon is a hidden paradise in the Taurus Mountains with its natural pools and waterfalls. One of the best ways to get to this paradise is by jeep along the narrow mountain road. You will get to the canyon by passing through the Turkish villages where you can see the traditional village life and silk production in the old way.The canyon is about 750 meters long and 400 meters high and a special hiking trail has been built to take you to the end where you will see the flying waterfall and natural pools",
            image: "String",
            price: "20"
        },
        {
            name:"Turkish Baths- Spa",
            description: "Everyone who visits Turkey should try Hamam at least once! The Turkish Bath is not only a place to relax or bathe but also a part of Turkish culture. It is a prominent feature of Turkish tradition and was built on the model of the Roman baths. Spending a few hours in the hammam is the best way to relax. The best way to start your holiday is always the Turkish Bath, we recommend taking the Turkish Bath Tour at the beginning of your holiday, You will get tanned more properly if you have been peeled before. The hammam is a complex consisting of several sections such as saunas, jacuzzi, baths, and pools, completely covered with marble slabs. The average temperature in the complex is 40-45 degrees. It is best to start your relaxation in the Finnish sauna, followed by the steam sauna to warm up and the Jacuzzi to cool down, before getting a foam massage and peeling on the marble platform from the professional masseurs/masseuses, as a last, you will get an aromatic oil body massage from professional masseurs/masseuses.",
            image: "String",
            price: "15"
        },
    ]).then((data) => {
        console.log(data);
    });
});


UserLogin.deleteMany({}, (err, data) => {
    UserLogin.create([
        {
            username: "admin",
            email: "oktayesenn1@gmail.com",
            password: "123456",
        },
        {
            username: "apollo",
            email: "apoiesenn@gmail.com",
            password: "123456",
        },
    ]).then((data) => {
        console.log(data);
    });
});

