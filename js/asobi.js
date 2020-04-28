
function banToOpenConsole() {
  console.log("算你狠!");
  document.onkeydown = function(e) {
    e.preventDefault();
    if (e.keyCode === 123) {
      alert("看你妈，滚");
    }
    return ;
  }
  document.onmousedown = function(e) {
    e.preventDefault();
    if (e.button === 2) {
      alert("就算你用鼠标也没用，滚");
    }
  }
}