const audioClick = new Audio ('sounds/click.mp3');
const audioHover = new Audio ('sounds/hover.mp3');


$('button').click(function() {
  audioClick.play();
});

//response time too slow to add on hover/mouseenter sound effect//

/*$('button').mouseenter(function() {
  audioHover.play();
});*/
