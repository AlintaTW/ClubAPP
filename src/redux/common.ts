import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { APP_CONFIG } from '@src/config';
import { Action } from 'redux';

export const reducerPrefixFormat = (_key: string) =>
    `${APP_CONFIG.prefixReducer}/${_key}_reducer/`.toUpperCase();

export const createActionTypePrefixFormat = (
    prefix: string,
): ((name: string) => string) => {
    const actionTypePrefixFormat = (type: string): string => {
        return reducerPrefixFormat(prefix) + type;
    };

    return actionTypePrefixFormat;
};

// TODO: root state type
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    any,
    undefined,
    Action<string>
>;

export type AppThunkDispatch = ThunkDispatch<any, undefined, Action<string>>;
