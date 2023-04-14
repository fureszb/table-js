export function Delete()
{
    $(document).on("click",'.deletetd',function(){

        $(this).parents('tr:first').remove();
    
    });
    
}