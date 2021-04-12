import {NavigationHelpers, NavigationProp, ParamListBase, TabNavigationState} from '@react-navigation/native';
import {BottomTabDescriptorMap, BottomTabNavigationEventMap} from '@react-navigation/bottom-tabs/src/types';

export interface ITextBox {
    text: string
}

export interface ICustomTabProps {
    state: TabNavigationState<ParamListBase>;
    descriptors: BottomTabDescriptorMap;
    navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

export interface ISearchButtonProps {
    navigation: NavigationProp<any>
}

export interface IBackButtonProps {
    navigation: NavigationProp<ParamListBase>
}

