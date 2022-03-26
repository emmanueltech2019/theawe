axios.defaults.baseURL='https://theawe1.herokuapp.com/api/v1/admin'



let loginForm = document.getElementById("login")

if (loginForm) {
    loginForm.addEventListener("submit",(e)=>{
        e.preventDefault()
        let email = loginForm.email.value
        let password = loginForm.password.value
        let data={email,password}
        axios({
            url:`signin`,
            data,
            method:"post",
        })
        .then((result) => {
            localStorage.setItem("theaweadtoken",result.data.token)
            Swal.fire({
                icon:"success",
                title:"Login Successful"
            })
            .then(()=>{
                window.location="/admin-dashboard.html"
            })
        }).catch((err) => {
            Swal.fire({
                icon:"error",
                title:"Login error check details & try again"
            })
        });
    })
}