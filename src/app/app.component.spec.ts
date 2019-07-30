import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppService } from './app.service';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { TableComponent } from './common/table/table.component';
import { PaginationComponent } from './common/pagination/pagination.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


const GRID_DATA = [{id: 1}];

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let service: AppService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({

      imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
        TableComponent,
        PaginationComponent
      ],
      providers: [
        {provide: AppService, useValue: {
            getTableData() {
              return of(GRID_DATA);
            }
          }}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    service = TestBed.get(AppService);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should call getSampleData from AppService', () => {
    spyOn(service, 'getTableData').and.returnValue(of(GRID_DATA));
    component.ngOnInit();
    expect(service.getTableData).toHaveBeenCalled();
  });

  it('should set tableData from response', () => {
    spyOn(service, 'getTableData').and.returnValue(of(GRID_DATA));
    component.ngOnInit();
    expect(component.data).toBe(GRID_DATA);
  });
});
