import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number

  @Column('text', {nullable: true})
  title: string

  @Column('text', {nullable: true})
  text: string

  @Column('text', {nullable: true})
  image: string

}
