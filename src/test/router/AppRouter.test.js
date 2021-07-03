import React from 'react';
import { mount, shallow } from "enzyme";
import { AppRouter } from '../../routers/AppRouter';
import { AuthContext } from '../../auth/AuthContext,';

describe('Pruebas en <AppRouter />', () => {
    const contexValue = {
        dispatch : jest.fn(),
        user: { logged: false }
    }
    test('debe de mostrar el login si no está autenticado', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contexValue}>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
    });
    
    test('debe de mostrar el componente de marvel', () => {
        const contexValue = {
            dispatch : jest.fn(),
            user: { logged: true, name: 'Andrés' }
        }
        const wrapper = mount(
            <AuthContext.Provider value={contexValue}>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect(wrapper.find('.navbar').exists()).toBe(true);
    })
    

});
