$( document ).ready(function() {
            function animation(stepId, toFind, animateClass){
                $('#'+stepId).on('impress:stepenter', function(){
                     var step = $(this);
                     step.find(toFind).addClass('animated '+animateClass);
                });
                $('#'+stepId).on('impress:stepleave', function(){
                     var step = $(this);
                     step.find(toFind).removeClass('animated '+animateClass);
                });
            };

            $('#members .member').each(function(i){
               $(this).css({
                    '-moz--animation-delay' : i + 's',
                    '-webkit--animation-delay' : i + 's',
                    'animation-delay' : i + 's'
               });
            });

                animation('members', '.member', 'zoomInUp');
                animation('intro', 'h1', 'bounceInDown');
                animation('intro', 'p', 'bounceInUp');
                animation('report', '#scaling', 'swing');
        });

