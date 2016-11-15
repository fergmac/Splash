import {
    createRouter,
} from '@exponent/ex-navigation';

import Random from '../scenes/Random';

export const Router = createRouter(() => ({
    random: () => Random,
}));