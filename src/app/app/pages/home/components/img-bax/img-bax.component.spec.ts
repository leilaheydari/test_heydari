import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgBaxComponent } from './img-bax.component';

describe('ImgBaxComponent', () => {
  let component: ImgBaxComponent;
  let fixture: ComponentFixture<ImgBaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgBaxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImgBaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
