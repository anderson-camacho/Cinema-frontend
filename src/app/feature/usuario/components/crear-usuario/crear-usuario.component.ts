import { tap, delay } from 'rxjs/operators';
import { UsuarioService } from './../../shared/service/usuario.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../shared/model/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html'
})
export class CrearUsuarioComponent implements OnInit {
  usuarioForm: FormGroup;
  usuario = {} as Usuario;

  constructor(protected usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.construirFormularioUsuario();
  }

  onSubmit() {
    this.usuarioService.guardarUsuario(this.usuarioForm.value)
      .pipe(
        tap(() => this.router.navigate(['usuario/listar'])),
        delay(2000)
      )
      .subscribe();
  }

  private construirFormularioUsuario() {
    this.usuarioForm = new FormGroup({
      nombre: new FormControl('', [Validators.required])
    });
  }
}
