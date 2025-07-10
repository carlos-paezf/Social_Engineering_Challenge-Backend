import { PrimaryGeneratedColumn, Column, CreateDateColumn, Entity } from "typeorm";

@Entity()
export class Group {
    @PrimaryGeneratedColumn( 'uuid' )
    id: string;

    @Column()
    groupName: string;

    @Column()
    institution: string;

    @Column()
    leaderName: string;

    @Column()
    memberCount: number;

    @CreateDateColumn()
    createdAt: Date;
}
