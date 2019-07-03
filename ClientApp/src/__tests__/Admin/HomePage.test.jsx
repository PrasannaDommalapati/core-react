import React from 'react'
import {shallow} from '../../setupTests';
import HomePage, { SideBar } from '../../components/Admin/HomePage';

describe('Homepage test suite', () => {

    let component;
    beforeEach(()=>{
        component = shallow(<HomePage/>);
    })
    it('renders correctly',() => {
        expect(component).toHaveLength(1);
    });

    it('renders sidebar',() => {
        expect(component).toContainReact(<SideBar/>)
    });

});