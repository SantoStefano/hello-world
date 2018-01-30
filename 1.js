
function f1() {
    var a = document.getElementById("inp1").value;
    if(a>=1000 || a<=-1000){
        alert("Разрешено вводить числа от -999 до 999");
        return false;
        }
    else if(a==0){
             alert("a не может быть равно нулю");
             return false;
         }
    
    
    var b = document.getElementById("inp2").value;
    if(b>=1000 || b<=-1000){
        alert("Разрешено вводить числа от -999 до 999");
        return false;
        }
   
    var c = document.getElementById("inp3").value;
    if(c>=1000 || c<=-1000){
        alert("Разрешено вводить числа от -999 до 999");
        return false;
        }
   
    var resultD = (b*b)- (4*a*c);
    document.getElementById('outD').innerHTML ="D = "+ resultD;
    
    var x = (-b)/(2*a);
    var x1 = (-b + Math.sqrt(resultD))/(2*a);
    var x2 = (-b - Math.sqrt(resultD))/(2*a);
    
    if(resultD<0){
        document.getElementById('outX').innerHTML = "Корни = нет корней";
    }
    else if(resultD==0){
       
        document.getElementById('outX').innerHTML = "Корень = " + x;
    }
    else if(resultD>0){
        document.getElementById('outX').innerHTML = "Корни = x1 = " + x1 + "<br>" + "x2 = " + x2;
        
    }
    
    
    
        
    
}