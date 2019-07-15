import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(
    private http: HttpClient
  ) { }

  saveHistoryService(url) {
    let urlJson = { "url": JSON.parse(JSON.stringify(url)) }
    return this.http.put('http://localhost:8000/historyJson/new', urlJson)
  }

  getHistoryService() {
    return this.http.get('http://localhost:8000/historyJson')
  }
}
