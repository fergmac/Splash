import {
    createRouter,
} from '@exponent/ex-navigation';

import NavigationLayout from './NavigationLayout';
import Random from '../scenes/Random';
import Recent from '../scenes/Recent';
import Faves from '../scenes/Faves';
import About from '../scenes/About';
import User from '../scenes/User';

export const Router = createRouter(() => ({
    navigationLayout: () => NavigationLayout,
    random: () => Random,
    recent: () => Recent,
    faves: () => Faves,
    about: () => About,
    user: ()=> User,
}));
