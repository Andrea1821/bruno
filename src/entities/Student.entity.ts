export class Student{

    constructor(id:Number,nom:String,edad:Number,c:String){
        this.identificacion = id;
        this.nombre = nom;
        this.edad  = edad;
        this.ciudad = c ; 
    }

    identificacion:Number;
    nombre:String;
    edad:Number;
    ciudad:String
}