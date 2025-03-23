import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // 🔹 Importar FormsModule para [(ngModel)]
import { MusicService } from '../../services/music.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-lista-reproduccion',
  standalone: true,
  imports: [CommonModule, FormsModule], // 🔹 Agregar CommonModule y FormsModule
  templateUrl: './add-lista-reproduccion.component.html',
  styleUrls: ['./add-lista-reproduccion.component.scss']
})
export class AddListaReproduccionComponent {
  lista = {
    nombre: '',
    descripcion: '',
    canciones: []
  };

  constructor(private musicService: MusicService, private router: Router) {}

  agregarLista() {
    if (this.lista.nombre.trim() === '') return;
    this.musicService.crearLista(this.lista).subscribe(() => {
      this.router.navigate(['/lists']);
    });
  }
}
