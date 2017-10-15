 class AdapteeObject {
    
       
        printMessage(msg) {
          console.log( msg ) ;
       }
        
   }
 class TargetObject  {
    
      
       
        constructor()
       {
           this.adaptee = new AdapteeObject() ;
       }
        
    
       sayHello() {
           this.adaptee.printMessage("Hello");
       }
        
   }
 class Client {
    
        runTest()
        {
            var obj = new TargetObject() ;
            obj.sayHello() ;
        }
    
     
    }
    
var c = new Client() ;
 c.runTest() ;


