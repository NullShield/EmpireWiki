import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-website',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterModule],
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.less']
})
export class WebsiteComponent {

}
