$(document).ready(function(){
    var count_group = $(".list .item").length;
    var active = 0;
    var old_active = count_group - 1;
    function Load(){
        $('#item_'+old_active).removeClass('active');
        $('#item_'+old_active).addClass('hide_item');

        $('#content_'+old_active).removeClass('active');
        $('#content_'+old_active).addClass('hide_item');

        $('#item_'+active).removeClass('hide_item');
        $('#item_'+active).addClass('active');

        $('#content_'+active).removeClass('hide_item');
        $('#content_'+active).addClass('active');

        $('.dots-page div').removeClass('active');
        $('#dot_'+active).addClass('active');

        $('.effect').addClass('show_effect_v1');
        
        setTimeout(function (){
            $('.effect').removeClass('show_effect_v1');
        }, 6000)
    }

    Load();
    $('#next').on('click', function(){
        old_active = active;
        active = active + 1 >= count_group ? 0 : active + 1;
        Load();
    })
    $('#prev').on('click', function(){
        old_active = active;
        active = active - 1 < 0 ? count_group - 1 : active - 1;
        Load();
    })
});