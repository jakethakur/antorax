(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("nilbog",
{ "height":26,
 "layers":[
        {
         "data":[102, 57, 66, 46, 7, 102, 131, 21, 21, 31, 82, 102, 102, 33, 102, 102, 102, 102, 102, 102, 102, 102, 15, 35, 45, 5, 102, 57, 76, 76, 7, 131, 91, 1, 1, 101, 31, 102, 102, 13, 72, 102, 102, 3, 102, 102, 82, 92, 35, 45, 35, 45, 92, 57, 46, 36, 7, 81, 1, 1, 11, 111, 41, 102, 62, 23, 102, 102, 62, 13, 102, 102, 102, 102, 15, 35, 45, 5, 102, 57, 66, 36, 7, 81, 11, 1, 1, 61, 102, 102, 102, 102, 102, 102, 102, 23, 48, 49, 102, 102, 35, 45, 35, 45, 102, 57, 56, 76, 7, 51, 121, 1, 11, 61, 102, 3, 102, 102, 8, 9, 102, 102, 102, 102, 102, 102, 15, 35, 45, 5, 102, 57, 36, 46, 7, 62, 51, 71, 71, 41, 102, 13, 102, 102, 18, 19, 102, 102, 102, 102, 102, 102, 35, 45, 35, 45, 102, 57, 46, 66, 7, 102, 102, 102, 102, 102, 92, 23, 102, 102, 102, 102, 102, 102, 3, 102, 102, 102, 15, 5, 15, 5, 102, 57, 76, 36, 7, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 13, 102, 102, 102, 5, 25, 5, 15, 102, 57, 36, 32, 7, 92, 82, 102, 102, 102, 102, 102, 102, 48, 49, 102, 102, 62, 23, 28, 29, 30, 15, 25, 15, 5, 2, 57, 36, 42, 7, 102, 102, 102, 102, 102, 102, 102, 48, 49, 102, 102, 102, 102, 102, 38, 39, 40, 102, 4, 48, 49, 12, 57, 36, 52, 7, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 84, 4, 4, 4, 64, 102, 62, 22, 57, 56, 36, 7, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 34, 4, 64, 102, 102, 102, 102, 102, 102, 102, 57, 36, 36, 7, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 62, 102, 102, 131, 31, 102, 102, 16, 6, 6, 26, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 131, 91, 61, 102, 102, 57, 36, 36, 7, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 131, 21, 91, 11, 61, 102, 102, 57, 36, 32, 7, 102, 82, 102, 102, 102, 77, 47, 47, 87, 48, 49, 102, 102, 102, 131, 91, 1, 1, 1, 61, 102, 102, 57, 36, 42, 7, 82, 102, 102, 102, 77, 37, 36, 46, 117, 47, 87, 102, 102, 131, 91, 1, 11, 1, 111, 41, 102, 102, 57, 46, 52, 7, 102, 102, 102, 102, 57, 36, 56, 36, 36, 66, 7, 102, 102, 81, 11, 1, 1, 1, 61, 82, 102, 102, 57, 56, 46, 7, 102, 102, 92, 102, 57, 46, 76, 36, 36, 36, 7, 102, 102, 51, 121, 1, 1, 111, 41, 102, 102, 102, 57, 36, 36, 7, 102, 102, 102, 102, 107, 27, 36, 56, 46, 17, 97, 102, 48, 49, 51, 71, 71, 41, 102, 102, 131, 102, 57, 36, 36, 7, 102, 102, 102, 48, 49, 107, 67, 67, 67, 97, 102, 102, 102, 102, 102, 102, 102, 102, 102, 131, 91, 102, 57, 36, 36, 7, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 62, 102, 81, 11, 102, 57, 36, 66, 7, 102, 102, 102, 102, 102, 102, 48, 49, 131, 21, 21, 21, 21, 21, 31, 48, 49, 102, 131, 91, 1, 102, 57, 46, 36, 7, 102, 102, 82, 102, 102, 102, 131, 21, 91, 1, 1, 11, 1, 1, 101, 21, 21, 21, 91, 1, 1, 30, 57, 36, 36, 7, 102, 92, 102, 102, 102, 131, 91, 11, 11, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 11, 1, 40, 57, 36, 56, 7, 102, 102, 102, 82, 131, 91, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1],
         "height":26,
         "name":"Tile Layer 1",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":26,
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
         "columns":10,
         "firstgid":1,
         "image":"nilbog.png",
         "imageheight":840,
         "imagewidth":600,
         "margin":0,
         "name":"nilbog",
         "spacing":0,
         "tilecount":140,
         "tileheight":60,
         "tilewidth":60
        }],
 "tilewidth":60,
 "type":"map",
 "version":1,
 "width":26
});