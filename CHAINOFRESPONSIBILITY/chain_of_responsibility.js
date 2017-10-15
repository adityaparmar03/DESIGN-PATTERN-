function ConcreteHandler1() {

    this.successor = null;

    this.handleRequest = function(request){
        console.log( "R1 got the request...");
        if ( request === "R1")
        {
            console.log(" chain_of_responsibility.ConcreteHandler1 => This one is mine!");
        }
        else
        {
            if ( this.successor != null )
                this.successor.handleRequest(request);
        }

	}

	this.setSuccessor = function(next){
        this.successor = next ;
    }

}
function ConcreteHandler2() {
    
        this.successor = null;
    
        this.handleRequest = function(request){
            console.log( "R2 got the request...");
            if ( request === "R2")
            {
                console.log(" chain_of_responsibility.ConcreteHandler2 => This one is mine!");
            }
            else
            {
                if ( this.successor != null )
                    this.successor.handleRequest(request);
            }
    
        }
    
        this.setSuccessor = function(next){
            this.successor = next ;
        }
    
    }
    function ConcreteHandler3() {
        
            this.successor = null;
        
            this.handleRequest = function(request){
                console.log( "R3 got the request...");
                if ( request === "R3")
                {
                    console.log("chain_of_responsibility.ConcreteHandler3 => This one is mine!");
                }
                else
                {
                    if ( this.successor != null )
                        this.successor.handleRequest(request);
                }
        
            }
        
            this.setSuccessor = function(next){
                this.successor = next ;
            }
        
        }
function Client(){
    
    this.runTest = function()
    {
        var h1 = new ConcreteHandler1() ;
        var h2 = new ConcreteHandler2() ;
        var h3 = new ConcreteHandler3() ;

        h1.setSuccessor(h2);
        h2.setSuccessor(h3);
        
        console.log( "Sending R2...");
        h1.handleRequest("R2");
        console.log( "Sending R3...");
        h1.handleRequest("R3");
        console.log( "Sending R1...");
        h1.handleRequest("R1");
        console.log( "Sending RX...");
        h1.handleRequest("RX");
       


    }
   
    

}
var client = new Client();
client.runTest()