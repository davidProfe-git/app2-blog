export class Recipe {
    constructor(
        public id: number,
        public title: string,
        public ingredients: string[],
        public instructions: string,
        public createdAt: Date,
        public updatedAt: Date
    ) {}

    static fromData(data: any): Recipe {
        return new Recipe(
            data.id,
            data.title,
            data.ingredients,
            data.instructions,
            data.createdAt,
            data.updatedAt
        );
    }

    // Additional methods for interacting with the database can be added here
}