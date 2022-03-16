function Prime(number) {
  if ( number <= 1) return true;
  for( var j = 2; j < number; j++ ) {
    if( number % j == 0 ) {
      return false;
    }
  }
return true;

}
for ( var i = 2; i < 100; i++) {
   if  ( Prime(i) ) { 
      console.log(i)
   }
}
