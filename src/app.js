const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    // Create players using for loop
    // Type your code here
    for (let i = 0; i < players.length; i++) {
        detailedPlayers.push({
            'name': players[i],
            'strength':100,
            'image':"./images/super-" + (i + 1) + ".png",
            'type':"hero|villain"
        });
    }    
    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    return Math.ceil(Math.random() * 100 + 1);
}

const buildPlayers = (players, type) => {
    let fragment = '';
    fragment = '<divclass="player"><imgsrc="./images/super-1.png"alt=""><divclass="name">Hero</div><divclass="strength">100</div></div>';

    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
    // var title = "Building Players";
    // var container = $("<div>");
    // container.addClass("player");
    // var img = $("<img>");
    // img.src("${players[i].image}");

    // var div = $("<div>");
    // div.addClass("name");
    // var h4 = $("<h4>");
    // h4.text("${players[i].name}");
    // div.append(h4);
    // container.append(div);

    // div = $("<div>");
    // div.addClass("name");
    // h4 = $("<h4>");
    // h4.text("${players[i].strength}");
    // div.append(h4);

    // container.append(div);
    // container.append(img);

    // $("body").append(container);
    
    //return container;
    return fragment
}
// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}