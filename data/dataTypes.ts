import { ImageSourcePropType } from "react-native";

export type RootDrawerParamList = {
    Home: undefined;
};

export interface checkListDataType {
        id: number;
        title: string;
        pending: boolean;
        description: string;
        time: string;
}

export interface servicesDataType {
        id: number;
        title: string;
        description: string;
        img: ImageSourcePropType;
}