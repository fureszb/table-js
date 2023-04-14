 export function rendez(lista2){

 
    $(document).on("click","table thead tr th",function(){

    console.log("he");
    var tabletbody =   document.getElementById("elementBody");
    var column = $(this).data('column');
    var order = $(this).data('order');


    if(order == 'desc')
    {
        $(this).data('order',"asc");
        lista2 = lista2.sort((a,b)=>a[column] > b[column] ?  1 : -1)
        ReOrderTBody(tabletbody,lista2);
   
    }
    else{
        $(this).data('order',"desc");
        lista2 = lista2.sort((a,b)=>a[column] < b[column] ? 1 : -1)
        ReOrderTBody(tabletbody,lista2);
    } 
   
    
})
}


 function ReOrderTBody(TBodyName,arrayname)
{
    TBodyName.innerHTML='';
    for(var i =0;i<arrayname.length;i++){
        var row = `<tr>
                        <td>${arrayname[i].nev}</td>
                        <td>${arrayname[i].fajta}</td>
                        <td>${arrayname[i].kor}</td>
                        <td>${arrayname[i].lab}</td>
                        <td class='text-danger deletetd' name="s"y>✘</td>
                        <td  class='text-success edit'>modosit</td>
                    </tr>`
                    TBodyName.innerHTML+=row;
     }
}

