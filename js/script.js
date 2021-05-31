function getEmployees()  { 
    var member_crown = document.getElementById('member_crown');
    var picture = document.getElementById('picture');
    var info = document.getElementById('info');
    var skills =  document.getElementById('skills');
    var profile = "";
    var member = document.getElementById('member');

    const API_URL = 'http://sandbox.bittsdevelopment.com/code1/fetchemployees.php'


    fetch(API_URL)
        .then(response => { 
            return response.json();
        })
        .then(employees => { 
            console.log(employees);

            for ( var employee in employees){ 
                //console.log(employees[employee].employeefname)
                profile += "<div class='member'><div class='member_crown'>";
                if(employees[employee].employeeisfeatured == 0) { 

                    profile += "<img src='https://image.flaticon.com/icons/png/512/1657/1657088.png'>"
                } else { 
                    profile +="";
                }
                
                profile += "</div>";
                profile += "<div class='member_picture'>" 
                            if(employees[employee].employeehaspic == 1) { 
                                profile+= "<img src='http://sandbox.bittsdevelopment.com/code1/employeepics/" +employees[employee].employeeid+ ".jpg'>"
                            } else { 
                                //default pic if user doesnt upload one
                                profile +="<img src='https://pbs.twimg.com/media/ElrAGHjX0AE2ema?format=png&name=small'>";
                            }
                profile += "</div>";
                profile += "<div class='member_name'>";
                profile += "<h4>" +employees[employee].employeefname+ " " +employees[employee].employeelname+ "</h4>";
                profile += "</div>";
                profile += "<div class='member_bio'> <p>"+employees[employee].employeebio+ "</p></div>";
            
                profile += "<div class='skills_row'>"
                for(let x =0; x < employees[employee].roles.length; x++) { 
                    profile += "<div style='text-align: center; margin: 0px 10px; padding: 5px 10px; width: auto; background-color:" +employees[employee].roles[x].rolecolor+ ";'>" +employees[employee].roles[x].rolename+ "</div>" 
                }    
        
                profile += " </div> </div>"         
                member.innerHTML = profile;
            }
           

           
        })
};

window.onload = getEmployees;