enum Access {
    PUBLIC = 'PUBLIC',
    MEMBERSHIP = 'MEMBERSHIP',
    PRIVATE = 'PRIVATE',
    PREMIUM = 'PREMIUM'
}
export interface Course {
    id: string;
    name: string;
    description: string;
    urlPath: string;
    imageURL: string;
    access: Access;
    createdAt: Date;
    updatedAt: Date;
    sections: Section[];


}
export interface Section {
    id: string;
    name: string;
    description: string;
    urlPath: string;
}