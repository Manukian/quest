$(window).on('load', function () {
    $('.continue').click(function(){
        $('.preloader').delay(500).fadeOut('slow');
    });
    
           var wow = new WOW(
      {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       20,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(box) {
          // the callback is fired every time an animation is started
          // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
      }
    );
    wow.init();
    
    $('.final_text').hide();
    $('.help_text').hide();
    $('.help_wrapper').hide();
    $('.right_answer').hide();
    $('.wrong_answer').hide();
    $('.help').hide();
    $('.next_step').hide();
    $('.first_answer_correct_img').hide();
    $('.second_answer_correct_img').hide();
    $('.third_answer_correct_1_img').hide();
    $('.third_answer_correct_2_img').hide();
    $('.third_answer_correct_3_img').hide();
    
    var question = 1;
    $('.enter').click(function(){
        if ((question == 1) && (($('.input').val() == 'эдди') || ($('.input').val() == 'Эдди'))) {
            question = 2;
            $('.right_answer').show();
            $('.wrong_answer').hide();
            $('.question_number').hide();
            $('.first_answer_correct_img').show();
            $('.first_answer_correct_img').addClass('first_correct');
            $('.right_answer_text').css('margin-left','-382px');
            $('.help_text').html('Израильский сериал');
            $('.help').hide();
            $('.yes')[0].play(0);
            $('.right_answer').delay(6000).fadeOut('slow');
            $('.first_answer_correct_img').delay(6000).fadeOut('slow');
            $('.warning_text').delay(6000).fadeOut('slow');
            $('.next_step').delay(6000).fadeIn('slow');
            $('.question_number_digits').html(question);
            $('.question_number_letters').html('секонд');
            $('.question_number').delay(6000).fadeIn('slow');
            $('.input').val('');
            $('.enter').css('pointer-events','none');
            return true;
        } else {
            if (question == 1) {
                $('.wrong_answer').show();
                $('.input').addClass('wrong_input');
                $('.enter').addClass('wrong_enter');
                $('.warning_text').hide();
                $('.help').show();
                $('.no')[0].play(0);
            }
        }
        
        if ((question == 2) && (($('.input').val() == 'военнопленные') || ($('.input').val() == 'Военнопленные'))) {
            question = 3;
            $('.right_answer').show();
            $('.wrong_answer').hide();
            $('.question_number').hide();
            $('.second_answer_correct_img').show();
            $('.second_answer_correct_img').addClass('second_correct');
            $('.first_answer_correct_img').show();
            $('.first_answer_correct_img').addClass('second_answer_correct_for_first_img');
            $('.first_answer_correct_img').addClass('second_for_first_correct');
            $('.next_step').hide();
            $('.next_step_text').html('идите в кинотеатр...возьмите билет на тот скучный фильм, на который вас водил Никита');
            $('.right_answer_text').html('суперски!');
            $('.help_text').html('мы бы дали 24 или 25');
            $('.right_answer_text').css('margin-left','-280px');
            $('.help').hide();
            $('.yes')[0].play(0);
            $('.right_answer').delay(6000).fadeOut('slow');
            $('.second_answer_correct_img').delay(6000).fadeOut('slow');
            $('.first_answer_correct_img').delay(6000).fadeOut('slow');
            $('.next_step').delay(6000).fadeIn('slow');
            $('.question_number_digits').html(question);
            $('.question_number_letters').html('сёрд');
            $('.question_number').delay(6000).fadeIn('slow');
            $('.input_label').html('введите ваш возраст');
            $('.input').val('');
            $('.enter').css('pointer-events','none');
            return true;
        } else {
            if (question == 2) {
                $('.wrong_answer').show();
                $('.input').addClass('wrong_input');
                $('.enter').addClass('wrong_enter');
                $('.warning_text').hide();
                $('.help').show();
                $('.no')[0].play(0);
            }
        }
        
        if ((question == 3) && ($('.input').val() == '29')) {
            question = 3;
            $('.right_answer').show();
            $('.wrong_answer').hide();
            $('.question_number').hide();
            $('.second_answer_correct_img').show();
            $('.second_answer_correct_img').addClass('second_correct');
            $('.first_answer_correct_img').show();
            $('.first_answer_correct_img').addClass('third_answer_correct_for_first_img');
            $('.first_answer_correct_img').addClass('third_for_first_correct');
            $('.second_answer_correct_img').addClass('third_answer_correct_for_second_img');
            $('.second_answer_correct_img').addClass('third_for_second_correct');
            $('.third_answer_correct_1_img').show();
            $('.third_answer_correct_2_img').show();
            $('.third_answer_correct_3_img').show();
            $('.third_answer_correct_1_img').addClass('third_correct_1');
            $('.third_answer_correct_2_img').addClass('third_correct_2');
            $('.third_answer_correct_3_img').addClass('third_correct_3');
            $('.next_step').hide();
            $('.right_answer_text').html('восхитительно!');
            $('.right_answer_text').css('margin-left','-443px');
            $('.help').hide();
            $('.yes')[0].play(0);
            $('.question_number_digits').html(question);
            $('.question_number_letters').html('сёрд');
            $('.input_label').html('введите ваш возраст');
            $('.input').val('');
            $('.enter').css('pointer-events','none');
            $('.next_step').delay(6000).fadeIn('slow');
            $('.input').addClass('done');
            $('.input_label').css('opacity','0');
            $('.enter').css('color','#1b1b1b');
            $('.final_text').fadeIn();
            return true;
        } else {
            if (question == 3) {
                $('.wrong_answer').show();
                $('.input').addClass('wrong_input');
                $('.enter').addClass('wrong_enter');
                $('.warning_text').hide();
                $('.help').show();
                $('.no')[0].play(0);
            }
        }
    });
    
    $('.help').click(function(){
        $('.help_wrapper').show();
    });
    
    $('.close').click(function(){
        $('.help_wrapper').fadeOut();
        $('.help_text').hide();
        $('.yes_no').css('opacity','1');
    });
    
    $('.help_no').click(function(){
        $('.help_wrapper').fadeOut();
        $('.help_text').hide();
        $('.yes_no').css('opacity','1');
    });
    
    $('.help_yes').click(function(){
        $('.help_text').fadeIn();
        $('.yes_no').css('opacity','0');
    });
    
    $('.input').keydown(function(){
        $('.input').removeClass('wrong_input');
        $('.enter').removeClass('wrong_enter');
        $('.enter').css('pointer-events','all');
    });
});