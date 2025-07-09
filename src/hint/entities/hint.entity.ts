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

  @Column( 'simple-array' )
  comments: string[];

  @Column()
  likes: number;

  @Column()
  profileName: string;

  @Column( { nullable: true } )
  profileAvatar: string;
}


