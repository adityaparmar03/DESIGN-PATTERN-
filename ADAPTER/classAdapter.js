 class AdapteeParent {
    
        printMessage( msg) {
           console.log( msg );
       }
        
   }
class Adapter extends AdapteeParent {
    
    constructor(){super()}
         sayHello() {
           super.printMessage( "Hello" );
       }
        
   }
 class Client {
    
     runTest()
    {
        var  obj = new Adapter() ;
        obj.sayHello() ;
    }
    
    
   
 
}

var c = new Client()
c.runTest()
   