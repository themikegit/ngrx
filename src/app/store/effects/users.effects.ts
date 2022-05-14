import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, mergeMap, tap } from 'rxjs/operators';
import { ApiService } from 'src/app/api.service';
import { getUsers, getUserSuccess } from '../actions/users.actions';

@Injectable()
export class UserEffects {
  constructor(private action$: Actions, private api: ApiService) {}

  loadUsers$ = createEffect(() =>
    this.action$.pipe(
      ofType(getUsers),
      exhaustMap(() =>
        this.api.getAllUsers().pipe(
          map((user) => getUserSuccess({ user })),

          tap((us) => console.log(us))
        )
      )
    )
  );
}
