$.validator.addMethod("regx", function(value, element, regexpr) {
    return regexpr.test(value);
}, "Password must be between 6-12 characters in length, including letters (A-Z, a-z) and numbers (0-9). Without any special symbols (^@()_#*+/\"?!=.{}~`&) and spaces");

$.validator.addMethod("regx_first_name", function(value, element, regexpr) {
    return regexpr.test(value);
}, "name must be more than 2 characters in length, without any special symbols and spaces");

$.validator.addMethod("regx_last_name", function(value, element, regexpr) {
    return regexpr.test(value);
}, "last name must be more than 2 characters in length, without any special symbols and spaces");


$.validator.addMethod("regx_phonecc", function(value, element, regexpr) {
    return regexpr.test(value);
}, "Code must be valid");

$("#bigForm1").validate({

    rules:{

            first_name:{
            required: true,
            regx_first_name: /^(([a-zA-Z]{2,25}\s{0,1}[a-zA-Z]{2,25})|([a-zA-Z]{2,25}))$/,
            minlength: 2,
            maxlength: 64
        },

        last_name:{
            required: true,
            regx_last_name: /^[a-zA-Z]+$/,
            minlength: 2,
            maxlength: 64

        },

        email:{
            required: true,
            email: true,

        },

        phone:{
            required: true,
            number: true,
            minlength: 6,
            maxlength: 25,
        },

        phonecc:{
            required: true,
            maxlength: 5,
            regx_phonecc: /^[0-9+]*$/,
        },

        password:{
            required: true,
            regx: /^(([a-z0-9]*\d+[a-z]+[a-z0-9]*)|([a-z0-9]*[a-z]+\d+[a-z0-9]*))$/i,
            minlength: 6,
            maxlength: 12,
        }
    },

    messages:{

        first_name:{
            required: "The first name field is required",
            minlength: "First name must be at least 6",
            maxlength: "First name can be a maximum of 12",
        },

        last_name:{
            required: "The last name field is required",
            minlength: "Last name must be at least 6",
            maxlength: "Last name can be a maximum of 12",
        },

        email:{
            required: "The email field is required",
            email: "The email must be a valid address",
        },

        phone:{
            required: "The phone number field is required",
            number: "The phone number must be a number",
            minlength: "Telephone number must be at least 6",
            maxlength: "The phone number must be a valid",
        },

        password:{
            required: "The password field is required",
            minlength: "The password must be at least 6 characters",
            maxlength: "The password may not be greater than 12 characters",
        }
    }

});

$("#bigForm2").validate({

    rules:{

        first_name:{
            required: true,
            regx_first_name: /^(([a-zA-Z]{2,25}\s{0,1}[a-zA-Z]{2,25})|([a-zA-Z]{2,25}))$/,
            minlength: 1,
            maxlength: 64
        },

        last_name:{
            required: true,
            regx_last_name: /^[a-zA-Z]+$/,
            minlength: 1,
            maxlength: 64
        },

        email:{
            required: true,
            email: true,

        },

        phone:{
            required: true,
            number: true,
            minlength: 6,
            maxlength: 25,

        },

        phonecc:{
            required: true,
            maxlength: 5,
            regx_phonecc: /^[0-9+]*$/,
        },

        password:{
            required: true,
            regx: /^(([a-z0-9]*\d+[a-z]+[a-z0-9]*)|([a-z0-9]*[a-z]+\d+[a-z0-9]*))$/i,
            minlength: 6,
            maxlength: 12,
        }
    },

     messages:{

        first_name:{
            required: "The first name field is required",
            minlength: "First name must be at least 6",
            maxlength: "First name can be a maximum of 12",
        },

        last_name:{
            required: "The last name field is required",
            minlength: "Last name must be at least 6",
            maxlength: "Last name can be a maximum of 12",
        },

        email:{
            required: "The email field is required",
            email: "The email must be a valid address",
        },

        phone:{
            required: "The phone number field is required",
            number: "The phone number must be a number",
            minlength: "Telephone number must be at least 6",
            maxlength: "The phone number must be a valid",
        },

        password:{
            required: "The password field is required",
            minlength: "The password must be at least 6 characters",
            maxlength: "The password may not be greater than 12 characters",
        }
    }

});

$("#bigForm3").validate({

    rules:{

        first_name:{
            required: true,
            minlength: 1,
            maxlength: 64,
            regx_first_name: /^(([a-zA-Z]{2,25}\s{0,1}[a-zA-Z]{2,25})|([a-zA-Z]{2,25}))$/,
        },

        last_name:{
            required: true,
            minlength: 1,
            maxlength: 64,
            regx_last_name: /^[a-zA-Z]+$/,
        },

        email:{
            required: true,
            email: true,

        },

        phone:{
            required: true,
            number: true,
            minlength: 6,
            maxlength: 25,

        },

        phonecc:{
            required: true,
            maxlength: 5,
            regx_phonecc: /^[0-9+]*$/,
        },

        password:{
            required: true,
            regx: /^(([a-z0-9]*\d+[a-z]+[a-z0-9]*)|([a-z0-9]*[a-z]+\d+[a-z0-9]*))$/i,
            minlength: 6,
            maxlength: 12,
        }
    },

   messages:{

        first_name:{
            required: "The first name field is required",
            minlength: "First name must be at least 6",
            maxlength: "First name can be a maximum of 12",
        },

        last_name:{
            required: "The last name field is required",
            minlength: "Last name must be at least 6",
            maxlength: "Last name can be a maximum of 12",
        },

        email:{
            required: "The email field is required",
            email: "The email must be a valid address",
        },

        phone:{
            required: "The phone number field is required",
            number: "The phone number must be a number",
            minlength: "Telephone number must be at least 6",
            maxlength: "The phone number must be a valid",
        },

        password:{
            required: "The password field is required",
            minlength: "The password must be at least 6 characters",
            maxlength: "The password may not be greater than 12 characters",
        }
    }

});
