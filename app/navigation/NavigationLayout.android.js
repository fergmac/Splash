//build out tab navigation
import React, { Component } from 'react';
import {
    StackNavigation,
    DrawerNavigation,
    DrawerNavigationItem,
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
            <DrawerNavigation
                id="main"
                drawerWidth={300}
                renderHeader={this._renderHeader}
                initialItem="recent">
                <DrawerNavigationItem
                    id="recent"
                    title="Recent"
                    renderIcon={isSelected => this._iconRenderer('watch', isSelected)}
                    // selectedStyle={styles.selectedTab}
                    // renderIcon={(isSelected) => <Image source={require('../images/recent.png')} />} 
                    >
                    <StackNavigation
                        id="recent"
                        navigatorUID="recent"
                        initialRoute={Router.getRoute('recent')}
                        defaultRouteConfig={defaultRouteConfig}
                        />
                </DrawerNavigationItem>

                <DrawerNavigationItem
                    id="random"
                    title="Random"
                    renderIcon={isSelected => this._iconRenderer('smiley', isSelected)}
                    // selectedStyle={styles.selectedTab}
                    // renderIcon={(isSelected) => <Image source={require('../images/random.png')} />}
                    >
                    <StackNavigation
                        id="random"
                        initialRoute={Router.getRoute('random')}
                        defaultRouteConfig={defaultRouteConfig}
                        />
                </DrawerNavigationItem>

                <DrawerNavigationItem
                    id="faves"
                    title="Faves"
                    renderIcon={isSelected => this._iconRenderer('heart', isSelected)}
                    // selectedStyle={styles.selectedTab}
                    // renderIcon={(isSelected) => <Image source={require('../images/faves.png')} />}
                    >
                    <StackNavigation
                        id="faves"
                        initialRoute={Router.getRoute('faves')}
                        defaultRouteConfig={defaultRouteConfig}
                        />
                </DrawerNavigationItem>

                <DrawerNavigationItem
                    id="about"
                    title="About"
                    renderIcon={isSelected => this._iconRenderer('info', isSelected)}
                    // selectedStyle={styles.selectedTab}
                    // renderIcon={(isSelected) => <Image source={require('../images/about.png')} />}
                    >
                    <StackNavigation
                        id="about"
                        initialRoute={Router.getRoute('about')}
                        defaultRouteConfig={defaultRouteConfig}
                        />
                </DrawerNavigationItem>
            </DrawerNavigation>
        );
    }
      _renderHeader = () => {
    return (
      <View style={styles.header}>
      </View>
    );
  };

  _renderTitle() {
    return (
      <Text style={[styles.titleText, isSelected ? styles.selectedTitleText : {}]}>
        {text}
      </Text>
    );
  };
}
const styles = StyleSheet.create({
  header: {
    height: 20
  },

  selectedItemStyle: {
    backgroundColor: 'blue'
  },

  titleText: {
    fontWeight: 'bold'
  },

  selectedTitleText: {
    color: 'white'
  }
});
export default NavigationLayout;