import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { PrivateRoute } from '../../routers/PrivateRoute';

describe('Pruebas en <PrivateRoute />', () => {
  const props = {
    location: {
      pathname: '/marvel',
    },
  };

  Storage.prototype.setItem = jest.fn();

  test('debe de mostrar el componente si esta autenticado y guardar localStorage', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute isAuthenticated={true} component={() => <span>Componente</span>} {...props} />
      </MemoryRouter>
    );

    expect(wrapper.find('span').exists()).toBe(true);
    expect(localStorage.setItem).toHaveBeenCalledWith('lasPath', '/marvel');
  });

  test('debe de bloquear el componente si no está bloqueado', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute isAuthenticated={true} component={() => <span>Componente</span>} {...props} />
      </MemoryRouter>
    );

    expect(wrapper.find('span').exists()).toBe(false);
    expect(localStorage.setItem).toHaveBeenCalledWith('lasPath', '/marvel');
  });
});
