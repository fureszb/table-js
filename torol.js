import { ADATLISTA } from "./adat.js";
export function Delete()
{
    $(document).on("click",'.deletetd',function(){
        var index = $(this).parents('tr:first').index();
        ADATLISTA.splice(index,1);
        $(this).parents('tr:first').remove();

       
        
    
    });
    
}
