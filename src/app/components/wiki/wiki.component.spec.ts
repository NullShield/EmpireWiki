import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiComponent } from './wiki.component';

describe('HomeComponent', () => {
  let component: WikiComponent;
  let fixture: ComponentFixture<WikiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WikiComponent]
    });
    fixture = TestBed.createComponent(WikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
