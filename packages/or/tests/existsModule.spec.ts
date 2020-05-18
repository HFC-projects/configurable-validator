import { expect } from 'chai';
import {ExistsModule} from '../src'

describe('existsModule', () => {
    it('shouldCreate', () => {
        const existsModule = new ExistsModule()
        expect(existsModule).not.to.be.null;
    }); 
});