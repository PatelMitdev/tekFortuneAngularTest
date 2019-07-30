import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        FormsModule
      ],
      declarations: [PaginationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get seleted rows from the table', () => {
    component.currentPage = 3;
    component.pageList = [1, 2, 3];
    component.getCurrentPageList();
    expect(component.pageList.length).toBe(3);
  });

  it('should get seleted rows from the table', () => {
    component.currentPage = 3;
    component.pageList = [1, 2, 3, 4];
    component.getCurrentPageList();
    expect(component.pageList.length).toBe(4);
  });

  it('should call calculatePageList', () => {
    spyOn(component, 'calculatePageList');
    component.calculatePageList();
    expect(component.calculatePageList).toHaveBeenCalled();
  });
  it('should get the pagelist array', () => {
    component.numberOfItems = 10;
    component.rowsPerPage = 10;
    component.calculatePageList();
    expect(component.pageList.length).toBe(1);
  });

  it('should set currentPageList and call emitItemsToBind by calling pageItemClick', () => {
    spyOn(component, 'emitItemsToBind');
    component.pageClick(2);
    expect(component.currentPageList.length).toBe(0);
    expect(component.emitItemsToBind).toHaveBeenCalled();
  });

  it('should set currentPageList and call emitItemsToBind by calling nextPageItemClick', () => {
    spyOn(component, 'emitItemsToBind');
    component.currentPage = 2;
    component.pageList = [1, 2, 3];
    component.nextPageItemClick();
    expect(component.currentPageList.length).toBe(2);
    expect(component.emitItemsToBind).toHaveBeenCalled();
  });

  it('should set currentPageList and call emitItemsToBind by calling prevPageItemClick', () => {
    spyOn(component, 'emitItemsToBind');
    component.currentPage = 2;
    component.prevPageItemClick();
    expect(component.currentPageList.length).toBe(0);
    expect(component.emitItemsToBind).toHaveBeenCalled();
  });
  it('should call calculatePageList', () => {
    component.currentPage = 1;
    spyOn(component, 'calculatePageList');
    component.onRowsPerPageChange();
    expect(component.calculatePageList).toHaveBeenCalled();
  });
});
