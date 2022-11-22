interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: string;
    name: string;
    phoneNumber: string;
    profilePic: string;
}

export interface Technology extends SanityBody {
    _type: "skill";
    image: image;
    progress: number;
    title: string;
}

export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}