import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getUsers } from './store/actions/users.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store<any>) {}
  us$: any = this.store.select('users');
  users: any;

  ngOnInit(): void {
    this.store.dispatch(getUsers());
    this.us$.subscribe((res: any) => {
      console.log(res);
    });
  }
}
