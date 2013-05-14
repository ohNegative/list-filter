// JavaScript Document
var $mtv = jQuery.noConflict();
$mtv(document).ready(listSort);

function listSort(){
$mtv('div.tags').delegate('input[type=checkbox]', 'change', function()
{
    var lis = $mtv('.results > li'),
        checked = $mtv('input:checked');

    if (checked.length)
    {
        var selector = checked.map(function ()
        {
            return '.' + $mtv(this).attr('rel');
        }).get().join();

        lis.hide().filter(selector).show('slow').addClass("show");   
        console.log(selector)
    }
    else
    {
        lis.show('slow').removeClass("show");
    }
});

};


