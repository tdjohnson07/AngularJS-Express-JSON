var router = require('express').Router();
var archery=[{name: "Mackenzie Brown", origin: "Flint, Texas", sport:"Archery"},
             {name: "Brady Ellison", origin: "Globe, Arizona", sport:"Archery"},
             {name: "Zach Garret", origin: "Wellington, Missouri", sport:"Archery"},
             {name: "Jake Kaminski", origin:"Gainesville, Florida", sport:"Archery"}];
var basketball=[{name: "Kevin Durant", origin: "Washington D.C.", sport: "Basketball"},
                {name:"Jimmy Butler", origin: "Houston, Texas", sport: "Basketball"},
                {name: "Carmelo Anthony", origin: "New York, New York", sport: "Basketball"},
                {name: "Harrison Barnes", origin: "Ames, Iowa", sport: "Basketball"},
                {name: "DeMarcus Cousins", origin:"Mobile, Alabama", sport: "Basketball"},
                {name: "DeMar DeRozan", origin:"Compton, California", sport: "Basketball"},
                {name: "Paul George", origin: "Palmdale, California", sport: "Basketball"},
                {name: "Draymond Green", origin: "Saginaw, Michigan", sport: "Basketball"},
                {name: "Kyrie Irving", origin: "West Orange, New Jersey", sport: "Basketball"},
                {name: "DeAndre Jordan", origin: "Houston, Texas", sport: "Basketball"},
                {name: "Kyle Lowry", origin: "Philladelphia, Pennsylvania", sport: "Basketball"},
                {name: "Klay Thompson", origin: "Los Angeles, California", sport: "Basketball"}];
var taekwondo =[{name: "Jackie Galloway", origin: "Wylie, Texas", sport:"Taekwondo"},
                {name:"Stephen Lambdin", origin: "Rockwall, Texas", sport:"Taekwondo"},
                {name: "Steven Lopez", origin: "Sugar Land, Texas", sport:"Taekwondo"},
                {name: "Paige McPherson", origin: "Abilene, Texas", sport:"Taekwondo"}];
var tableTennis=[{name: "Yijun Feng", origin: "Atlanta, Georgia", sport:"Table Tennis"},
                 {name:"Kanak Jha", origin: "Milpitas, California", sport:"Table Tennis"},
                 {name: "Timothy Wang", origin: "Houston, Texas", sport:"Table Tennis"},
                 {name: "Jennifer Wu", origin: "Fort Lee, New Jersey", sport:"Table Tennis"},
                 {name: "Lily Zhang", origin: "Palo Alto, California", sport:"Table Tennis"},
                 {name: "Jiaqui Zheng", origin: "Fremont, California", sport:"Table Tennis"}];
var pentathlon=[{name: "Isabella Isakesen", origin: "Fayetteville, Arkansas", sport: "Pentathlon"},
                {name: "Margaux Isakesen", origin:"Fayetteville, Arkansas", sport: "Pentathlon"},
                {name: "Nathan Schrimsher", origin: "Rosewell, New Mexico", sport: "Pentathlon"}];
function randomInt(min,max)
{
    return Math.floor(Math.random()*(max-min)+min);
}
router.get('/archery', function(request, response){
  var archer= archery[randomInt(0, archery.length)];
  response.send(archer);
});
router.get('/basketball', function(request, response){
  var bballplayer= basketball[randomInt(0, basketball.length)];
  response.send(bballplayer);
});
router.get('/taekwondo', function(request, response){
  var taek= taekwondo[randomInt(0, taekwondo.length)];
  response.send(taek);
});
router.get('/tableTennis', function(request, response){
  var pingPongPlaya= tableTennis[randomInt(0, tableTennis.length)];
  response.send(pingPongPlaya);
});
router.get('/pentathlon', function(request, response){
  var penta= pentathlon[randomInt(0, pentathlon.length)];
  response.send(penta);
});
module.exports = router;
