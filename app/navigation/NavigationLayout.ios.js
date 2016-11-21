
//build out tab navigation
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Octicons';
import {
    StackNavigation,
    TabNavigation,
    TabNavigationItem as TabItem,
} from '@exponent/ex-navigation';

import { Router } from './routes';

import { colors } from '../config/styles';

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

    render() {
        return (
          <TabNavigation
            id="main"
            navigatorUID="main"
            initialTab="recent"
          >
            <TabItem
              id="recent"
              title="Recent"
              renderIcon={(isSelected) => this.iconRenderer(isSelected, 'watch')}
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