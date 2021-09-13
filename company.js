document.getElementById("calculation").innerHTML = "the licenses cost is ";

const Lform = document.getElementById('Lcalculate');
var numLicenses = 0;
var totalPrice = 0;

Lform.addEventListener('submit', (event) => {
    var x = document.getElementById("type");
    var package = x.options[x.selectedIndex].value;

    numLicenses = Lform.elements['licenses'].value;
    var packageType = 0;

    if (package == "Google Starter") {
        packageType = 6;
    } else if (package == "Google Standard") {
        packageType = 12;
    }

    if(numLicenses>=20){
      var totalCost = (packageType * numLicenses * 12)-(((packageType * numLicenses * 12)/100)*5);  
    }else{
      totalCost = (packageType * numLicenses * 12);
    }

    totalPrice = totalCost;
    document.getElementById("calculation").innerHTML = "the licenses cost is " + totalCost + "$ per year";
    document.getElementById("text2").innerHTML = "the total cost is: "+totalPrice+"$ per year";
    event.preventDefault();
});


  function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the output text
    var text = document.getElementById("text");
    var configCost=177;
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      //configCost = 177;
      text.style.display = "block";
      text.innerText="The configuration cost is "+configCost+"$";
      totalPrice=totalPrice+configCost;
      document.getElementById("text2").innerHTML = "the total cost is: "+totalPrice+"$ per year";
    } else {
      text.style.display = "none";
      totalPrice=totalPrice-configCost;
      document.getElementById("text2").innerHTML = "the total cost is: "+totalPrice+"$ per year";
      configCost=0;
    }
  }


  function myFunction1() {
    // Get the checkbox
    var checkBox1 = document.getElementById("myCheck1");
    // Get the output text
    var text1 = document.getElementById("text1");
    var Migration=numLicenses * 5.9;
    // If the checkbox is checked, display the output text
    if (checkBox1.checked == true){
      text1.style.display = "block";
      //Migration = numLicenses * 5.9;
      totalPrice = totalPrice + Migration;
      text1.innerHTML="The migration cost is "+Migration+"$";
      document.getElementById("text2").innerHTML = "the total cost is: "+totalPrice+"$ per year";
    } else {
      text1.style.display = "none";
      totalPrice = totalPrice-Migration;
      Migration=0;
      document.getElementById("text2").innerHTML = "the total cost is: "+totalPrice+"$ per year";
    }
  }

