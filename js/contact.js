const contactFormM = document.getElementById("contactForm")
if(contactFormM){
    contactFormM.addEventListener("submit",(e)=>{
        e.preventDefault()
        let fullname = contactFormM.fullname.value
        let email = contactFormM.email.value
        let message = contactFormM.message.value
        let data ={
            fullname,email,message
        }
    
        axios({
            method:"post",
            url:`https://theawe1.herokuapp.com/api/v1/contact`,
            data
        })
        .then((result) => {
            Swal.fire({
                icon:"success",
                title:"successfully submitted",
                text:"We will contact you shortly via email"
            })
        }).catch((err) => {
            Swal.fire({
                icon:"error",
                title:"error occured ",
                text:"Please try again"
            })
        });
    })

}