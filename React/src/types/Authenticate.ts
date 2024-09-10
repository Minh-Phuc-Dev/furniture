type UserAttributes = {
    tenant?: {
        id: string;
        name: string;
        addedAt: string;
    }
    phone?: string
    address?: string
    position?: string
};

type UserMeta = {
    lastAccess?: string;
    passwordUpdatedAt?: string;
    creator?: {
        id: string;
        username: string;
        displayName: string;
    }
};

type TwoFactor = {
    enable: boolean;
    secret: string;
    type: string;
    updatedAt: Date;
};

type UserSecurity = {
    twoFactor: TwoFactor;
    passwordHistory?: string[];
};

export type User = {
    id: string
    username: string
    status: string
    type: string
    email: string
    displayName: string
    createdAt: string
    updatedAt: string | null
    attributes?: UserAttributes;
    meta?: UserMeta;
    security?: UserSecurity;
}

export type Token = {
    expiredAt: string
    id: string
}


export type Authenticated = {
    user: User
    token: Token
}