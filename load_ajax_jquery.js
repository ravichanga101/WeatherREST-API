$(document).ready(function () {
  $("#js-new-quote").click(function () {
    const API_KEY = "0ee877f124ac6b19a8a5f8f76287b0a1";

    const city = $("#id_city_name").val(); // get the value from inputbox

    const URL =
      "http://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=" +
      API_KEY;

    $.ajax({
      url: URL,
      type: "get",
      dataType: "json",
      beforeSend: function () {
        $("#js-spinner").toggleClass("hidden"); // show spinner
      },
      success: function (response) {
        //alert(response.main.temp);
        displayQuote(response);
        $("#js-new-quote").disabled = true;
        $("#js-spinner").toggleClass("hidden"); // hide spinner
      },
    });
  });
});

function displayQuote(server_data) {
  const temp = server_data.main.temp - 273.15; // convert to celsius
  $("#js-quote-text").text(temp.toFixed(2)); // fixed two digit after decimal point
}
/*
setInterval(() => {
  $("#js-new-quote").trigger("click");
}, 4000);
*/
