import { createAction, props } from '@ngrx/store';

export const getUsers = createAction(' [USERS] Get users ');
export const addUser = createAction(' [USERS] Add users ', props<any>());
export const getUserSuccess = createAction(
  ' [USERS] Add user successufuly ',
  props<any>()
);
