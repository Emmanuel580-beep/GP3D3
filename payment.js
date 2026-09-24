function startPayment(){

    const student = JSON.parse(localStorage.getItem("studentData"));

    const popup = new PaystackPop();

    popup.newTransaction({

        key: "pk_live_b69e08dd54160f93f477d75491917d2986cd4e14",

        email: student.email,

        amount: 500000,

        currency: "NGN",

        ref: "GP3D-" + Date.now(),

        channels: [
            "card",
            "bank",
            "bank_transfer",
            "ussd",
            "qr"
        ],

        metadata: {

            custom_fields: [

                {

                    display_name: "Student Name",

                    variable_name: "student_name",

                    value: student.name

                },

                {

                    display_name: "Course",

                    variable_name: "course",

                    value: student.course

                }

            ]

        },

        onSuccess: function(transaction){

            localStorage.setItem("certificatePaid","true");

            alert("Payment Successful!");

            window.location = "certificate.html";

        },

        onCancel: function(){

            alert("Payment Cancelled.");

        }

    });

}