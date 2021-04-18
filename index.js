/*****************************coeur****************************** */
/*activation coeur1*/
document.getElementById("coeur1").addEventListener('click',function(){
    var coeur1=document.getElementById("coeur1");
    if (coeur1.style.color=='black'){
        coeur1.style.color='red';
       }else{
        coeur1.style.color='black';
       }
   })
/*activation coeur2*/
   document.getElementById("coeur2").addEventListener('click',function(){
    var coeur2=document.getElementById("coeur2");
    if (coeur2.style.color=='black'){
        coeur2.style.color='red';
       }else{
        coeur2.style.color='black';
       }
   })
/*activation coeur3*/
    document.getElementById("coeur3").addEventListener('click',function(){
        var coeur3=document.getElementById("coeur3");
        if (coeur3.style.color=='black'){
            coeur3.style.color='red';
           }else{
            coeur3.style.color='black';
           }
       })
/*********************moins***************************************************** */       
/*activation moins1*/
    document.getElementById("moins1").addEventListener('click',function(){
        var moins1=document.getElementById("value1").value;
        if (moins1>=2){
            moins1--;
            document.getElementById("value1").value=moins1;
           }
           else {
            document.getElementById("articles").removeChild(document.getElementById("article1"));
           }  
           prix_article1()
           prix_totale()
       })
         /*activation moins2*/
    document.getElementById("moins2").addEventListener('click',function(){
        var moins2=document.getElementById("value2").value;
        if (moins2>=2){
            moins2--;
            document.getElementById("value2").value=moins2;
           }
           else {
            document.getElementById("articles").removeChild(document.getElementById("article2"));
           }  
           prix_article2()
           prix_totale()
       })
         /*activation moins3*/
    document.getElementById("moins3").addEventListener('click',function(){
        var moins3=document.getElementById("value3").value;
        if (moins3>=2){
            moins3--;
            document.getElementById("value3").value=moins3;
           }
           else {
            document.getElementById("articles").removeChild(document.getElementById("article3"));
           }  
           prix_article3()
           prix_totale()
       })
/***************************plus********************************************* */       
      /*activation plus1*/
    document.getElementById("plus1").addEventListener('click',function(){
        var plus1=document.getElementById("value1").value++;  
        prix_article1()
        prix_totale()
       })
      /*activation plus2*/
    document.getElementById("plus2").addEventListener('click',function(){
        var plus1=document.getElementById("value2").value++;  
        prix_article2()
        prix_totale()
       })
      /*activation plus3*/
    document.getElementById("plus3").addEventListener('click',function(){
        var plus1=document.getElementById("value3").value++;  
        prix_article3()
        prix_totale()
       })
/*************************suppression************************************** */       
        /*activation suppression1*/
        document.getElementById("suppression1").addEventListener('click',function(){
            let price1=document.getElementById('price1');
            price1.innerHTML=0;
           
            document.getElementById("articles").removeChild(document.getElementById("article1"));
            })
        /*activation suppression2*/
        document.getElementById("suppression2").addEventListener('click',function(){
            let price2=document.getElementById('price2');
            price2.innerHTML=0;
           
            document.getElementById("articles").removeChild(document.getElementById("article2")); 
           })
         /*activation suppression3*/
        document.getElementById("suppression3").addEventListener('click',function(){
            let price3=document.getElementById("price3");
            price3.innerHTML=0; 
            document.getElementById("articles").removeChild(document.getElementById("article3")); 
            
          
           })
function prix_article1(){
          let price1=document.getElementById("price1");
          let value1=document.getElementById("value1").value;
          price1.innerHTML=1379*value1;
}
function prix_article2(){
    let price2=document.getElementById("price2");
    let value2=document.getElementById("value2").value;
    x=176.80*value2;
    price2.innerHTML=x.toFixed(2);
}
function prix_article3(){
    let price3=document.getElementById('price3');
    let value3=document.getElementById("value3").value;
    price3.innerHTML=249.00*value3;
}
function prix_totale(){
   
    let prix1=parseInt(document.getElementById('price1').innerHTML);
    let prix2=parseInt(document.getElementById('price2').innerHTML);
    let prix3=parseInt(document.getElementById('price3').innerHTML);
    let total_price=prix1+prix2+prix3;
    document.getElementById('finalPrice').value=total_price;
}