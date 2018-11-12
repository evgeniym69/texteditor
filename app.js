
let bold = document.getElementsByClassName("format-action")[0],
    italic = document.getElementsByClassName("format-action")[1],
    underline = document.getElementsByClassName("format-action")[2],
    textField = document.getElementById("file"),
    synonymBtn = document.getElementsByClassName("format-action")[3],
    txt;


//First way for bold/italic/underline
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

//Another way
//Added three classes in CSS - bold, italic, underline
//BUT HAVE SOME PROBLEMS WITH REALIZATION. I will rezolve this issue later for myself

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

//Colorpicker Jquery
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

//Datamuse synonym


function getSynonym(btn) {
 /* get selected text */
var str;
var doc = textField.innerText;
if (doc.getSelection) {
  str = doc.getSelection().toString().trim();
  } else if (doc.selection && doc.selection.createRange) {
  var range = doc.selection.createRange();
  str = range.text.toString().trim();
  }

if (str != '') {
  /* if text selected, block the button */
  btn.disabled = true;
  /* do request */
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.datamuse.com/words?rel_syn='+escape(str), false);
  xhr.send();
  /* unblock button */
  btn.disabled = false;
  if (xhr.status == 200) {
    var data = JSON.parse(xhr.responseText);
    if (data.length) {
      var popup = document.createElement('div');
      document.body.appendChild(popup);
      popup.id = 'popup-window';

      var popup_html = '';
      for (var i = 0; i < data.length; i++) {
        popup_html += '<div><a href="javascript:" onclick="doReplaceText(this)">'+data[i].word+'</a></div>';
      }
      popup.innerHTML = popup_html;
    }
  }
}
}
function doReplaceText(link) {
/* insert chosen text */
document.execCommand('insertText', false, link.innerHTML);
var popup = document.getElementById("popup-window");
/* remove popup */
popup.parentNode.removeChild(popup);
}

synonymBtn.addEventListener('click', function(){
  getSynonym(this);
})
