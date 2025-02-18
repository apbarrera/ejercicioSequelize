import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private apiURL = 'https://images-api.nasa.gov/search?q=galaxy&media_type=image'

  constructor(private http: HttpClient) { }
}
