import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [AppService]
    });
    httpTestingController = TestBed.get(HttpTestingController);
  });

  beforeEach(inject([AppService], s => {
    service = s;
  }));

  afterEach(() => {
    httpTestingController.verify();
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get data from json', () => {
    service.getTableData();
    expect(service).toBeTruthy();
  });

  it('should post data', () => {
    service.submitData();
    expect(service).toBeTruthy();
  });

});
