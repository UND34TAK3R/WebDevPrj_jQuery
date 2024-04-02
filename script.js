$(document).ready(function () {
    $(window).scroll(function () {
    if (this.scrollY > 20) {
    $('.navbar').addClass("sticky");
    $('#background').css({
       'display': 'block',
       'display': 'none' 
    });
    
    } 
    else {
    $('.navbar').removeClass("sticky");
    $('#background').css({
        'display': 'block',
     });
    }
    if (this.scrollY > 500) {
        $('.scroll-up-btn').addClass("show");
} else {
$('.scroll-up-btn').removeClass("show");
}
});

$("#background").on("click", function(){
    var currentimg = $('#background').attr('src');
if (currentimg === 'moon-stars-svgrepo-com (1).svg'){
    $('#background').attr('src', 'light-mode-svgrepo-com.svg')
    $('body').addClass('dark-mode').removeClass('light-mode'); 
}
else{
    $('#background').attr('src', 'moon-stars-svgrepo-com (1).svg')
    $('body').addClass('light-mode').removeClass('dark-mode');
}
});

$(document).on('submit','#form', function(e) {
    e.preventDefault(); // Prevent form submission

    // Validate form fields
    var isValid = true;

    // Check Username field
    var name = $('#name').val();
    if (name.trim() === '') {
        $('#errorName').text('Please enter your username').show();
        $('.contact .right form .name').css({
            'border': 'solid red 2px'
        });
        isValid = false;
    } else if (name.length < 3 || name.length > 10) {
        $('#errorName').text('Length of username must be between 3 and 10').show();
        $('.contact .right form .name').css({
            'border': 'solid red 2px'
        });
        isValid = false;
    } else {
        $('#errorName').hide();
        $('.contact .right form .name').css({
            'border': '1px solid #ccc'
        });
    }

    // Check Email field
    var email = $('.email').val();
    var emailRegex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    if (email.trim() === '') {
        $('#errorEmail').text('Please enter your email').show();
        $('.contact .right form .email').css({
            'border': 'solid red 2px'
        });
        isValid = false;
    } else if (!emailRegex.test(email)) {
        $('#errorEmail').text(' Please enter a valid email address').show();
        $('.contact .right form .email').css({
            'border': 'solid red 2px'
        });
        isValid = false;
    } else {
        $('#errorEmail').hide();
        $('.contact .right form .email').css({
            'border': '1px solid #ccc'
        });
    }

    // Check Surname field
    var surname = $('#surname').val();
    if (surname.trim() === '') {
        $('#errorSurname').text('Please enter your Surname').show();
        $('.contact .right form .surname').css({
            'border': 'solid red 2px'
        });
        isValid = false;
    } else {
        $('#errorSurname').hide();
        $('.contact .right form .surname').css({
            'border': '1px solid #ccc'
        });
    }

    // Check TextBox field
    var textbox = $('#textbox').val();
    if (textbox.trim() === '') {
        $('#errorTextBox').text('Please enter a message').show();
        $('.contact .right form .textarea textarea').css({
            'border': 'solid red 2px'
        });
        isValid = false;
    } else {
        $('#errorTextBox').hide();
        $('.contact .right form .textarea textarea').css({
            'border': '1px solid #ccc'
        });
    }


    // Check if all fields are valid
    if (isValid) {
        const Name = name;
        const Email = email;
        const Surname = surname;
        const textBox =textbox;
        const text = `
        Is user data valid ?
            Name:${Name}
            Email:${Email}
            Surname:${Surname}
        `;
        const fileinfo =`
        Name:${Name}
        Email:${Email}
        Surname:${Surname}
        Message:${textBox}
        `;
        if(confirm(text)) {
        const blob = new Blob([fileinfo], {type: "text/plain"});
        const url = URL.createObjectURL(blob);
        const a = $("<a>")
            .attr("href", url)
            .attr("download", "user_data.txt")
            .appendTo("body");
        a[0].click();
        URL.revokeObjectURL(url);
        a.remove();
        }
    } 
       

});

var options = {
    strings: ["LaSalle College Student Developer", "Front-end Developer", "programmer in HTML,JAVA,CSS,JQUERY"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1500,
    loop: true
};

var typed = new Typed(".text-3 span", options);
var typer = new Typed(".about .right .text span", options);

$('.owl-carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPauser: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: false
        }
    }
}); 

$(".scroll-up-btn").on("click", function(){
    var y = $(window).scrollTop();
    var x = y +1;
    $(window).scrollTop(y - x); 
});
});


   
