import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFormBarComponent } from './search-form-bar.component';

describe('SearchFormBarComponent', () => {
  let component: SearchFormBarComponent;
  let fixture: ComponentFixture<SearchFormBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFormBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchFormBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
