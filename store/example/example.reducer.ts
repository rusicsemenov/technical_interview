import { users } from '../../mocks';
import { SOME_ACTION } from './example.consts.ts';

const initialState = {
    headerText: 'Hello from example',
    footerHtml: '<h2><b>Hello from example</b></h2>',
    arrayToFlat: ['orange', ['blue', 'red', ['white', 'black']], 'green'],
    counter: 10,
    users,
} as const;

export const exampleReducer = (
    state = initialState,
    action: { action: string } & Record<string, unknown>,
) => {
    switch (action.type) {
        case SOME_ACTION:
            return { ...state };
        case 'SOME_OTHER_ACTION':
            return { ...state };
        default:
            return state;
    }
};

export default exampleReducer;
