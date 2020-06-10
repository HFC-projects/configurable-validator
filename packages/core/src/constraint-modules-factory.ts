import { ConstraintConstructor, IValidator, IConstraintModule, IConstraintModulesFactory } from "./interfaces";

export class ConstraintModulesFactory implements IConstraintModulesFactory {
    constructor(private constructorsMappings: Record<string, ConstraintConstructor>) {}

    async create(constraintName: string, validator: IValidator): Promise<IConstraintModule> {
        const constructor = this.constructorsMappings[constraintName];
        const constraint = new constructor();

        await constraint.initialize?.(validator);

        return constraint;
    }
}

export class LazyConstraintModulesFactory implements IConstraintModulesFactory {
    constructor(private constructorsMappings: Record<string, () => Promise<ConstraintConstructor>>) {}

    async create(constraintName: string, validator: IValidator): Promise<IConstraintModule> {
        const lazyGetter = this.constructorsMappings[constraintName];
        const constructor = await lazyGetter();
        const constraint = new constructor();

        await constraint.initialize?.(validator);

        return constraint;
    }
}
