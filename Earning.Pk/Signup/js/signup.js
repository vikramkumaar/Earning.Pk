async function create()
{
	var name = document.getElementById('full-name').value;
	var paswrd = document.getElementById('Password').value;
	var phn = document.getElementById('phone').value;
	var qu = document.getElementById('question').value;
	var ans = document.getElementById('answer').value;
	var accType = document.getElementById('accountType').value;
	var accNumber = document.getElementById('accountType').value;
	var gmail = document.getElementById('your_email').value;
	var p = document.getElementById('plan').value;

	if (!name || !paswrd || !phn || !qu || !ans || !accType || !accNumber || !gmail || !p ) 
	{
		alert("Please complete the form.")
	}
	else{
		const data = 
		{
	    "fullName": name,
	    "password": paswrd,
	    "phone": phn,
	    "question": qu,
	    "answer": ans,
	    "accountType": accType,
	    "accountNumber": accNumber,
	    "plan": p,
	    "email": gmail,
	    "approved": 0,
	    "verificationCode": "IvRkZyjTITCUsjblOysz5o3Ml"
	     };

            const res = await fetch('https://guarded-badlands-51738.herokuapp.com/user',)
            fetch('https://guarded-badlands-51738.herokuapp.com/user', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
                })
                const output = await res.json();
                console.log(output);    
          alert("your account is create");
          window.location.href="https://vikramkumaar.github.io/Earning.Pk/Earning.Pk/login/login.html";
       }
}
