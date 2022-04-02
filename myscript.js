
function Click() {

    // Collects the users input from the text box
    var txtOutput = document.getElementById("txtOutput");
    // Turns output into a useable string
    var name = txtOutput.value;
   
    // Sends input away to be turned into Hex values
    var hexaName = (toHex(name));

    //Checks how many full hex value can fit into it
    var hexlength = strlength(hexaName);
    
    // Sends the Hex value and length away to be checked
    var hexa = intchecker(hexlength,hexaName);
    
    // Slices up the hex value into colours
    var colours = hexslicer(hexlength, hexa);
    
    
    // Gets table from HTMl page
   	var myTableID = document.getElementById("mytable");
    var WidthOfTable = myTableID.clientWidth;
    myTableID.style.height = (WidthOfTable/442)*150+"px";
   	
    // Deletes and previous entries in the table
    myTableID.deleteRow(-1);
    
    // Places colours in the table
    AddNewRow = myTableID.insertRow(0);
    var coloursForTable = colours;
    coloursForTable.reverse()
	for (i in coloursForTable) {
		
    	var NewCell = AddNewRow.insertCell(0);
        NewCell.style.backgroundColor = coloursForTable[i];
    }
	
    document.getElementById("ColoursForShow").innerHTML = colours.reverse()

    
}

// Turns Strings into hexadecimal values
function toHex(str) {
  var result = '';
  for (var i = 0; i < str.length; i++) {
      result += str.charCodeAt(i).toString(16);
  }
  return result;
}

//Finds out how many full hexadecimals fit into it
function strlength(str){
    return str.length / 6;
}

// If there are a whole number of hex values the hex value is returned, if not it is filled with 0's until it is
function intchecker(howmanysixes,hexsequence){
  var isInteger = howmanysixes % 1 === 0;

  if (isInteger == false) {
    while (isInteger == false) {
      hexsequence = hexsequence + '0';
      isInteger = howmanysixes % 1 === 0;
      howmanysixes = strlength(hexsequence) - 1;
    }
    return hexsequence;
  } else {
    return hexsequence;
  }
}

// 'Cuts' the hex every six values to get a colour and stores it in an array 
function hexslicer(howmanysixes,hexsequence){      
  var start = 0;
  var end = 6;
  var colours = new Array();

  while (howmanysixes > 0) {
      var colour = '#' + hexsequence.slice(start, end);
      colours.push(colour);
      start = start + 6;
      end = end + 6;
      howmanysixes = howmanysixes - 1;
      
  }
  return colours
}









