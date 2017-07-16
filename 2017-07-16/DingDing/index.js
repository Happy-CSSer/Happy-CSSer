$(function(){
    var small_block = $('.small_block');
    $('.small_block').click(function(){
        // console.log('click!!');
        $(this).siblings('.hidden_block').css('display', 'flex');
        $(this).siblings('.hidden_block').children('.left').children('.gray').addClass('aa');
        
        $(this).siblings('.hidden_block').children('.right').addClass('bb');

    });

    $('.cancel').click(function(){
        console.log('cancel');
        $(this).parent('.right').removeClass('bb');
    })
})
