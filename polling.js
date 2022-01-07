var button1 = document.getElementById("a"),
  count1 = 0;
button1.onclick = function() {
  count1 += 1;
  button1.innerHTML = "clock on it " + count1;
};



var button2 = document.getElementById("b"),
  count2 = 0;
button2.onclick = function() {
  count2 += 1;
  button2.innerHTML = "some more" + count2;
};
