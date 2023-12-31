import { HeaderComponent } from './../../components/header/header.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
