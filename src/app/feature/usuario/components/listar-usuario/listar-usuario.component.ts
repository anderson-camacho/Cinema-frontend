import { Router } from '@angular/router';
import { UsuarioService } from './../../shared/service/usuario.service';
import { Usuario } from './../../shared/model/usuario';
import { Observable } from 'rxjs';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.scss']
})
export class ListarUsuarioComponent implements OnInit {
  public listaUsuarios: Observable<Usuario[]>;
  usuarios: Usuario[];
  constructor(protected usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
    this.listaUsuarios = this.usuarioService.consultarUsuario();
  }

  onSubmitDelete(): void {
    this.router.navigate(null);
    // this.router.navigate([`eliminar_usuario/${usaurio.id}`]);
  }

  onSubmitUpdate(usuario: Usuario): void {
     this.router.navigate([`editar_usuario/${usuario.id}`]);
  }

}
