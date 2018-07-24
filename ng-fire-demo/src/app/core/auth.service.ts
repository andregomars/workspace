import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable, of } from 'rxjs';
import { switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User>;

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore
  ) {
    this.user = this.afAuth.authState;
    // this.user = this.afAuth.authState.pipe(
    //     switchMap(user => {
    //       if (user) {
    //         this.user = user;
    //       } else {
    //         return this.user = of(null);
    //       }
    //     })
    //   );
  }

  signIn(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        this.router.navigate(['/dashboard']);
      });
  }

  signOut() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }


}


export interface User {
  uid: string;
  email: string;
  displayName?: string;
}
