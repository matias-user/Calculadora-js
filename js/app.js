import { barra, botonesNum, botonesOperador, botonEnter, botonBack} from './variables.js';
let numero = '';
let numero2 = '';
let operador= '';

let contenedor = {
    numeros: '',
    operadores:'',
    numeros2: '',
    resultado:''
};
//Recorrer el arreglo de botones.
    botonesNum.forEach( boton => {
        boton.addEventListener('click', e => { //A cada boton agregar un eventListener
                if( contenedor.operadores === ''  && contenedor.numeros2 === '' ){
                    
                    numero += e.target.value; 
                    contenedor.numeros = numero;
                    llenarBarra();
                    console.log(contenedor);
                    return
                };
                if( contenedor.numeros !== '' && contenedor.operadores !== '' && contenedor.resultado === ''){
                    numero2 += e.target.value;
                    contenedor.numeros2 = numero2;
                    llenarBarra();
                    console.log(contenedor);
                    return;
                };
        });
});

botonesOperador.forEach( boton => {
    boton.addEventListener('click', e => { //A cada boton agregar un eventListener
        
        if( contenedor.operadores ===''){
            operador = e.target.value; 
            contenedor.operadores = operador;
            console.log(contenedor);
            llenarBarra();
        }
    });
} );

function llenarBarra(){
    if( contenedor.operadores === '' ){
        barra.value = ` ${contenedor.numeros}`;
        return
    }else {
        barra.value = `${contenedor.numeros} ${contenedor.operadores} ` ;
    };
    if( contenedor.numeros2 === ''){
        barra.value = `${contenedor.numeros} ${contenedor.operadores} ` ;
        return;
    }else {
        barra.value = `${contenedor.numeros} ${contenedor.operadores} ${contenedor.numeros2}` ;
    };
};

botonEnter.addEventListener('click', () => {
    switch( contenedor.operadores ){
        case '+': contenedor.resultado = parseInt( contenedor.numeros) + parseInt( contenedor.numeros2);
        barra.value = contenedor.resultado;
        break;
        case '-': contenedor.resultado = parseInt( contenedor.numeros) - parseInt( contenedor.numeros2);
        barra.value = contenedor.resultado;
        break;
        case '*': contenedor.resultado = parseInt( contenedor.numeros) * parseInt( contenedor.numeros2);
        barra.value = contenedor.resultado;
        break;
        case '/': contenedor.resultado = parseInt( contenedor.numeros) / parseInt( contenedor.numeros2);
        barra.value = contenedor.resultado;
        break;
    };
    limpiarObjeto();
    console.log(contenedor);
});

botonBack.addEventListener('click', () => {
    const convertidoArray = Object.values(contenedor);
    if( contenedor.numeros2 === '' && contenedor.operadores === ''){
        contenedor.numeros = convertidoArray[0].substring( 0, convertidoArray[0].length -1);
        numero = convertidoArray[0].substring( 0, convertidoArray[0].length -1);
        console.log(contenedor);
        llenarBarra()
    }else {
        contenedor.numeros2 = convertidoArray[2].substring( 0, convertidoArray[2].length -1);
        numero2 = convertidoArray[0].substring( 0, convertidoArray[0].length -1);
        llenarBarra()
    };
    if(contenedor.numeros2 === '' && contenedor.operadores !== ''){
        contenedor.operadores = convertidoArray[1].substring( 0, convertidoArray[1].length -1);
        llenarBarra()
    };

});

function limpiarObjeto(){
    numero = '';
    numero2 = '';
    contenedor.numeros = '',
    contenedor.numeros2 ='',
    contenedor.operadores = '',
    contenedor.resultado = ''
}


