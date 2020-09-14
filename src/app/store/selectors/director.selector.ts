import { createSelector } from '@ngrx/store';

export const selectDirectorState = state => state.director;

export const selectDirectorInfo = createSelector(
  selectDirectorState,
  director => director.director
);

export const selectDirectorId= createSelector(
  selectDirectorInfo,
  director=> director.id
);
