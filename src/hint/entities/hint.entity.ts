import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Hint {
  @PrimaryGeneratedColumn( 'uuid' )
  id: string;

  @Column()
  imageUrl: string;

  @Column()
  postDate: string;

  @Column()
  description: string;

  @Column( 'text', { array: true } )
  comments: string[];

  @Column()
  likes: number;

  @Column()
  profileName: string;

  @Column( { type: 'text', nullable: true } )
  profileAvatar?: string | null;
}


