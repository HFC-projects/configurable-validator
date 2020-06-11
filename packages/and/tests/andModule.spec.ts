import { expect } from 'chai';

import { mock, when } from 'ts-mockito';

import {AndModule} from '../src'

import {Validator, ConstraintExecuter} from '@configurable-validator/core'

describe('existsModule', () => {

    let validator: Validator;

    beforeEach(() => {
        const validatorMock : Validator = mock(Validator)
        when(validatorMock.validate()).
    })

    it('should initialize', () => {
        const andModule = new AndModule()
        expect(andModule).not.to.be.null;

        andModule.initialize(validator);

        expect(andModule).not.to.throw();
    });

    it('should throw without validator', () => {
        const andModule = new AndModule()
        expect(andModule).not.to.be.null;

        andModule.initialize(null);

        expect(andModule).to.throw();
    });
    
    it('should build a constraint executer', () => {
        const andModule = new AndModule()
        expect(andModule).not.to.be.null;

        andModule.initialize(validator);

        const constraitChecker : ConstraintExecuter = andModule.buildConstraintExecuter({
            validation1: true,
            validation2: true
        });

        constraitChecker();

    });


});