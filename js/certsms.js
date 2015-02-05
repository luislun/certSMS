$( document ).ready( function(){
    $( '#startHour, #finishHour' ).removeClass( 'plugin-clock' );

    $( '#execMatriz' ).click( function(){
        $( '#startHour, #finishHour' ).addClass( 'plugin-clock' );

        window.setInterval(function(){
            $( '#startHour' ).removeClass( 'plugin-clock' );                
        },1000);
        $( '#run' ).removeClass( 'hidden' );
        $( '#toArrow' ).hide();


        window.setInterval(function(){
            $( '#run' ).hide();
            $( '#toArrow' ).show();
            $( '#finishHour' ).removeClass( 'plugin-clock' );
            $( '#step1' ).removeClass( 'widget-default' ).addClass( 'widget-success' );
            $( '#step1 h3' ).removeClass( 'text-primary' ).addClass( 'text-default' );
        },5000);
    });

    if( typeof Morris != 'undefined' ){
        Morris.Bar({
            element : 'chart',
            data    : [
                { date: '01/01/2015', success: 20, failed: 9 },
                { date: '02/01/2015', success: 15, failed: 5 },
                { date: '03/01/2015', success: 10, failed: 4 },
                { date: '04/01/2015', success: 20, failed: 0 },
                { date: '05/01/2015', success: 5 , failed: 4 },
                { date: '06/01/2015', success: 12, failed: 6 },
                { date: '07/01/2015', success: 31, failed: 12 },
                { date: '08/01/2015', success: 10, failed: 12 },
                { date: '09/01/2015', success: 23, failed: 2  },
                { date: '10/01/2015', success: 10, failed: 1  }
            ],
            xkey   : 'date',
            ykeys  : ['success', 'failed'],
            labels : ['Exitosas', 'Fallidas']
        });
    }
});