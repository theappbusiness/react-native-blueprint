import {Dimensions, Platform} from 'react-native';

const {height, width} = Dimensions.get('window');

export const WINDOW_DEVICE_WIDTH = width;
export const WINDOW_DEVICE_HEIGHT = height;
export const IS_IOS = Platform.OS === 'ios';

export const NO_CONTENT_ERR = 'No case study found. Check back later!';
