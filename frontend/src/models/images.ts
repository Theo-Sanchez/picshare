import Vote from "@-models/votes"
import Comment from "@-models/comments"

export interface ImageData {
    title: string;
    link: string;
    isPublic: boolean;
    totalVote: number;
    totalComment: number;
    votes: Vote[];
    comments: Comment[];
}