/*function getMockText () {
    return new Promise(function (resolve, reject){
        resolve("A year ago I was in the audience at a gathering of designers in San Francisco. There were four designers on stage, and two of them worked for me. I was there to support them. The topic of design responsibility came up, possibly brought up by one of my designers, I honestly don’t remember the details. What I do remember is that at some point in the discussion I raised my hand and suggested, to this group of designers, that modern design problems were very complex. And we ought to need a license to solve them.");
    })
}

getMockText().then(console.log);*/


var bold = document.getElementsByClassName("format-action")[0],
    italic = document.getElementsByClassName("format-action")[1],
    underline = document.getElementsByClassName("format-action")[2],
    text = document.getElementById("file"),
    clr = document.getElementById('color'),
    txt;

//Easy way
bold.addEventListener('click', function(){
  document.execCommand('bold', false, null);
});


italic.addEventListener('click', function(){
  document.execCommand('italic', false, null);
});

underline.addEventListener('click', function(){
  document.execCommand('underline', false, null);
});

document.addEventListener('keydown', function(){
	if(event.keyCode == 9){
    event.preventDefault();
    document.execCommand('indent', false, null);
	}
		else if(event.keyCode == 17){
      document.execCommand('outdent', false, null);
		}

});

$("#color").spectrum({
    color: '#000000',
    showPalette: true,
    showInput: true,
    showInitial: true,
    showInput: true,
    preferredFormat: "hex",
    showButtons: false,
    change: function(color) {
      color = color.toHexString();
      document.execCommand('foreColor', false, color);
    }
});
//Another way
//Added three classes in CSS - bold, italic, underline

/*var getSelectedText = function() {
    txt = '';
    if (window.getSelection) {
        txt = window.getSelection().toString();
    } else if (document.selection) {
        txt = document.selection.createRange().text;
    }
    return txt;
}

text.addEventListener('mouseup', function(){
    let a = getSelectedText();
    if (a != '') console.log(a);
});


bold.addEventListener('click', function(){
  txt = getSelectedText();
  if (a != '') a.classList.add('bold');
});*/

//Datamuse synonym
