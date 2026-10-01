export interface StrongPasswordOptions {
    minLength?: number;
    maxLength?: number;
    requireUppercase?: boolean;
    requireLowercase?: boolean;
    requireNumber?: boolean;
    requireSpecialChar?: boolean;
    specialChars?: string;
}
export declare const isStrongPassword: (str: unknown, options?: StrongPasswordOptions) => boolean;
