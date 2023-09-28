import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  toggleMenu = false;

  menuToggle(){
    const dropdown = document.getElementById("dropdown");
    dropdown?.classList.toggle("change");
    this.toggleMenu =  !this.toggleMenu;
  }
}
