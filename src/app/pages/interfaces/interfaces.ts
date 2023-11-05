
//get, put, delete                   
export interface IUsuarios{
    id:number;
    nombre: string;
    email: string;
    direccion: string;
    password: string;
}

//post                               
export interface IUsuario{
    nombre: string;
    email: string;
    direccion: string;
    password: string;
}