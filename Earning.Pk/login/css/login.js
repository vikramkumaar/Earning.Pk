async function callIt()
{
            let nam = document.getElementById('un').value;
            let pass = document.getElementById('pw').value;
            //alert('Heloo');
           const result =   await fetch('https://guarded-badlands-51738.herokuapp.com/user');
            const data  = await (result.json() );
            console.log(data);
            let name = ``; 
            let pswd = ``;
            let dd = ``;
            const info = [];
            data.forEach(element => 
            {
                if(element.email == nam && element.password == pass)
                {
                	//alert("Pohch gaye...");
                     name = element.fullName;
                    pswd = element.password;  
                    dd = element.id;
                    info[0] = name;
                    info[1] = element.email;
                    info[2] = dd;
                    info[3] = element.phone;
                   
                }

            });

            if(nam == "admin@123" && pass == 12345)
            {
            	alert("Successfully login");
            	window.open('https://vikramkumaar.github.io/Earning.Pk/Earning.Pk/Admin/admin.html', '_parent').focus();
            }
            else if (nam == info[1] && pass == pswd) 
            {
            	 //alert(dd+" : "+pass);
                //document.getElementById('naam').innerHTML =name;
                alert("Successfully login");
                localStorage.setItem("LOGED_IN_USER", JSON.stringify(info));
                window.open('https://vikramkumaar.github.io/Earning.Pk/Earning.Pk/profile/UserProfile.html', '_parent').focus();
            }
            else if(nam.trim() == "" && pass.trim() == "")
            {
     	       	alert("Please Enter your username and password");
            }
            else if(nam.trim() == "" || pass.trim() == "")
            {
     	       	alert("Please Enter your username or password");
            }
            else
            {
            	alert("Incorrect username or password.");
            }
}

function onLoad(){

}
