import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  links: any = [
    {
      src: 'https://www.youtube.com',
      name: 'Youtube'
    },
    {
      src: 'https://github.com/EDcasa',
      name: 'Github'
    },
    {
      src: 'mailto:edwin.casav@gmail.com',
      name: 'Contacto'
    },
    {
      name: 'Acerca',
      route: ['/', 'about-me']
    }
  ];

  constructor() {
  }

  ngOnInit(): void {

  }

}


