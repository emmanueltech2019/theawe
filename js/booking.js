axios.defaults.baseURL='https://theawe1.herokuapp.com/api/v1/'

console.log("hree")
let allBookings = document.getElementById("allBookings")

let page =1
let limit =5
var url_string = window.location.href
var url = new URL(url_string);
if (url.searchParams.get("page") && url.searchParams.get("limit") ) {
    page= url.searchParams.get("page");
    limit= url.searchParams.get("limit");
}


if(allBookings){
    axios({
        url:`/bookings?page=${page}&limit=${limit}`,
        method:"get",
    })
    .then((result) => {
        console.log(result)
        let data = result.data.bookings.results
        let holder =``
        data.map((booked)=>{
            holder+=`<tr>
                <td>${booked.email}</td>
                <td>${booked.phone}</td>
                <td>${booked.service}</td>
                <td>${booked.date_sent.split("T")[0]}/${booked.date.split("T")[1]}</td>
                <td>${booked.date.split("T")[0]}/${booked.date.split("T")[1]}</td>
                <td>${booked.start}</td>
                <td>${booked.finish}</td>
            </tr>`
        })
        allBookings.innerHTML=holder
    }).catch((err) => {
        console.log(err)
    });
}

function logout() {
    localStorage.clear()
    setTimeout(()=>{
        window.location="/"
    },2000)
}