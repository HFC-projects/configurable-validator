import { expect } from 'chai';
import {OrModule} from '../src'

describe('OrModule', () => {
    it('shouldCreate', () => {
        const orModule = new OrModule()
        expect(orModule).not.to.be.null;
    }); 
});