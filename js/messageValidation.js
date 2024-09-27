$(document).ready(function() {
    $("#messageValidation").validate({
        rules:{
            userName:{
                required:true,
            },
            userNumber:{
                required:true,
                minlength:10,
                maxlength:10,
            },
            userMessage:{
                required:true,
                maxlength:100
            }
        },
        messages:{
            userName:{
                required:"Please Enter Your Name",
            },
            userNumber:{
                required:"Please Enter Your Number",
                minlength:"Enter atleast 10 Digits",
                maxlength:"Maximum 10 Digits"
            },
            userMessage:{
                required:"Please Enter your Message",
            }
        },

        errorPlacement:function(error,element){
           error.css({
            "color":"#FF4500",
            "font-weight":"bold",
            // "margin-bottom":"10px"
           })
           $("#notSuccess input, textarea ").css("margin-bottom","0")
            error.insertAfter(element)
           },
        submitHandler: function(form,e) {
            console.log("form inside");
            e.preventDefault();
            // form.submit();
            var formData = {
                name:$("#userName").val(),
                contactNo:$("#userNumber").val(),
                message:$("#userMessage").val(),   
            }

            $.ajax({
                type:"POST",
                url:"http://localhost:8000/enquiry",
                data: formData,
                dataType:"json",
                success:function(response){
                    if (response.ok) {
                        $("#notSuccess").hide();
                        $("#success").show();
                    } else {
                        $("#notSuccess").show();
                        $("#success").hide();
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(errorThrown);
                }
            })
        }
       });
})
    






