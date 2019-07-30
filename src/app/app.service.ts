import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(public http: HttpClient) { }

  // api to get sample data
  getTableData() {
    return this.http.get('../assets/sampleData.json');
  }

  // api to submit row data
  submitData(payload) {
    return this.http.post('/api/submit', payload);
  }
}
