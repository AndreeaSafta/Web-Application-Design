
function auth()
{
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;

    if(user=="admin" && pass=="admin")
    {
        window.location.href="paginapor.html";
        alert("Login Successfuly ");

    }
    else
    {
        alert("Invalid Information");
       
    }
}








