"use strict";

var friends = [
    {"name": "Ray", "favoriteColor": "#FF0000", "backgroundColor": "#800000"},
    {"name": "Oscar", "favoriteColor": "#FFA500", "backgroundColor": "#805500"},
    {"name": "Gwen", "favoriteColor": "#00A000", "backgroundColor": "#003000"},
    {"name": "Bob", "favoriteColor": "#0080FF", "backgroundColor": "#000040"},
    {"name": "Marie", "favoriteColor": "#FF00FF", "backgroundColor": "#800080"}
];

//
// Randomize the contents of an array
//
function randomize(array) {
    var index;
    var randomIndex;
    var temp;
    for (index = array.length - 1; index > 0; index--) {
        randomIndex = Math.floor(Math.random() * (index + 1));
        temp = array[index];
        array[index] = array[randomIndex];
        array[randomIndex] = temp;
    }
}

var friendIndex = 0;
randomize(friends);
var $currentFriend;
_.each(friends, function(friend) {
    $currentFriend = $("#friend" + friendIndex);
    $currentFriend.text(friends[friendIndex].name);
    $currentFriend.css({
        "color": friends[friendIndex].favoriteColor,
        "background": friends[friendIndex].backgroundColor
    });
    friendIndex++;
});
