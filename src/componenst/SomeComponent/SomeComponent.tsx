import { useAppSelector } from '../../../store/store.types.ts';
import type { ReactElement } from 'react';

export const SomeComponent = (): ReactElement => {
    const store = useAppSelector((store) => store);

    return (
        <>
            <h2>Store</h2>

            <pre>{JSON.stringify(store, null, 2)}</pre>
        </>
    );
};
