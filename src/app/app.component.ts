import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CarouselModule , ButtonModule],
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

  products = [
    {
      name : 'مریم مصطفوی',
      score: '4.5',
      des : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
      expertise : 'اطفال',
      doctor : 'دکتر محمد کیانی',
      date : '21 شهریور 1402'
    },
    {
      name : 'مریم مصطفوی',
      score: '4.5',
      des : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
      expertise : 'اطفال',
      doctor : 'دکتر محمد کیانی',
      date : '21 شهریور 1402'
    },
    {
      name : 'مریم مصطفوی',
      score: '4.5',
      des : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
      expertise : 'اطفال',
      doctor : 'دکتر محمد کیانی',
      date : '21 شهریور 1402'
    },
    {
      name : 'مریم مصطفوی',
      score: '4.5',
      des : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
      expertise : 'اطفال',
      doctor : 'دکتر محمد کیانی',
      date : '21 شهریور 1402'
    },
    {
      name : 'مریم مصطفوی',
      score: '4.5',
      des : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
      expertise : 'اطفال',
      doctor : 'دکتر محمد کیانی',
      date : '21 شهریور 1402'
    },
    {
      name : 'مریم مصطفوی',
      score: '4.5',
      des : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
      expertise : 'اطفال',
      doctor : 'دکتر محمد کیانی',
      date : '21 شهریور 1402'
    }
  ]
  getSeverity(status: string) :any{
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
    }
  }
  responsiveOptions: any[] | undefined;

}
