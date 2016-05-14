var color;

var getURLParameters = function(url) {
    var result = {};
    var searchIndex = url.indexOf("?");

    if (searchIndex == -1 ) return result;
        var sPageURL = url.substring(searchIndex +1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++) {
            var sParameterName = sURLVariables[i].split('=');
            result[sParameterName[0]] = sParameterName[1];
        }
        return result;
};


function colorGen() {
  return '#' + Math.random().toString(16).slice(2, 8);
}

function updateColor() {
  color = colorGen();
  $('#color').html(color);
  $('body').css('background', color);
}


document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        updateColor();
    }
}

document.addEventListener("click", function() {
  updateColor();
});

updateColor();
