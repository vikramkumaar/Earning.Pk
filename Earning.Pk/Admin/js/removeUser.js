const info = [];
async function findUser()
{
            let find = document.getElementById('ui').value;
            //alert('Heloo');
            const result =   await fetch('https://guarded-badlands-51738.herokuapp.com/user');
            const data  = await (result.json() );
            console.log(data);
            data.forEach(element => 
            {
                if(element.email == find || element.id == find)
                {
                    info[0] = element.plan;
                    info[1] = element.email;
                    info[2] = element.id;
                    info[3] = element.phone;
                    info[4] = element.fullName;
                    info[5] = element.question;
                    info[6] = element.answer;
                    info[7] = element.accountType;
                    info[8] = element.accountNumber;
                    info[9] = element.password;
                    info[10] = element.approved;
                    info[11] = element.verificationCode;
                }

            });

            if (find == info[1]) 
            {

                alert("Data Find");
                document.getElementById('nam').innerHTML = info[4];
                document.getElementById('mail').innerHTML = info[1];
                document.getElementById('phn').innerHTML = info[3];
                document.getElementById('plan').innerHTML = info[0];
                document.getElementById('msg').innerHTML = "";
                
            }
            else
            {
                alert("Data not Find");
                document.getElementById('nam').innerHTML = "-----";
                document.getElementById('mail').innerHTML = "-----";
                document.getElementById('phn').innerHTML = "-----";
                document.getElementById('plan').innerHTML = "-----";
                document.getElementById('msg').innerHTML = "No data found";
            }
            
}
async function removeUser()
{
    const data = 
        {

        info[2]: null;
        info[4]: null,
        info[9]: null,
        info[3]: null,
        info[5]: null,
        info[6]: null,
        info[7]: null,
        info[8]: null,
        info[0]: null,
        info[1]: null,
        info[10]: null,
        info[11]: null
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
          alert("User Removed");
       
}