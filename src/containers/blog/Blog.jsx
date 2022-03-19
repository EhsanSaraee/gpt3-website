import { Article } from '../../components';
import { blogData } from '../../database/blogData';
import { blog01 } from './imports';

const Blog = () => {
   return (
      <section className="gpt3__blog section__padding" id="blog">
         <div className="gpt3__blog-heading">
            <h1 className="gradient__text">
               A lot is happening, <br /> We are blogging about it.
            </h1>
         </div>
         <div className="gpt3__blog-container">
            <div className="gpt3__blog-container_groupA">
               <Article
                  imgUrl={blog01}
                  date="Sep 26, 2021"
                  text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
               />
            </div>
            <div className="gpt3__blog-container_groupB">
               {blogData?.map((blog) => (
                  <Article key={blog.id} {...blog} />
               ))}
            </div>
         </div>
      </section>
   );
};

export default Blog;
