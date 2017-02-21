
//build out tab navigation
import React, { Component } from 'react';
import {
    StackNavigation,
    DrawerNavigation,
    DrawerNavigationItem,
} from '@exponent/ex-navigation';
import { StyleSheet, View, Text } from 'react-native';
import { Router } from './routes';
import Icon from 'react-native-vector-icons/Octicons';
import { colors } from '../config/styles';

// Treat the TabScreen route like any other route -- you may want to set
// it as the intiial route for a top-level StackNavigation

//this is to set nav bar to white
const defaultRouteConfig = {
    navigationBar: {
        backgroundColor: 'white',
        tintColor: colors.mediumGrey,
    }
}


class NavigationLayout extends Component {
    static route = {
        navigationBar: {
            visible: false,
        }
    };

    _renderHeader() {
        return (
            <View style={styles.header}>
            </View>
        );
    }

    _renderTitle(text, iconName,  isSelected) {
        const color = isSelected ? 'black' : colors.mediumGrey
        return (
          <Text style={[styles.titleText, isSelected ? styles.selectedTitleText : {}]}>
            <Icon name={iconName} size={24} color={color} /> <Text>{text}</Text>
          </Text>
        );
    }


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
              renderTitle={isSelected => this._renderTitle('Recent', 'watch', isSelected)}
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
              renderTitle={isSelected => this._renderTitle('Random', 'smiley', isSelected)}
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
              renderTitle={isSelected => this._renderTitle('Faves', 'heart', isSelected)}
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
              renderTitle={isSelected => this._renderTitle('About', 'info', isSelected)}
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
}


    const styles = StyleSheet.create({
        header: {
            height: 20
        },
        selectedItemStyle: {
            backgroundColor: 'blue'
        },

        titleText: {
            fontWeight: 'bold',
            justifyContent: 'space-around',
            flexDirection: 'row',
            alignItems: 'center'
        },

        selectedTitleText: {
            color: 'black'
        }
    });


    export default NavigationLayout;