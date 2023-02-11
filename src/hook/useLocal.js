import React, { useContext } from 'react';

// Components
import { AuthContext } from '../components/context';
import en from '../components/Helper/en';
import mm from '../components/Helper/mm';
export const useLocal = () => {
    const { lang } = useContext(AuthContext);
    if (lang === 'en') {
        return en;
    } else {
        return mm;
    }
};
