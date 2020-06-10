import { expect } from 'chai';
import {FormatModule} from '../src'

describe('FormatModule', () => {
    it('shouldCreate', () => {
        const formatModule = new FormatModule()
        expect(formatModule).not.to.be.null;
    }); 
});