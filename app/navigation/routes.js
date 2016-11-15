import {
    createRouter,
} from '@exponent/ex-navigation';

import NavigationLayout from './NavigationLayout';
import Random from '../scenes/Random';
import Recent from '../scenes/Recent';
import Faves from '../scenes/Faves';
import About from '../scenes/About';

export const Router = createRouter(() => ({
    navigationLayout: () => NavigationLayout,
    random: () => Random,
    recent: () => Recent,
    faves: () => Faves,
    about: () => About,
}));

//navigation layout in initial route