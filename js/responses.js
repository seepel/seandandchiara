$(document).ready(function() {
    Parse.initialize("AyL0pv1iOzEeFf4aJ5OLmB2fwicb8zAAxC9N4jWe", "04eZxKuOVZ6H8E2l7k1QwPaLJBucpsKxAKbsZxqA");
    if(!Parse.User.current()) {
        console.log("No user");
        window.location.replace('/login');
        return;
    }
    var query = new Parse.Query('RSVP');
    query.ascending('name');
    var th = '<th style="text-align: left; padding: 2px;">'
    var tr = '<tr style="border: solid 1px black;">'
    var td = '<td style="border: solid 1px black; padding: 2px;">'
    query.find().then(function(rsvps) {
        var table = '<table style="width: 100%; border-collapse: collapse; border: solid 1px black">' + tr + th  + 'Name</th>' + th + 'Email</th>' + th + 'Number of Attendees</th></tr>'
       for(var i = 0; i != rsvps.length; i++) {
           var rsvp = rsvps[i];
           table += '<tr>' + td + rsvp.get('name') + '</td>' + td + rsvp.get('email') + '</td>' + td + rsvp.get('attendees') + '</td></tr>';
       } 
        
        table += '</table>';
        $('body').html(table);
    });
});