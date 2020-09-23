import { createSelector } from '@ngrx/store';
import { User } from 'src/app/models/User';

export const selectUserInfoState = state => state.userInfo;

export const selectUserInfo = createSelector(
    selectUserInfoState,
    userInfo=> userInfo.userInfo
  );

export const selectUserId= createSelector(
  selectUserInfo,
  (userInfo : User )=> userInfo.id
)