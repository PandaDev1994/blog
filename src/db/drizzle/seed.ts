import { JsonPostRepository } from '@/repositories/post/json-post-repository';
import { drizzleDb } from '.';
import { postsTable } from './schemas';

(async () => {
  const jsonPostRepository = new JsonPostRepository();
  const posts = await jsonPostRepository.findAllPublic();

  try {
    await drizzleDb.delete(postsTable);
    await drizzleDb.insert(postsTable).values(posts);
    console.log('Seeding posts...');
  } catch (error) {
    console.log(error);
  }
})();
