
async function onLoad()
        {
           const result =   await fetch('https://guarded-badlands-51738.herokuapp.com/user');
            const data  = await (result.json() );
            console.log(data);
            let res = ``;
            data.forEach(element => {
                res +=`<tr> <td colspan="4" > ${element.fullName} </td> 
                    <td> ${element.email} </td> 
                    <td> ${element.phone} </td> 
                    <td> ${element.question} </td> 
                    <td> ${element.answer} </td> 
                    <td> ${element.plan} </td> 
                         
                    </tr>`;
            });

            
            document.getElementById('total').innerHTML = res;

            }
        onLoad();

async function findUser()
{
            let find = document.getElementById('ui').value;
            //alert('Heloo');
            const result =   await fetch('https://guarded-badlands-51738.herokuapp.com/user');
            const data  = await (result.json() );
            console.log(data);
            const info = [];
            let res = ``;
            data.forEach(element => 
            {
                

                if(element.email == find || element.id == find)
                {
                	//alert("Pohch gaye...");
                    info[0] = element.plan;
                    info[1] = element.email;
                    info[2] = element.id;
                    info[3] = element.phone;
                    info[4] = element.fullName;
                    info[5] = element.question;
                    info[6] = element.answer;
                }


            });
            if (find == info[1]) 
            {

                alert("Data Find");
                document.getElementById('nam').innerHTML = info[4];
                document.getElementById('mail').innerHTML = info[1];
                document.getElementById('phn').innerHTML = info[3];
                document.getElementById('Q').innerHTML = info[5];
                document.getElementById('A').innerHTML = info[6];
                document.getElementById('plan').innerHTML = info[0];
                document.getElementById('msg').innerHTML = "";
                
            }
            else
            {
                alert("Data not Find");
                document.getElementById('nam').innerHTML = "-----";
                document.getElementById('mail').innerHTML = "-----";
                document.getElementById('phn').innerHTML = "-----";
                document.getElementById('Q').innerHTML = "-----";
                document.getElementById('A').innerHTML = "-----";
                document.getElementById('plan').innerHTML = "-----";
                document.getElementById('msg').innerHTML = "No data found";
            }
            
}

