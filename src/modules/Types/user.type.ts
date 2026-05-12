export interface User {
    userId: number;

    lastName?: string;
    firstName?: string;

    email: string;

    role?: 'user' | 'admin';

    gender?: 'male' | 'female';

    password?: string;

    dateOfBirth?: string;

    createdAt?: string;

    updatedAt?: string;
}

export interface UserAddress {
    addressId: number;

    userId?: number;

    address?: string;

    ward?: string;

    district?: string;

    city?: string;

    isDefault?: boolean;

    createdAt?: string;

    updatedAt?: string;
}