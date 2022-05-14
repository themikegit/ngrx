import { createReducer, on } from '@ngrx/store';
import { addUser, getUsers, getUserSuccess } from '../actions/users.actions';

const initialState: any = [];

const fakeMock = ['billy', 'ronny', 'jack', 'holy'];

export const usersReducer = createReducer(
  initialState,
  on(getUserSuccess, (state, apiUsers) => [...apiUsers.user.data]),
  on(addUser, (state, user) => [...fakeMock, user])
);
