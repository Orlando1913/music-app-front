import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicService } from '../../services/music.service';

@Component({
  selector: 'app-lista-reproduccion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-reproduccion.component.html',
  styleUrls: ['./lista-reproduccion.component.scss']
})
export class ListaReproduccionComponent {
  listas: any[] = [];

  constructor(private musicService: MusicService) {}

  ngOnInit() {
    this.cargarListas();
  }

  cargarListas() {
    this.musicService.getListas().subscribe(data => {
      this.listas = data;
    });
  }

  eliminarLista(nombre: string) {
    this.musicService.eliminarLista(nombre).subscribe(() => {
      this.cargarListas();
    });
  }
}
