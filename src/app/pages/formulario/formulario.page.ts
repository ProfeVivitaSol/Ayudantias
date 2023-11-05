import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { IUsuario } from '../interfaces/interfaces';
import { UsuarioserviceService } from 'src/app/servicios/usuarioservice.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  newUsuario:IUsuario={
    nombre:'',
    email:'',
    direccion:'',
    password:''
  }
  registroForm: FormGroup; 

  constructor(private fbuilder: FormBuilder,
              private usuarioservice: UsuarioserviceService,
              private alertController: AlertController) {
    this.registroForm = this.fbuilder.group({
      'nombre': new FormControl("", [Validators.required, Validators.minLength(3)]),
      'email': new FormControl ("", [Validators.required, Validators.email]),
      'direccion': new FormControl ("", [Validators.required, Validators.minLength(3)]),
      'password': new FormControl("", [Validators.required, Validators.minLength(8)]) 
    })
   }



  ngOnInit() {
  }

  registrarUsuario(){
    this.newUsuario.nombre = this.registroForm.value.nombre;
    this.newUsuario.email= this.registroForm.value.email;
    this.newUsuario.direccion = this.registroForm.value.direccion;
    this.newUsuario.password= this.registroForm.value.password;
    this.usuarioservice.CrearUsuario(this.newUsuario).subscribe();
    this.mostrarMensaje();
    this.registroForm.reset();
  }

  async mostrarMensaje(){
    const alerta = await this.alertController.create({ 
      header: 'Usuario..',
      message: 'Usuario ha sido creado!',
      buttons: ['Ok'],
    });
    alerta.present();
  }

}
