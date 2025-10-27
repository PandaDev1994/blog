import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';
import { drizzleDb } from '@/db/drizzle';
import { postsTable } from '@/db/drizzle/schemas';
import { and, desc, eq } from 'drizzle-orm';

export class DrizzlePostRepository implements PostRepository {
  async findAllPublic(): Promise<PostModel[]> {
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: desc(postsTable.createdAt),
      where: eq(postsTable.published, true),
    });

    return posts;
  }
  async findBySlugPublic(slug: string): Promise<PostModel> {
    const post = await drizzleDb.query.posts.findFirst({
      where: and(eq(postsTable.published, true), eq(postsTable.slug, slug)),
    });

    if (!post) throw new Error('Post não encontrado');

    return post;
  }
  async findAll(): Promise<PostModel[]> {
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: desc(postsTable.createdAt),
    });

    return posts;
  }
  async findById(id: string): Promise<PostModel> {
    const post = await drizzleDb.query.posts.findFirst({
      orderBy: desc(postsTable.createdAt),
      where: eq(postsTable.id, id),
    });

    if (!post) throw new Error('Post não encontrado');
    return post;
  }
}

(async () => {
  // const drizzleRepo = new DrizzlePostRepository();
  // const posts = await drizzleRepo.findAllPublic();
  // const postById = await drizzleRepo.findById(
  //   '76396dd3-9581-43b5-856d-fe1a78714e8c',
  // );
  // const postsAll = await drizzleRepo.findAll();
  // const postSlug = await drizzleRepo.findBySlugPublic(
  //   'os-desafios-do-trabalho-remoto-moderno',
  // );
  // posts.forEach(post => {
  //   console.log(post.slug);
  //   console.log(post.published);
  // });
  // console.log();
  // console.log();
  // console.log(postById);
  // console.log();
  // console.log();
  // postsAll.map(post => console.log(post.id, post.published));
  // console.log();
  // console.log();
  // console.log(postSlug);
})();
