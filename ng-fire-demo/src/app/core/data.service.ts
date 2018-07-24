import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    private afs: AngularFirestore
  ) { }

  getUsers(): Observable<any[]> {
    return this.afs.collection('users').valueChanges();
  }
}
