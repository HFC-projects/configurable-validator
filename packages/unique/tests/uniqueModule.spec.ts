import { expect } from 'chai';
import {UnqiueModule} from '../src'

describe('existsModule', () => {
    it('shouldCreate', () => {
        const unqiueModule = new UnqiueModule()
        expect(unqiueModule).not.to.be.null;
    }); 
});