import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HorizonalMenu from './HorizonalMenu';

describe('<HorizonalMenu />', () => {
  test('it should mount', () => {
    render(<HorizonalMenu />);
    
    const horizonalMenu = screen.getByTestId('HorizonalMenu');

    expect(horizonalMenu).toBeInTheDocument();
  });
});