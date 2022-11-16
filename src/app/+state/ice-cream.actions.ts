import { createAction, props } from '@ngrx/store';
import { IceCream } from '../models/icecream.interface';

// Passo 1: Definir as ações

export enum IceCreamActionTypes { // Aqui a gente cria um Enum com as actions
  GetAll = '[IceCream Page] Get all iceCreams',
  LoadIceCreams = '[IceCream API] Load iceCreams',
  Add = '[IceCream Page] Add',
  Delete = '[IceCream Page] Delete',
  Error = '[IceCream API] Error',
}

// Aqui nessa seção, a gente define nossas actions. Há um método criador e basicamente
// passamos o type criado acima
// e em seguida o Payload com as informações que queremos passar na ação.

export const getIceCreams = createAction(IceCreamActionTypes.GetAll);

export const loadIceCreams = createAction(
    IceCreamActionTypes.LoadIceCreams,
    props<{ iceCreams: IceCream[] }>()
);

export const addIceCream = createAction(
    IceCreamActionTypes.Add,
    props<{ iceCream: IceCream }>()
);

export const deleteIceCream = createAction(
    IceCreamActionTypes.Delete,
    props<{ id: number }>()
);

export const errorIceCream = createAction(
    IceCreamActionTypes.Error,
    props<{ message: string }>()
);
