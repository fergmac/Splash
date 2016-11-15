//build out tab navigation
import React, { Component } from 'react';
import {
    StackNavigation,
    TabNavigation,
    TabNavigationItem as TabItem,
} from '@exponent/ex-navigation';

import { Router } from './routes';
import Icon from 'react-native-vector-icons/Octicons';
import { colors } from '../config/styles';

// Treat the TabScreen route like any other route -- you may want to set
// it as the intiial route for a top-level StackNavigation

//this is to set nav bar to white
const defaultRouteConfig = {
    navigationBar: {
        backgroundColor: 'white',
    }
}


class NavigationLayout extends Component {
    static route = {
        navigationBar: {
            visible: false,
        }
    }

    iconRenderer(isSelected, iconName) {
        const color = isSelected ? 'black' : colors.mediumGrey
        return <Icon name={iconName} size={24} color={color} />
    }

    // renderTitleFunction here


    render() {
        return (
            <TabNavigation
                id="main"
                navigatorUID="main"
                initialTab="recent">
                <TabItem
                    id="recent"
                    title="Recent"
                    renderIcon={(isSelected) => this.iconRenderer(isSelected, 'watch')}
                    // selectedStyle={styles.selectedTab}
                    // renderIcon={(isSelected) => <Image source={require('../images/recent.png')} />} 
                    >
                    <StackNavigation
                        id="recent"
                        navigatorUID="recent"
                        initialRoute={Router.getRoute('recent')}
                        defaultRouteConfig={defaultRouteConfig}
                        />
                </TabItem>

                <TabItem
                    id="random"
                    title="Random"
                    renderIcon={(isSelected) => this.iconRenderer(isSelected, 'smiley')}
                    // selectedStyle={styles.selectedTab}
                    // renderIcon={(isSelected) => <Image source={require('../images/random.png')} />}
                    >
                    <StackNavigation
                        id="random"
                        initialRoute={Router.getRoute('random')}
                        defaultRouteConfig={defaultRouteConfig}
                        />
                </TabItem>

                <TabItem
                    id="faves"
                    title="Faves"
                    renderIcon={(isSelected) => this.iconRenderer(isSelected, 'heart')}
                    // selectedStyle={styles.selectedTab}
                    // renderIcon={(isSelected) => <Image source={require('../images/faves.png')} />}
                    >
                    <StackNavigation
                        id="faves"
                        initialRoute={Router.getRoute('faves')}
                        defaultRouteConfig={defaultRouteConfig}
                        />
                </TabItem>

                <TabItem
                    id="about"
                    title="About"
                    renderIcon={(isSelected) => this.iconRenderer(isSelected, 'info')}
                    // selectedStyle={styles.selectedTab}
                    // renderIcon={(isSelected) => <Image source={require('../images/about.png')} />}
                    >
                    <StackNavigation
                        id="about"
                        initialRoute={Router.getRoute('about')}
                        defaultRouteConfig={defaultRouteConfig}
                        />
                </TabItem>
            </TabNavigation>
        );
    }
}
export default NavigationLayout;