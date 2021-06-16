import {NavigationProp, RouteProp} from '@react-navigation/native';

export type StackParamList = {
    Area: undefined,
    Search: undefined,
    AreaRegion: {
        key: string
    },
    AreaDetail: {
        title : string
    }
}

export interface IAreaDetailProps {
    navigation : NavigationProp<StackParamList , 'AreaDetail'>,
    route: RouteProp<StackParamList, 'AreaDetail'>
}

export interface IAreaProps {
    navigation: NavigationProp<StackParamList , 'Area'>
}

export interface IAreaRegionProps {
    navigation: NavigationProp<StackParamList, 'AreaRegion'>
    route: RouteProp<StackParamList, 'AreaRegion'>
}

export interface IAreaItemProps {
    item: IAreaData
    index: number
    onSwitch: Function
}

export interface IAreaSubItemProps {
    item: IAreaSubData,
    index: number,
    onPress: Function
}

export interface IAreaData {
    key: string,
    active: boolean,
    list: string[]
}

export interface IAreaSubData {
    key: string
}

export interface IChartComponentStyledProps {
    height: number,
    width: number
}

export interface IAreaChartComponentProps {
    text: string,
    open: boolean
}
