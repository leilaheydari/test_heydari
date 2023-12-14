import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CarouselModule , CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  customOptions: OwlOptions = {
    rtl: true,
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
  }

  Recommended_doctors=[
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]

}
