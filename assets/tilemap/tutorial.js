(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("tutorial",
{ "height":10,
 "layers":[
        {
         "data":[10, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 10, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 1, 3, 3, 3, 3, 3, 10, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 16, 17, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 10, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 7, 8, 9, 3, 3, 3, 10, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 19, 20, 21, 3, 2, 5, 6, 3, 13, 14, 15, 3, 3, 3, 10, 3, 3, 3, 3, 3, 3, 3, 16, 17, 3, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 11, 12, 3, 3, 3, 3, 3, 3, 3, 10, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 7, 8, 9, 10, 3, 3, 3, 3, 3, 3, 3, 3, 5, 6, 1, 3, 10, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 13, 14, 15, 3, 3, 3, 3, 3, 3, 3, 3, 3, 11, 12, 2, 3, 10, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 10, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
         "height":10,
         "name":"Tile Layer 1",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":30,
         "x":0,
         "y":0
        }],
 "nextobjectid":1,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.0.3",
 "tileheight":60,
 "tilesets":[
        {
         "columns":6,
         "firstgid":1,
         "image":"tutorial.png",
         "imageheight":240,
         "imagewidth":360,
         "margin":0,
         "name":"tutorial",
         "spacing":0,
         "tilecount":24,
         "tileheight":60,
         "tilewidth":60
        }],
 "tilewidth":60,
 "type":"map",
 "version":1,
 "width":30
});