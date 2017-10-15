class ConcreteComponent {
    
         operation() {
            return "Hello World!";
        }
 }
 class Decorator {
    
    

     
     constructor( c )
    {
        this.component = c ;
    }


     operation()
    {
        return this.component.operation() ;
    }

}    
 class ConcreteDecoratorA extends Decorator {
    
        
    
        constructor(c)
        {
            super(c) ;
        }
    
        operation()
        {
            this.addedState = super.operation() ;
            return this.addedBehavior( this.addedState ) ;
        }
    
         addedBehavior() {
            return "<em>" + this.addedState + "</em>" ;
        }
    
    }
   class ConcreteDecoratorB extends Decorator {
        
             
        
             constructor( c)
            {
                super(c) ;
            }
        
            operation()
            {
                this.addedState = super.operation() ;
                return this.addedBehavior( this.addedState ) ;
            }
        
            addedBehavior() {
                return "<h1>" + this.addedState + "</h1>" ;
            }
        
        }
    

     class Tester {
        
             runTest()
            {
                 var obj = new ConcreteDecoratorB( new ConcreteDecoratorA( new ConcreteComponent() ) ) ;
                 var result = obj.operation() ;
                 console.log( result );
            }
        
       
        }
        t = new Tester() ;
        t.runTest() ;