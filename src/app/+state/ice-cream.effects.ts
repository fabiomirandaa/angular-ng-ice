import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { getIceCreams, IceCreamActionTypes, addIceCream, deleteIceCream } from './ice-cream.actions';
import { of } from 'rxjs';
import { switchMap, catchError, map, mergeMap } from 'rxjs/operators';
import { IceCreamService } from '../ice-cream.service';

@Injectable()
export class IceCreamEffect {

  loadIceCreams$ = createEffect(() =>
      this.actions$.pipe(
          ofType(getIceCreams),
          switchMap(() => this.loadAllIceCreams())
      )
  );

  // addIceCream$ = createEffect(() =>
  //     this.actions$.pipe(
  //         ofType(addIceCream),
  //         switchMap((action) => this.iceCreamService.addIceCream(action.title)
  //             .pipe(
  //                 mergeMap(() => this.loadAllIceCreams())
  //             ))
  //     )
  // );

  // deleteIceCream$ = createEffect(() =>
  //     this.actions$.pipe(
  //         ofType(deleteIceCream),
  //         switchMap((action) => this.iceCreamService.deleteIceCream(action.id)
  //             .pipe(
  //                 mergeMap(() => this.loadAllIceCreams())
  //             ))
  //     )
  // );

  constructor(private actions$: Actions, private iceCreamService: IceCreamService) {}

  private loadAllIceCreams() {
      return this.iceCreamService.getIceCreams()
          .pipe(
              map((iceCreams) => ({ type: IceCreamActionTypes.LoadIceCreams, iceCreams })),
              catchError((error) => of({ type: IceCreamActionTypes.Error, message: error }))
          );
  }
}
