import { IsInt, IsNotEmpty, IsString, Min } from "class-validator";

export class CreateGroupDto {
    @IsString()
    @IsNotEmpty( { message: 'El nombre del grupo es obligatorio' } )
    groupName: string;

    @IsString()
    @IsNotEmpty( { message: 'El nombre de la institución es obligatorio' } )
    institution: string;

    @IsString()
    @IsNotEmpty( { message: 'El nombre del líder es obligatorio' } )
    leaderName: string;

    @IsInt()
    @Min( 1, { message: 'Debe haber al menos un integrante en el grupo' } )
    memberCount: number;
}
