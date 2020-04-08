import React from 'react';
import renderer from 'react-test-renderer'
import Accordion from'./Accordion'

describe('accordion',()=>{

    it('renders empty li when section props null',() =>{
        expect(
            renderer.create(<Accordion/>).toJSON()
            ).toMatchSnapshot()
    })
})
