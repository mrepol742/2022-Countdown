              // Date We are Counting to
var countDate = new Date( 'Jan 1, 2022 00:00:00' ).getTime( );

 var clock= setInterval(function ( ){
 
            // Get Today's Date
        var now = new Date( ).getTime( );
        
           // difference between today's date and the target date
              gap  = countDate - now;
              
              var second = 1000;
              var minute = second * 60;
              var hour  =  minute * 60;
              var day = hour * 24;
              
              // Calculates time for days, hours, minutes and second
              var d  = Math.floor ( gap / ( day ) );
              var h = Math.floor ( (gap % ( day) ) / ( hour ) );
              var m = Math.floor ( (gap % ( hour ) ) / ( minute) );
              var s = Math.floor ( (gap % ( minute ) ) / ( second) );
              
              // Display the result into  element of id = countdate
              document.getElementById( 'day' ).innerHTML = d;
              document.getElementById( 'hour' ).innerHTML  = h;
              document.getElementById( 'minute' ).innerHTML = m;
              document.getElementById( 'second' ).innerHTML= s;
              
              // Display "2022" when countdown has finished
              if( gap < 0 ){
                 clearInterval( gap );
                 
                 document.getElementById( 'day' ).innerHTML = "2";
                 document.getElementById( 'hour' ).innerHTML = "0";
                 document.getElementById( 'minute' ).innerHTML = "2";
                 document.getElementById( 'second' ).innerHTML = "2";
              }
       },
       1000
      
       );   
       