module td
{
    /**
     * Represents a type that refers to another reflection like a class, interface or enum.
     *
     * ~~~
     * var value:MyClass;
     * ~~~
     */
    export class ReferenceType extends Type
    {
        /**
         * The name of the referenced type.
         *
         * If the symbol cannot be found cause it's not part of the documentation this
         * can be used to represent the type.
         */
        name:string;

        /**
         * The type arguments of this reference.
         */
        typeArguments:Type[];

        /**
         * The symbol id of the referenced type as returned from the TypeScript compiler.
         *
         * After the all reflections have been generated this is can be used to lookup the
         * relevant reflection with [[ProjectReflection.symbolMapping]].
         */
        symbolID:number;

        /**
         * The resolved reflection.
         *
         * The [[TypePlugin]] will try to set this property in the resolving phase.
         */
        reflection:Reflection;



        /**
         * Create a new instance of ReferenceType.
         *
         * @param name        The name of the referenced type.
         * @param symbolID    The symbol id of the referenced type as returned from the TypeScript compiler.
         * @param reflection  The resolved reflection if already known.
         */
        constructor(name:string, symbolID:number, reflection?:Reflection) {
            super();
            this.name = name;
            this.symbolID = symbolID;
            this.reflection = reflection;
        }


        /**
         * Return a raw object representation of this type.
         */
        toObject():any {
            var result:any = super.toObject();
            result.type = 'reference';
            result.name = this.name;
            result.symbolID = this.symbolID;
            return result;
        }


        /**
         * Return a string representation of this type.
         */
        toString() {
            if (this.reflection) {
                return this.reflection.name + (this.isArray ? '[]' : '');
            } else {
                return this.name + (this.isArray ? '[]' : '');
            }
        }
    }
}