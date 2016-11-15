//build out tab navigation
import React, { Component } from 'react';
import {
    StackNavigation,
    TabNavigation,
    TabNavigationItem as TabItem,
} from '@exponent/ex-navigation';

import { Router } from './routes';

// Treat the TabScreen route like any other route -- you may want to set
// it as the intiial route for a top-level StackNavigation

class NavigationLayout extends Component {
    static route = {
        navigationBar: {
            visible: false,
        }
    }

    render() {
        return (
            <TabNavigation
                id="main"
                navigatorUID="main"
                initialTab="recent">
                <TabItem
                    id="recent"
                    title="Recent"
                    // selectedStyle={styles.selectedTab}
                    // renderIcon={(isSelected) => <Image source={require('../images/recent.png')} />} 
                    >
                    <StackNavigation
                        id="recent"
                        navigatorUID="recent"
                        initialRoute={Router.getRoute('recent')}
                        />
                </TabItem>

                <TabItem
                    id="random"
                    title="Random"
                    // selectedStyle={styles.selectedTab}
                    // renderIcon={(isSelected) => <Image source={require('../images/random.png')} />}
                    >
                    <StackNavigation
                        id="random"
                        initialRoute={Router.getRoute('random')}
                        />
                </TabItem>

                <TabItem
                    id="faves"
                    title="Faves"
                    // selectedStyle={styles.selectedTab}
                    // renderIcon={(isSelected) => <Image source={require('../images/faves.png')} />}
                    >
                    <StackNavigation
                        id="faves"
                        initialRoute={Router.getRoute('faves')}
                        />
                </TabItem>

                <TabItem
                    id="about"
                    title="About"
                    // selectedStyle={styles.selectedTab}
                    // renderIcon={(isSelected) => <Image source={require('../images/about.png')} />}
                    >
                    <StackNavigation
                        id="about"
                        initialRoute={Router.getRoute('about')}
                        />
                </TabItem>
            </TabNavigation>
        );
    }
}
export default NavigationLayout;