import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-motoristas',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './motoristas.component.html',
  styleUrl: './motoristas.component.css'
})
export class MotoristasComponent {

}
