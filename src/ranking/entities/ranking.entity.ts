import { PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn, Entity } from "typeorm";
import { Group } from "../../group/entities/group.entity";

@Entity()
export class Ranking {
    @PrimaryGeneratedColumn( 'uuid' )
    id: string;

    @ManyToOne( () => Group, { eager: true } )
    @JoinColumn( { name: 'groupId' } )
    group: Group;

    @Column( { type: "integer" } )
    timeTaken: number;

    @Column( { type: "integer" } )
    attempts: number;

    @Column( { type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' } )
    completedAt: Date;
}
