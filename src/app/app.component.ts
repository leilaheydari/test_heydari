import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './app/pages/home/components/footer/footer.component';
import { UserReviewsComponent } from './app/pages/home/components/user-reviews/user-reviews.component';
import { ImgBaxComponent } from './app/pages/home/components/img-bax/img-bax.component';
import { SearchComponent } from './app/pages/home/components/search/search.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UserReviewsComponent, FooterComponent, ImgBaxComponent, SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'test';

  medical: any = [

    {
      photo: 'assets/images/why-would-I-be-reffered-to-a-neurologist 1.svg',
      title: 'اطفال'
    },
    {
      photo: 'assets/images/why-would-I-be-reffered-to-a-neurologist 1.svg',
      title: 'اطفال'
    },
    {
      photo: 'assets/images/why-would-I-be-reffered-to-a-neurologist 1.svg',
      title: 'اطفال'
    },
    {
      photo: 'assets/images/why-would-I-be-reffered-to-a-neurologist 1.svg',
      title: 'اطفال'
    },
    {
      photo: 'assets/images/why-would-I-be-reffered-to-a-neurologist 1.svg',
      title: 'اطفال'
    },
    {
      photo: 'assets/images/why-would-I-be-reffered-to-a-neurologist 1.svg',
      title: 'اطفال'
    },
    {
      photo: 'assets/images/why-would-I-be-reffered-to-a-neurologist 1.svg',
      title: 'اطفال'
    },
    {
      photo: 'assets/images/why-would-I-be-reffered-to-a-neurologist 1.svg',
      title: 'اطفال'
    },
    {
      photo: 'assets/images/why-would-I-be-reffered-to-a-neurologist 1.svg',
      title: 'اطفال'
    },
    {
      photo: 'assets/images/why-would-I-be-reffered-to-a-neurologist 1.svg',
      title: 'اطفال'
    },
    {
      photo: 'assets/images/why-would-I-be-reffered-to-a-neurologist 1.svg',
      title: 'اطفال'
    },
    {
      photo: 'assets/images/why-would-I-be-reffered-to-a-neurologist 1.svg',
      title: 'اطفال'
    },
    {
      photo: 'assets/images/why-would-I-be-reffered-to-a-neurologist 1.svg',
      title: 'اطفال'
    },
    {
      photo: 'assets/images/why-would-I-be-reffered-to-a-neurologist 1.svg',
      title: 'اطفال'
    },
    {
      photo: 'assets/images/why-would-I-be-reffered-to-a-neurologist 1.svg',
      title: 'اطفال'
    },
    {
      photo: 'assets/images/why-would-I-be-reffered-to-a-neurologist 1.svg',
      title: 'اطفال'
    },
    {
      photo: 'assets/images/why-would-I-be-reffered-to-a-neurologist 1.svg',
      title: 'اطفال'
    },
    {
      photo: 'assets/images/why-would-I-be-reffered-to-a-neurologist 1.svg',
      title: 'اطفال'
    },
    {
      photo: 'assets/images/why-would-I-be-reffered-to-a-neurologist 1.svg',
      title: 'اطفال'
    },
    {
      photo: 'assets/images/why-would-I-be-reffered-to-a-neurologist 1.svg',
      title: 'اطفال'
    }



  ]

  ngOnInit() {

  }

  ngAfterViewInit() {

  }



}
