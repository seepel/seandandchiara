$(document).ready(function() {
    Parse.initialize("AyL0pv1iOzEeFf4aJ5OLmB2fwicb8zAAxC9N4jWe", "04eZxKuOVZ6H8E2l7k1QwPaLJBucpsKxAKbsZxqA");
});

function login() {
    var username = document.forms[0].elements['username'].value;
    var password = document.forms[0].elements['password'].value;
    if(username == '' || password == '') {
        return false;
    }
   Parse.User.logIn(username, password).then(function(user) {
       console.log(user);
       window.location.replace('/responses');
       return false;
   }, function(error) {
       console.log(error);
       return false;
   }); 
    return false;
}
