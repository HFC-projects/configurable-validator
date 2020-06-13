import { expect } from 'chai';
import * as sinon from 'sinon'
import {AndModule} from '../src'

import {Validator, ConstraintExecuter, ConstraintModulesFactory} from '@configurable-validator/core'

describe('AndModule', () => {
    
    let validatorMock: Validator;

    beforeEach(() => {
        validatorMock = sinon.mock(Validator)
    })
  
    it('should initialize', () => {
        const andModule = new AndModule();
        expect(andModule).not.to.be.null;

        andModule.initialize(validatorMock);

        expect(andModule).not.to.throw();
    });

    it('should throw without validator', () => {
        const andModule = new AndModule();

        andModule.initialize(null);

        expect(andModule).to.throw();
    });
    
    it('should build a constraint executer', () => {
        const andModule = new AndModule();

        andModule.initialize(validatorMock);

        const constraitChecker : ConstraintExecuter = andModule.buildConstraintExecuter({
            validation1: true,
            validation2: true
        });

        expect(typeof constraitChecker).to.equal('function');

    });


});
