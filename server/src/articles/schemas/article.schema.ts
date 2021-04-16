import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ArticleDocument = Article & Document;

@Schema()
export class Article {
    @Prop({ required: true })
    story_id: number;

    @Prop()
    title: string;

    @Prop()
    story_title: number;

    @Prop()
    story_url: string;

    @Prop()
    url: string;

    @Prop({ required: true })
    author: string;

    @Prop({ required: true })
    created_at: string;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);