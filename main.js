document.getElementsByTagName("p")[0].style.color = "blue";
document.getElementsByTagName("h1")[0].style.fontSize = "50pt";
document.getElementsByTagName("p")[0].textContent = "Lorem ipsum dolor amet viral meh selfies drinking vinegar, intelligentsia poke flannel twee paleo enamel pin cray. Banjo celiac crucifix, kickstarter la croix air plant jianbing hashtag vinyl hell of man bun selvage schlitz banh mi. Tacos hella raclette quinoa blog, williamsburg adaptogen tbh. Hexagon af stumptown lumbersexual synth gentrify quinoa enamel pin celiac master cleanse. Truffaut typewriter shoreditch, semiotics iceland mixtape taxidermy umami distillery austin hashtag. Food truck synth wayfarers, street art banh mi actually authentic. Bitters tousled tattooed vegan neutra pug hell of fixie chia unicorn letterpress.";
document.getElementById("item-13").style.opacity = "0.5";
document.getElementById("item-3").textContent = "say, \"Hi!";
document.getElementsByTagName("img")[0].src = "http://www.tioxic.com/wp-content/uploads/trex_4.jpg";
document.getElementsByTagName("img")[0].height = "300";

// Add a new image of your choice.
const e = document.createElement("img");
e.src = "https://images.unsplash.com/photo-1603589138334-be34651248b0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1680&q=80";
document.body.appendChild(e);
e.height = "300";

// Add a new item to ul
const e16 = document.createElement("li");
e16.className = "item";
e16.id = "item-16";
document.getElementsByTagName("ul")[0].appendChild(e16);
e16.textContent = "Won't get fooled again.";