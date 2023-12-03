import './Blog.css'

const Blog = () => {

    const blogs = []

    const side_blogs = []

  return (
    <div className='blogs-div'>
        <div className='blogs-container'>
            <div className='main-blogs-container'>
                {blogs.map((blog) => (
                    <div key={blog.id} className='main-blog'>
                        <div className='main-blog-img-place'>
                            <img className='main-blog-img' />
                        </div>
                        <p className='main-blog-title'>{blog.title}</p>
                        <p className='main-blog-content'></p>
                        <div className='main-blog-read-more'>
                            <button className='read-more-btn'>read more</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='side-blogs-container'>
            {side_blogs.map((side_blog) => (
                <div className='side-blog'>
                    <div key={side_blog.id} className='side-blog-img-place'>
                        <img className='side-blog-img'/>
                    </div>
                    <div>
                        <p className='side-blog-title'>{side_blog.title}</p>
                        <p className='side-blog-content'>{side_blog.content}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Blog
