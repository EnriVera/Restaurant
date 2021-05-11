export type owner_json = {
    id: string,
    name: string,
    email: string,
    logo: string
};

export type owner = {
    id: string,
    name: string,
    email: string,
    password: string,
    logo: string,
    googleid: string,
    googleverified: boolean
};

export type owner_smtp = {
    name: string,
    email: string,
    password: string,
};

export type google = {
    id: string,
    displayName: string,
    email: string,
    verified: boolean,
    photo: string
};