export interface IUser {
    auth_id: string;
    email: string;
    emailVerified: boolean;
    displayName: string;
    photoUrl: string | null;
}