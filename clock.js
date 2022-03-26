
 var k=setInterval(update,1000);
  function update(){
    var dt=new Date();//creating date
    var totaltime;
    var hour;
    var min;
    var sec;
    hour=dt.getHours();
    min=dt.getMinutes();
    sec=dt.getSeconds();

    totaltime=hour+ ': '+min+ ': '+sec;
   document.getElementById("time").innerHTML=totaltime;
  }
  
  

  
  
  

  
  
  
    
