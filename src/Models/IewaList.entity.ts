import {Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryColumn, UpdateDateColumn} from "typeorm";
import {ApiProperty} from "@nestjs/swagger";
import {BusinessOwner} from "./BusinessOwner";


@Entity()
export class IewaList {
    @PrimaryColumn({unique: true})
    @ApiProperty()
    id: number;

    @Column()
    @ApiProperty()
    name: string;

    @Column({ nullable: true })
    @ApiProperty()
    firstName: string;

    @Column({ nullable: true })
    @ApiProperty()
    job: string;

    @Column({ type: 'text', nullable: true})
    @ApiProperty()
    bio: string;

    @Column({  nullable: true})
    @ApiProperty()
    yearsOfExperience: string;

    @Column({ nullable: true })
    @ApiProperty()
    jobType: string;

    @Column({ nullable: true })
    @ApiProperty()
    englishLevel: string;

    @Column({  nullable: true})
    @ApiProperty()
    expectedSalary: string;

    @Column({ nullable: true })
    @ApiProperty()
    nationality: string;

    @Column({ nullable: true })
    @ApiProperty()
    np: string;

    @Column({ nullable: true })
    @ApiProperty()
    gender: string;

    @Column({ nullable: true })
    @ApiProperty()
    senority: string;

    @Column('simple-array', { nullable: true })
    @ApiProperty()
    languages: string[];

    @Column('simple-array', { nullable: true })
    @ApiProperty()
    libraries: string[];

    @Column('simple-array', { nullable: true })
    @ApiProperty()
    tools: string[];

    @Column('simple-array', { nullable: true })
    @ApiProperty()
    storage: string[];

    @Column('simple-array', { nullable: true })
    @ApiProperty()
    frameworks: string[];

    @Column('simple-array', { nullable: true })
    @ApiProperty()
    paradigms: string[];

    @Column('simple-array', { nullable: true })
    @ApiProperty()
    platforms: string[];

    @Column('simple-array', { nullable: true })
    @ApiProperty()
    skills: string[];

    @Column({ nullable: true })
    @ApiProperty()
    project: string;

    @ManyToOne(() => BusinessOwner, businessOwner => businessOwner.iewaList)
    businessOwner: BusinessOwner;







    @CreateDateColumn()
    @ApiProperty()
    created_at: Date;
    @UpdateDateColumn()
    @ApiProperty()
    updated_at: Date;


}