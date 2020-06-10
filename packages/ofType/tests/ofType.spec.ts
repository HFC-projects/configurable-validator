import { expect } from 'chai';
import {OfTypeModule} from '../src'

describe('OfTypeModule', () => {
    it('shouldCreate', () => {
        const ofTypeModule = new OfTypeModule()
        expect(ofTypeModule).not.to.be.null;
    }); 
});