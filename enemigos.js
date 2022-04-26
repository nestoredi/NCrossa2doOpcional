let villano
let enemy

const bienvenida = ()=> {

    do{
    
        
        nombre = prompt("Bienvenido al juego de Batman, ingrese su nombre:");
      } while (nombre === "" || !isNaN(nombre));
      alert("Hola :"+ nombre);
    
    
    }  
    //elegir villano

    const elegirVillano=()=>{
          alert("Quien ataca a Batman!!El Joker,Acertijo,Pinguino o TwoFaces")
         enemy = prompt("Encuentra al enemigo oculto :")
         
        while(villanos.indexOf(enemy) === -1)
         enemy = prompt("Ese no es elige otra vez :")
         alert("Acertaste es el : " + enemy) 
    }
   
    
    
   

let villanos =["Joker","Pinguino","Acertijo","TwoFaces"]
bienvenida()
let resultado =elegirVillano()

