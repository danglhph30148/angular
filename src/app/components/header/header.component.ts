import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  title = 'HomePage';
  menuList = [
    {
      label: 'HomePage',
      link: '/homepage',
    },
    {
      label: 'Categoty',
      link: '/category',
    },
    {
      label: 'About Us',
      link: '/aboutus',
    },
    {
      label: 'Contact',
      link: '/contact',
    },
  ];
}
