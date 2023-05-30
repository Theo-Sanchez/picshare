export interface AccountBody {
    username: string;
    password: string;
};

export interface ProfileBody extends SocialNetwork {
    lastname: string;
    firstname: string;
    birthdate?: string;
    mail: string;
    profilePicture?: string;
    job?: string;
    location?: string;
};

export interface SocialNetwork {
    instagram?: string;
    facebook?: string;
    twitter?: string;
}


export interface User {
    account: AccountBody;
    profile: ProfileBody;
};
