import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class User {
    @Prop() userid: string;
    @Prop() name: string;
    @Prop() avatar: string;
}

export class Organization extends Document {
    @Prop({ type: [User] }) users: User[];
    @Prop({ required: true }) label: string;
    @Prop({ default: true }) show: boolean;
    @Prop({ type: User }) owner: User;
}

export const OrganizationSchema = SchemaFactory.createForClass(Organization);