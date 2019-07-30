import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppService } from '../../app.service';
import { of } from 'rxjs';

const MOCK_DATA = {};

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let service: AppService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ BrowserModule,
        HttpClientModule,
        FormsModule
      ],
      declarations: [ TableComponent,
        PaginationComponent
      ],
      providers: [
        {provide: AppService, useValue: {
            submitData() {
              return of(MOCK_DATA);
            }
          }}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    service = TestBed.get(AppService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call submitData from AppService', () => {
    const params = {id: '', status: ''};
    spyOn(service, 'submitData').and.returnValue(of(MOCK_DATA));
    component.submitRowData(params);
    expect(service.submitData).toHaveBeenCalled();
  });

  it('should bind the table data', () => {
    component.data = [];
    component.bindTableData({});
    expect(component.tableData.length).toBe(0);
  });
});
