import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() numberOfItems: number;
  @Output() emitToBind: EventEmitter<any> = new EventEmitter();
  rowOptions = [10, 20, 30, 40, 50];
  rowsPerPage = 10;
  pageList: Array<number> = [];
  currentPageList: Array<number> = [];
  currentPage = 1;

  constructor() { }

  ngOnInit() {
    this.calculatePageList();
  }
  // creating pagination list
  calculatePageList() {
    this.pageList = [];
    const pagesLength = this.numberOfItems / this.rowsPerPage;
    for (let i = 1; i < pagesLength + 1; i++) {
      this.pageList.push(i);
    }
    this.currentPageList = this.getCurrentPageList();
    this.emitItemsToBind();
  }

  // update table data on pagination change
  emitItemsToBind() {
    this.emitToBind.emit({
      rowsPerPage: this.rowsPerPage,
      currentPage: this.currentPage
    });
  }

  // return selected rows
  getCurrentPageList() {
    let startIndex = 0;
    console.log('currentPage===', this.currentPage);
    if (this.currentPage - 2 > 0) {
      startIndex = this.currentPage - 3;
      if (!(this.pageList.length - startIndex > 4)) {
        startIndex = this.pageList.length - 5;
      }
      if ((this.pageList.length === 4)) {
        startIndex = 0;
      }
    }
    return this.pageList.slice(0).splice(startIndex, 5);
  }

  onRowsPerPageChange() {
    this.currentPage = 1;
    this.calculatePageList();
  }

  pageClick(pageNumber) {
    this.currentPage = pageNumber;
    this.currentPageList = this.getCurrentPageList();
    this.emitItemsToBind();
  }

  nextPageItemClick() {
    if (this.currentPage < this.pageList.length) {
      this.currentPage++;
      this.currentPageList = this.getCurrentPageList();
      this.emitItemsToBind();
    }
  }

  prevPageItemClick() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.currentPageList = this.getCurrentPageList();
      this.emitItemsToBind();
    }
  }

  moveToLastPage() {
    this.currentPage = this.pageList.length;
    this.currentPageList = this.getCurrentPageList();
    this.emitItemsToBind();
  }

  moveToStartPage() {
    this.currentPage = 1;
    this.currentPageList = this.getCurrentPageList();
    this.emitItemsToBind();
  }

}

