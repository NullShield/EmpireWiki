import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent {

}
