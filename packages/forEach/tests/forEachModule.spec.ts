import { expect } from 'chai';
import {ForEachModule} from '../src'

describe('existsModule', () => {
    it('shouldCreate', () => {
        const foreachModule = new ForEachModule()
        expect(foreachModule).not.to.be.null;
    }); 
});