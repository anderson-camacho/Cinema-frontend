import { Router } from '@angular/router';
import { UsuarioService } from './../../shared/service/usuario.service';
import { Usuario } from './../../shared/model/usuario';
import { Observable } from 'rxjs';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html'
})
export class ListarUsuarioComponent implements OnInit {
  public listaUsuarios: Observable<Usuario[]>;
  usuarios: Usuario[];
  constructor(protected usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios() {
    this.listaUsuarios = this.usuarioService.consultarUsuario();
  }

  onSubmitDelete(usuarioId: number): void {
    this.usuarioService.eliminarUsuario(usuarioId)
      .subscribe(
        () => {
          this.getUsuarios();
        }
      );
  }

  onSubmitUpdate(usuarioId: number): void {
    this.router.navigate([`editar_usuario/${usuarioId}`]);
  }
}
