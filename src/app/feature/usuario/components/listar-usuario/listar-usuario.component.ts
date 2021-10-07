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

  onSubmitDelete(usuario: Usuario): void {
    this.usuarioService.eliminarUsuario(usuario.id)
      .subscribe(
        data => {
          console.log(data);
          this.ngOnInit();
        },
        error => { console.log(error); }
      );
  }


  onSubmitUpdate(usuario: Usuario): void {
     this.router.navigate([`editar_usuario/${usuario.id}`]);
  }

}
