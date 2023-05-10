// CRUD service with remote Rest Api

import { Injectable } from '@angular/core';
import { CONTACTS } from './mock-contacts';

@Injectable({providedIn: 'root'})
export class ContactService {
  constructor() { }

  getContacts(){
    // return http.get(url) ===observable/to promise()
    return Promise.resolve(CONTACTS)
  }
  
}