import { Component, OnInit} from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
data: Array<any> = [];
keys: Array<any> = [];
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getTableData().subscribe((resp: any) => {
      this.data = resp;
      this.keys = Object.keys(resp[0]).map(name => ({label: name, value: name }));
    });
  }
}
