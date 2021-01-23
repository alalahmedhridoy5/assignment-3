




// The solution to the 1st problem

function  kilometerToMeter(kilometer) {
    var meter = 0;
        meter =kilometer * 1000;
        return meter;
    }
    var meter= kilometerToMeter(4 );
    console.log(meter);
   
  
  // The solution to the 2nd problem
  
  
  function megaFriend(names) {
        var maxCharName=[0];
       for (let i = 0; i < names.length; i++) {
            const element = names[i];
          if ( element >maxCharName) {
              maxCharName = element;
          }         
     }
  
     return maxCharName;
     }
     
    var names=["Alal","Ahmed","Hridoy","Makbul","Mojammel"];
     var maxCharNameResult=megaFriend(names);
     console.log(maxCharNameResult);
  
   // The solution to the 3rd problem
  
   function hotelCost(relaxDay) {
      var hotelCost = 0;
     if (relaxDay <= 10) {
        hotelCost = relaxDay * 100;
   }
  
  
     else if ( relaxDay <= 20) {
      var firstTenDay = 10 * 100;
      var remainingDay = relaxDay - 10;
      var secondTenDay   = remainingDay * 80;
      hotelCost        = firstTenDay  + secondTenDay;
     }
     
  
    else {
       var firstTenDay     = 10 * 100;
       var secondTenDay    = 10 * 80;
       var remainingDay  = relaxDay - 20;
       var otherDiscountDay  =  remainingDay * 50;
       hotelCost         = firstTenDay + secondTenDay + otherDiscountDay;
    }
        return hotelCost;
   }
       var totulCost= hotelCost( 30);
       console.log(totulCost);