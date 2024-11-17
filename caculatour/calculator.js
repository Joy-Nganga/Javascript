document.getElementById('add').onclick = function() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var added = num1 + num2;
    document.getElementById('addition').innerHTML = added;
  };

  document.getElementById('subtract').onclick = function() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var subtracted = num1 - num2;
    document.getElementById('subtraction').innerHTML = subtracted;
  };

  document.getElementById('multiply').onclick = function() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var multiplied = num1 * num2;
    document.getElementById('multiplication').innerHTML = multiplied;
  };

  document.getElementById('divide').onclick = function() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
      var divided = num1 / num2;
      document.getElementById('division').innerHTML = divided;
  };