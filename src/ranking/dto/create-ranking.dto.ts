import { IsInt, IsUUID, Min } from "class-validator";

export class CreateRankingDto {
    @IsUUID()
    groupId: string;

    @IsInt()
    @Min( 0 )
    timeTaken: number;

    @IsInt()
    @Min( 1 )
    attempts: number;
}
