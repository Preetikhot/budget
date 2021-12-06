
        function myFunction() {
         inputArray =new Array();
         price =new Array();
        var size =parseInt(prompt("enter no. of products")); //Maximum Array size  
      
        for(var i=0; i<size; i++) {
        
        //Taking Input from user
        var a = prompt('Enter Element ' + (i+1));
        var b =parseInt(prompt("enter"+ (i+1) +"price "));
        inputArray.push(a); 
        price.push(b);
        
        
        }
    
        }
        

      function call(){
          var total=0;
          for(var i=0;i<price.length;i++)
          {
            total=total+price[i];
          }
         alert("total amount: "+total);
         
      }
    