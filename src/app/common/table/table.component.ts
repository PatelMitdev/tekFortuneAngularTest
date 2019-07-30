import { Component, OnInit, Input, ChangeDetectorRef, DoCheck } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, DoCheck {
  @Input() data: Array<any> = [];
  @Input() columns: Array<any> = [];
  @Input() addPagination = false;
  tableData: Array<any> = [];

  constructor(private cdr: ChangeDetectorRef, private appService: AppService) { }

  ngOnInit() {
    if (!this.addPagination) {
      this.tableData = this.data;
    }
  }
  ngDoCheck() {
    this.cdr.detectChanges();
  }

  // update table data
  bindTableData(event) {
    const {currentPage, rowsPerPage} = event;
    const lastInd = currentPage * rowsPerPage;
    const startInd = (currentPage - 1) * rowsPerPage;
    this.tableData = this.data.slice(0).slice(startInd, lastInd);
  }

  // submit row data
  submitRowData(item) {
    const payloadData = {rowStatus: item.status,
      rowId: item.id};
    this.appService.submitData(payloadData).subscribe();
  }

}
