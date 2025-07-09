export class CreateHintDto {
    imageUrl: string;
    postDate: string;
    description: string;
    comments: string[];
    likes: number;
    profileName: string;
    profileAvatar?: string;
}
