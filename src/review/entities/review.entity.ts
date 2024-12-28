import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number

  @Column({type: 'text'})
  text: string

  @Column({type: 'int'})
  rating: number

  @Column({type: 'simple-array', nullable: true})
  imageSet: string[]

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
