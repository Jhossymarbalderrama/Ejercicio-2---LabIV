import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Entidades/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   // 2-( componentes nuevos) Realizar:
  //   la clase usuario con nombre y clave ,
  //   el componente "Bienvenido"
  //   el componente "login"
  //   el componente "error"
  //   ( dejar los componentes listos)
  //   opcional: hacer ruteo
  nombre: string = "";
  clave: string = "";
  

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login():void{
    let campoVacio: boolean = false;

    this.nombre; 
    this.clave;

    if(this.nombre == null || this.nombre == undefined || this.nombre == ""){
      campoVacio = true;      
    }

    if(this.clave == null || this.clave == undefined || this.clave == ""){
      campoVacio = true;
    }
    
    if(campoVacio){
      this.router.navigateByUrl('/error');
    }else{
      this.router.navigateByUrl('/bienvenido');
    } 
 
  }
}
