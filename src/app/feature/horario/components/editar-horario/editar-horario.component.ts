// import { HorarioService } from '@horario/shared/service/horario.service';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { delay, tap } from 'rxjs/operators';
// import { Horario } from '@horario/shared/model/horario';

// const LONGITUD_MINIMA_PERMITIDA_TEXTO = 10;
// const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 60;

// @Component({
//   selector: 'app-editar-horario',
//   templateUrl: './editar-horario.component.html',
//   styleUrls: ['./editar-horario.component.scss']
// })
// export class EditarHorarioComponent implements OnInit {
//   horarioId: number;
//   horarioForm: FormGroup;
//   horario = {} as Horario;
//   horarioEnviar = {} as Horario;
//   constructor(protected horarioService: HorarioService, private route: ActivatedRoute, private router: Router) { }


//   ngOnInit() {
//     this.construirFormularioHorario();
//     this.horarioId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
//     this.onSubmit();
//   }

//   onSubmit() {
//     this.horario.id = this.horarioId;
//     this.horarioService.consultarByIdHorario(this.horario).subscribe(
//       data => {
//         this.horario = data;
//         this.horarioForm.patchValue(this.horario);
//       }
//     );
//   }

//   onSubmitActualizar() {
//     this.horarioEnviar = this.horarioForm.value;
//     this.horarioService.actualizarHorario(this.horarioId, this.horarioEnviar)
//       .pipe(
//         tap(() => this.router.navigate(['listar_horario'])),
//         delay(2000)
//       )
//       .subscribe(
//         data => { console.log(data); },
//         error => { console.log(error); }
//       );
//   }

//   private construirFormularioHorario() {
//     this.horarioForm = new FormGroup({
//       idPelicula: new FormControl('', [Validators.required]),
//       fecha: new FormControl('', [Validators.required]),
//       cupos: new FormControl('', [Validators.required])
//     });
//   }

// }
