$(document).ready(function(){
    $("#create-ac").validate({
        rules:{
            fname:{
                required:true,
                minlength:4
        },
            sname:{
                required:true,
                minlength:4
            },
            mobmail:{
                email:true,
                required:true
            },
            password:{
                minlength:6,
                maxlength:8,
                useLowercase:true,
                required:true
            },
            repass:{
                required:true,
                equalTo:"#password"
            },
            day:{
                required:true
            },
            month:{
                required:true
            },
            year:{
                required:true
            },
            gen:{
                required:true
            }
        },
        messages:{
            fname:{
                required:" Name Ezhuthanam Mr 🙆‍♀️",
                minlength:" 4 Aksharenkilum veenam..!!"
            },
            sname:{
                required:" Surname Evade mooe.?? 😬",
                minlength:"4 Aksharenkilum veenam..!!"
            },
            mobmail:{
                required:" Ninakk email illea..? 🙆‍♀️",
                email:" Velachil edukkaruth ketto..🤨"
            },
            password:{
                required:" Password vekkanam Mr 🔒",
                minlength:" 6 ennamenkilum veenam..!! 🔓",
                maxlength:" 8 Ennam is enough ✋"
            },
            repass:{
                equalTo:" Password thettipoyee..👎"
            },
            day:{
                required:" Nee Janichille Monusee 😖",
                
            },
            month:{
                required:" Nee Janichille Monusee 😖",
                
            },
            year:{
                required:" Nee Janichille Mooone 😖",
                
            },
            gen:{
                required:" Please choose an option..🙄",
                
            }
        }
    
    })
})