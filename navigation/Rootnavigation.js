//Outside componenet
import * as React from 'react';
import { createNavigationContainerRef } from '@react-navigation/native';
// export const isReadyRef = React.createRef();

// export const navigationRef = React.createRef();
export const navigationRef = createNavigationContainerRef()

export function navigate(name, params) {

    if (navigationRef.isReady()) {
        navigationRef.navigate(name, params);
        // navigationRef.current?.navigate(name, params);
    }

    // } else {

    // }
}