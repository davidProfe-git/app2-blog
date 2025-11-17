export class User {
    constructor(
        public id: number,
        public username: string,
        public email: string,
        public password: string,
        public createdAt: Date,
        public updatedAt: Date
    ) {}

    // Method to save the user to the database
    save() {
        // Implementation for saving the user
    }

    // Method to find a user by ID
    static findById(id: number) {
        // Implementation for finding a user by ID
    }

    // Method to find a user by username
    static findByUsername(username: string) {
        // Implementation for finding a user by username
    }

    // Method to update user details
    update() {
        // Implementation for updating user details
    }

    // Method to delete the user
    delete() {
        // Implementation for deleting the user
    }
}