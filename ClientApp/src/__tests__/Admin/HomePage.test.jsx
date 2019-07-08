import React from 'react'
import { shallow } from '../../setupTests';
import { _HomePage as HomePage, SideBar } from '../../components/Admin/HomePage';

describe('Homepage test suite', () => {

    let component;
    beforeEach(() => {
        component = shallow(<HomePage />);
    });

    it('renders correctly', () => {
        expect(component).toHaveLength(1);
    });
});