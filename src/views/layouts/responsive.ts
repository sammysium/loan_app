import { Platform } from "react-native";

interface ISizeDetails {
    horizontalPadding: number;
}

interface DeviceGroup {
    extraSmall: ISizeDetails;
    small: ISizeDetails;
    medium: ISizeDetails;
    large: ISizeDetails;
    extraLarge: ISizeDetails;
}

interface PlatformResponsives {
    ios: {
        portrait: DeviceGroup;
        landscape: DeviceGroup;
    };
    android: {
        portrait: DeviceGroup;
        landscape: DeviceGroup;
    };
}

const platformResponsives: PlatformResponsives = {
    ios: {
        portrait: {
            extraSmall: {
                horizontalPadding: 2
            },
            small: {
                horizontalPadding: 500
            },
            medium: {
                horizontalPadding: 7
            },
            large: {
                horizontalPadding: 10
            },
            extraLarge: {
                horizontalPadding: 15
            }
        },
        landscape: {
            extraSmall: {
                horizontalPadding: 10
            },
            small: {
                horizontalPadding: 15
            },
            medium: {
                horizontalPadding: 20
            },
            large: {
                horizontalPadding: 25
            },
            extraLarge: {
                horizontalPadding: 30
            }
        },
    },
    android: {
        portrait: {
            extraSmall: {
                horizontalPadding: 2
            },
            small: {
                horizontalPadding: 5
            },
            medium: {
                horizontalPadding: 10
            },
            large: {
                horizontalPadding: 15
            },
            extraLarge: {
                horizontalPadding: 20
            }
        },
        landscape: {
            extraSmall: {
                horizontalPadding: 10
            },
            small: {
                horizontalPadding: 20
            },
            medium: {
                horizontalPadding: 30
            },
            large: {
                horizontalPadding: 40
            },
            extraLarge: {
                horizontalPadding: 50
            }
        },
    }
};


export const getSizeDetails = (isLandScape: boolean, width: number) : ISizeDetails => {
    console.log(Platform.OS, isLandScape, width)
    if (Platform.OS === "android") {
        if (!isLandScape) {
            if (width <= 600) return platformResponsives.android.portrait.extraSmall;
            if (width <= 732) return platformResponsives.android.portrait.small;
            if (width <= 869) return platformResponsives.android.portrait.medium;
            if (width <= 1280) return platformResponsives.android.portrait.large;
            return platformResponsives.android.portrait.extraLarge
        } else { // landscape
            
            if (width <= 600) return platformResponsives.android.landscape.extraSmall;
            if (width <= 732) return platformResponsives.android.landscape.small;
            if (width <= 869) return platformResponsives.android.landscape.medium;
            if (width <= 1280) return platformResponsives.android.landscape.large;
            
            return platformResponsives.android.landscape.extraLarge
        }
        
    } else {
        if (!isLandScape) {
            if (width <= 320) return platformResponsives.ios.portrait.extraSmall;
            if (width <= 375) return platformResponsives.ios.portrait.small
            if (width <= 414) return platformResponsives.ios.portrait.medium
            if (width <= 430) return platformResponsives.ios.portrait.large
            return platformResponsives.ios.portrait.large
        } else { // landscape
            if (width <= 320) return platformResponsives.ios.landscape.extraSmall
            if (width <= 375) return platformResponsives.ios.landscape.small
            if (width <= 414) return platformResponsives.ios.landscape.medium
            if (width <= 430) return platformResponsives.ios.landscape.large
            return platformResponsives.ios.landscape.extraLarge
        }

    }
};