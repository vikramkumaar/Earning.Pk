function validate()
{
	var name = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	if (name=="admin" && password==1234) 
	{
		alert("Successfully login");
		window.location.href="https://vikramkumaar.github.io/Earning.Pk/Earning.Pk/Admin/admin.html";
	}
	else if (name=="user" && password==12345)
	{
		alert("Successfully login");
		window.location.href="https://vikramkumaar.github.io/Earning.Pk/Earning.Pk/profile/UserProfile.html";
	}
	else
	{
		alert("Incorrect UserID or Password");
	}
}