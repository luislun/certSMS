$( document ).ready( function(){
    $( '#enter' ).click( function(){
        if( $( "#username" ).val() == "Admin" && $( "#password" ).val() == "test" ){
            window.location = "dashboard.html";
        } else {
            noty({text: 'Usuario y/o password incorrecto.', layout: 'topCenter', type: 'success'});
            return false;
        }
    });

    $( '#startHour, #finishHour' ).removeClass( 'plugin-clock' );

    $( '#execMatriz' ).click( function(){
        $( '#startHour, #finishHour' ).addClass( 'plugin-clock' );

        window.setInterval(function(){
            $( '#startHour' ).removeClass( 'plugin-clock' );                
        },1000);
        $( '#step1 #run' ).removeClass( 'hidden' );
        $( '#step1 #toArrow' ).hide();

        $( '#step1' ).show();
        window.setTimeout(function(){
            $( '#step1 .run' ).hide();
            $( '#step1 .toArrow' ).show();
            $( '#step1 .finishHour' ).removeClass( 'plugin-clock' );
            $( '#step1 .widget' ).removeClass( 'widget-default' ).addClass( 'widget-success' );
            $( '#step1 h3' ).removeClass( 'text-primary' ).addClass( 'text-default' );
            $( '#step1 .result' ).show();

            $( '#step2' ).show();
            $( '#step2 .run' ).show();
            $( '#step2 .toArrow' ).hide();
            $( '#step2 .startHour' ).removeClass( 'plugin-clock' );
        },2000);

        window.setTimeout(function(){
            $( '#step2 .run' ).hide();
            $( '#step2 .toArrow' ).show();
            $( '#step2 .finishHour' ).removeClass( 'plugin-clock' );
            $( '#step2 .widget' ).removeClass( 'widget-default' ).addClass( 'widget-success' );
            $( '#step2 h3' ).removeClass( 'text-primary' ).addClass( 'text-default' );
            $( '#step2 .result' ).show();

            $( '#step3' ).show();
            $( '#step3 .run' ).show();
            $( '#step3 .toArrow' ).hide();
            $( '#step3 .startHour' ).removeClass( 'plugin-clock' );
        },6000);

        window.setTimeout(function(){
            $( '#step3 .run' ).hide();
            $( '#step3 .toArrow' ).show();
            $( '#step3 .finishHour' ).removeClass( 'plugin-clock' );
            $( '#step3 .widget' ).removeClass( 'widget-default' ).addClass( 'widget-success' );
            $( '#step3 h3' ).removeClass( 'text-primary' ).addClass( 'text-default' );
            $( '#step3 .result' ).show();

            $( '#step4' ).show();
            $( '#step4 .run' ).show();
            $( '#step4 .toArrow' ).hide();
            $( '#step4 .startHour' ).removeClass( 'plugin-clock' );
        },9000);

        window.setTimeout(function(){
            $( '#step4 .run' ).hide();
            $( '#step4 .toArrow' ).show();
            $( '#step4 .finishHour' ).removeClass( 'plugin-clock' );
            $( '#step4 .widget' ).removeClass( 'widget-default' ).addClass( 'widget-success' );
            $( '#step4 h3' ).removeClass( 'text-primary' ).addClass( 'text-default' );
            $( '#step4 .result' ).show();

            $( '#step5' ).show();
            $( '#step5 .run' ).show();
            $( '#step5 .toArrow' ).hide();
            $( '#step5 .startHour' ).removeClass( 'plugin-clock' );
        },11000);

        window.setTimeout(function(){
            $( '#step5 .run' ).hide();
            $( '#step5 .toArrow' ).show();
            $( '#step5 .finishHour' ).removeClass( 'plugin-clock' );
            $( '#step5 .widget' ).removeClass( 'widget-default' ).addClass( 'widget-success' );
            $( '#step5 h3' ).removeClass( 'text-primary' ).addClass( 'text-default' );
            $( '#step5 .result' ).show();

            $( '#step6' ).show();
        },16000);
    });

    $( '#execMatriz-failed' ).click( function(){
        $( '#startHour, #finishHour' ).addClass( 'plugin-clock' );

        window.setInterval(function(){
            $( '#startHour' ).removeClass( 'plugin-clock' );                
        },1000);
        $( '#step1-failed #run' ).removeClass( 'hidden' );
        $( '#step1-failed #toArrow' ).hide();

        $( '#step1-failed' ).show();
        window.setTimeout(function(){
            $( '#step1-failed .run' ).hide();
            $( '#step1-failed .toArrow' ).show();
            $( '#step1-failed .finishHour' ).removeClass( 'plugin-clock' );
            $( '#step1-failed .widget' ).removeClass( 'widget-default' ).addClass( 'widget-success' );
            $( '#step1-failed h3' ).removeClass( 'text-primary' ).addClass( 'text-default' );
            $( '#step1-failed .result' ).show();

            $( '#step2-failed' ).show();
            $( '#step2-failed .run' ).show();
            $( '#step2-failed .toArrow' ).hide();
            $( '#step2-failed .startHour' ).removeClass( 'plugin-clock' );
        },2000);

        window.setTimeout(function(){
            $( '#step2-failed .run' ).hide();
            $( '#step2-failed .toArrow' ).show();
            $( '#step2-failed .finishHour' ).removeClass( 'plugin-clock' );
            $( '#step2-failed .widget' ).removeClass( 'widget-default' ).addClass( 'widget-danger' );
            $( '#step2-failed h3' ).removeClass( 'text-primary' ).addClass( 'text-warning' );
            $( '#step2-failed .result' ).show();
        },6000);
    });

    if( typeof Morris != 'undefined' ){
        Morris.Bar({
            element : 'chart',
            data    : [
                { date: '02/02/2015', success: 15, failed: 5 },
                { date: '03/02/2015', success: 10, failed: 4 },
                { date: '01/02/2015', success: 20, failed: 9 },
                { date: '04/02/2015', success: 20, failed: 0 },
                { date: '05/02/2015', success: 5 , failed: 4 },
                { date: '06/02/2015', success: 12, failed: 6 },
                { date: '07/02/2015', success: 31, failed: 12 },
                { date: '08/02/2015', success: 10, failed: 12 },
                { date: '09/02/2015', success: 23, failed: 2  },
                { date: '10/02/2015', success: 10, failed: 1  }
            ],
            xkey   : 'date',
            ykeys  : ['success', 'failed'],
            labels : ['Exitosas', 'Fallidas']
        });
    }
});