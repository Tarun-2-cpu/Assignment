var apiUrl = "https://cl-backend.kryptocoder.com/api/";
console.log("at register.js");

$('.register-member').click(function() {
  //get user input data
  var formAccountNum = $('.account-number input').val();
  var formCardId = $('.card-id input').val();
  var formFirstName = $('.first-name input').val();
  var formLastName = $('.last-name input').val();
  var formEmail = $('.email input').val();
  var formPhoneNumber = $('.phone-number input').val();

  //create json data
  var inputData = JSON.stringify({
    "firstname": formFirstName,
    "lastname": formLastName,
    "email": formEmail,
    "phonenumber": formPhoneNumber,
    "accountnumber": formAccountNum,
    "cardid": formCardId
  });
  console.log(inputData);

  $.ajax({
    type: 'POST',
    url: apiUrl + 'registerMember',
    data: inputData,
    dataType:'json',
    contentType: 'application/json',
    success: function(data) {
      //check data for error
      if (data.error){
        let error = data.error;
        if ((start = data.error.indexOf("Error"))>= 0) {
          let start = data.error.indexOf("Error");
          error = data.error.slice(start);
        }
        console.log("ERROR hai bhai")
        alert(`ERROR HAI BHAI ${error}`);
        return;
      } else {
        console.log("woooo")
        // Redirect to the same page after successful registration
        window.location.href = window.location.href;
      }
    },
    error: function(jqXHR, textStatus, errorThrown) {
      //reload on error
      alert("Error: Try again")
      alert(errorThrown);
      alert(textStatus);
      alert(jqXHR);
    }
  });
});




// //check user input and call server to create dataset

$('.register-partner').click(function() {
  console.log("button clicked");
  //get user input data
  var formName = $('.name input').val();
  var formPartnerId = $('.partner-id input').val();
  var formCardId = $('.card-id input').val();

  //create json data
  var inputData = '{' + '"name" : "' + formName + '", ' + '"partnerid" : "' + formPartnerId + '", ' + '"cardid" : "' + formCardId + '"}';
  alert(inputData);
  console.log(inputData);

  //make ajax call to add the dataset
  $.ajax({
    type: 'POST',
    url: apiUrl + 'registerPartner',
    data: inputData,
    dataType: 'json',
    contentType: 'application/json',
    success: function(data) {
      console.log(data);
      //check data for error
      if (data.error) {
        let error = data.error;
        if((start=data.error.indexOf("Error"))>=0) {
          let start = data.error.indexOf("Error");
          error = data.error.slice(start);
        }
        alert(error);
        return;
      } else {
        window.location.href = window.location.href;
        alert("successfully registered");
      }
    },
    error: function(jqXHR, textStatus, errorThrown) {
      //reload on error
      alert("Error: Try again")
      console.log(errorThrown); 
      console.log(textStatus);
      console.log(jqXHR);
    }
  });
});
