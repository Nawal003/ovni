export interface UserI {
    uid?: string;
    email: string;
    pass: string;
    displayName?: string;
    photoURL?: string;
    emailVerified?: boolean;
    signalement?: boolean;
    score: number;
    statut: number;
}

export class User implements UserI {
    uid = "";
    email = "";
    pass = "";
    displayName = "";
    photoURL = "";
    emailVerified?= false;
    signalement = true;
    score = 0;
    statut = 0;
}

