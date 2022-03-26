axios.defaults.baseURL='https://theawe1.herokuapp.com/api/v1'
$(function(){
    var dtToday = new Date();
    
    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();
    
    var maxDate = year + '-' + month + '-' + day;

    // or instead:
    // var maxDate = dtToday.toISOString().substr(0, 10);

    // alert(maxDate);
    $('#date').attr('min', maxDate);
});


function openModal() {
    $('#bookmodal').modal('show')
}

let bookformsu = document.getElementById("bookformsu")

bookformsu.addEventListener("submit",(e)=>{
    e.preventDefault()
    let fullname = bookformsu.fullname.value
    let email = bookformsu.email.value
    let phone = bookformsu.phone.value
    let start = bookformsu.start.value
    let finish = bookformsu.finish.value
    let date = bookformsu.date.value
    let employee = bookformsu.employee.value
    let service = bookformsu.service.value
    const data = {
        fullname,email,phone,start,finish,date,employee,service
    }
    axios({
        url:'/booknow',
        data,
        method:"post"
    })
    .then((result) => {
        console.log(result)
        Swal.fire({
            icon:"success",
            title:"You have successfully booked an appointment",
            text:"we will contact you via email or phone if any changes occurs"
        })
        .then(()=>{
            location.reload()
        })
    }).catch((err) => {
        console.log(err)
        Swal.fire({
            icon:"error",
            title:"an error occured please try again later",
            text:"Sorry about that try again"
        })
        // .then(()=>{
        //     location.reload()
        // })
    });
})