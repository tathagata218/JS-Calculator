$(function(){
    var val1='';
    var val2='';
    var valarr1=[];
    var a;
    
   $('.numberBtn').click(function(){
      val2 = $(this).attr('value');
      val1 += val2;
      
   $('#outputNo').val(val1);
   });
    
    $("#clearBtn").click(function(){
      $('#outputNo').val('');
      val1='';
      val2='';
      valarr1=[];
    
    
    
    });
  
    
    
    $("#squarrootBtn").click(function(){
      a = parseInt(val1);
      $("#outputNo").val(Math.sqrt(a));
    
  });
    
    $("#percentageBtn").click(function(){
    a = parseInt(val1);
      $('#outputNo').val(a/100);
     
      
  });
  
    
    $("#squarBtn").click(function(){
    a=parseInt(val1);
      $('#outputNo').val(Math.pow(a,2));
  });
    
    $("#desimalBtn").click(function(){
      if (val1.includes('.') !== true){
       val1+='.';
      }
    });
    
    //Code for calculations with plus, minus, division, multiplication.
   
  $("#multipliBtn").click(function(){
    valarr1.push(val1);
    valarr1.push('*');
    val1='';
     $('#outputNo').val('');
  console.log(valarr1);
  
  });
    
    
   
    $("#plusBtn").click(function(){
    valarr1.push(val1);
    valarr1.push('+');
    val1='';
     $('#outputNo').val('');
  console.log(valarr1);
  
  });
    
   
    
    $("#minusBtn").click(function(){
    valarr1.push(val1);
    valarr1.push('-');
    val1='';
     $('#outputNo').val('');
  console.log(valarr1);
  });
    
    $("#divideBtn").click(function(){
    valarr1.push(val1);
    valarr1.push('/');
    val1='';
     $('#outputNo').val('');
  console.log(valarr1);
  });
  
  
    
    
   $("#equalBtn").click(function(){
    if ($('#outputNo').val()!=''){
      valarr1.push(val1);
    }
    else if (valarr1[valarr1.length-1]==="*" ||valarr1[valarr1.length-1]==="-"||valarr1[valarr1.length-1]==="+"||valarr1[valarr1.length-1]==="/") {
      valarr1.pop();
      var b = valarr1.join(' ');
      $('#outputNo').val('');
     
     }   
    
   
    $('#outputNo').val('');
    var b = valarr1.join(' ');
    var finalOutput=eval(b);
    if (isNaN(finalOutput)){
    $("#outputNo").val('derp');
      valarr1=[];
  
    }
     else{  $("#outputNo").val(finalOutput);
    valarr1=[];
  
    }
     
  
   // $("#outputNo").val(finalOutput);
     console.log(valarr1);
    valarr1=[];
  }); 
    
  });