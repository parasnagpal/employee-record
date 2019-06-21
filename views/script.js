$(document).ready(()=>{

    $.get('/getemployees',(data)=>{
       console.log(data)
       data.map((employee)=>{
         if(employee.firstname)
         {
             $('.list-group').append(
                 $('<div>').attr('class','list-group-item list-group-item-action')
                     .append(
                         $('<div>')
                         .attr('class','row').click(clicked)               
                         .append(
                             $('<div>').append(employee.firstname+ ' '+employee.lastname)
                                     .attr('class','col')

                         )
                         .append(
                            $('<div>').append(employee.rating)
                                    .attr('class','col-1')
                                    
                        )
                        .append(
                            $('<div>').append(employee.status)
                                    .attr('class','col-2')
                                    
                        )
             )
             )
         }
       })
         
       
    })
    $('#submit').click(()=>{
        let active=false
        if($('#status').prop('checked')==true)
         active=true

        console.log(active) 
        $.post('/insert',{
            firstname:$('#fname').val(),
            lastname:$('#lname').val(),
            status:active?'active':'inactive',
            score:$('#score').val(),
            rating:($('#score').val()>10)? 'A':'B'
        })
    })
  

    function clicked(e){
        console.log($(this).children('.col').text())
        $.post('/myname',{
            name:$(this).children('.col').text()
        })
    }
    
    $.get('/details',()=>{
    })

})