import React from 'react';
import { create } from 'react-test-render';
import ProfileStatus from "./ProfileStatus";

describe('Profile status component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status='it-kamasutra.com'/>);

        const root = component.root;
        expect(root.state.text).toBe('it-kamasutra.com');
    });
    test('after creation span should be contains with correct status', () => {
        const component = create(<ProfileStatus status='it-kamasutra.com'/>);

        const root = component.root;
        let span = root.findByType('span');
        expect(span.innerText).toBe('it-kamasutra.com');
    })
});