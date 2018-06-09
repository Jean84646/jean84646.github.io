$(document).ready(function() {
  $("#formOne").submit(function(event) {
      var first = $("#first").val();
      var last = $("#last").val();
      var street= $("#street").val();
      var city = $("#city").val();
      var state = $("#state").val();
      var zip= $("#zip").val();
      var phone = $("#phone").val();
      var userName = first + " " + last;
      var address = street + ", " + city + ", " + state + ", " + zip;

      // $(".first").append(first);
      // $(".last").append(last);
      // $(".street").append(street);
      // $(".city").append(city);
      // $(".state").append(state);
      // $(".zip").append(zip);
      // $(".phone").append(phone);
      //var test = "<li>something</li>";

      //$("ul#contactList").prepend(test);

      var tempString = "<li>" + userName + '<ul class="initial-hide">'+ "<li>" + address + "</li>" + "<li>" + phone + "</li>" + "</ul>"+"</li>";
      $("ul#contactList").prepend(tempString);

      // $("ul#contactList").prepend("<li>" + userName + "</li>");
      // $("ul#contactList").prepend("<li>" + address + "</li>");
      // $("ul#contactList").prepend("<li>" + phone + "</li>");
      $("ul#contactList").children("li").first().click(function() {
        $(this).find("ul.initial-hide").toggle();
      });

      event.preventDefault();
    });

    $("button#test").click(function() {
      $("h1").text("Address Books");
    });
});
