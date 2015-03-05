$(document).ready(function() {
    Parse.initialize("AyL0pv1iOzEeFf4aJ5OLmB2fwicb8zAAxC9N4jWe", "04eZxKuOVZ6H8E2l7k1QwPaLJBucpsKxAKbsZxqA");
});

function rsvp() {
    var name = document.forms[0].elements['name'].value;
    var email = document.forms[0].elements['email'].value;
    var count = parseInt(document.forms[0].elements['count'].value);
    var rsvp_field = null;
    if(name == null || name == '') {
        rsvp_field = '#rsvp_name';
    } else if(email == null || email == '') {
        rsvp_field = '#rsvp_email';
    }
    
    if(rsvp_field != null) {
        $rsvp_field = $(rsvp_field);
        $rsvp_field.animate({ hou: 1 }, {
            duration: 250,
            easing: 'swing',
            step: function (now, tw) {
                var scale = 1 + .1 * now;
                if(now >= .5) {
                    scale = 1 + .05 - .1 * (now -.5);
                }
                $rsvp_field.css({transform: 'scale(' + scale + ', ' + scale + ')' });
            },
            complete: function () {
                $rsvp_field.animate({ hou: 0});
                $rsvp_field.focus();
            }
        });

        return false;
    }
    var rsvp = new Parse.Object("RSVP");
    rsvp.set("name", name);
    rsvp.set("email", email);
    rsvp.set("attendees", count);
    rsvp.save().then(function(rsvp) {
    }, function(error) {
        console.log(error);
    });
    $("input").remove();
    $(".select-style").remove();
    $(".submit").remove();
    var thankyou = '<div style="margin-left: auto; margin-right: auto; text-align: center;">Thank you for your response</div>'; 
    if(window.location.href.indexOf('it') >= 1) {
       thankyou = '<div style="margin-left: auto; margin-right: auto; text-align: center;">Grazie della conferma! </div>';  
    } 
     
    $(".white_input").html(thankyou);
    return false;
}

