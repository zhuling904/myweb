export interface SOCIAL {
    title: string;
    link: string;
    info?: string;
}

export interface WEBINFO {
    author?: string;
    roles?: string[];
    motto?: string;
    avatarImg?: string;
    social?: SOCIAL[];
    likes?: number;
    visitors: number;
}