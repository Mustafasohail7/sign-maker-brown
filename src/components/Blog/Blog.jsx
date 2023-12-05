import './Blog.css'

import blog_1 from '../../assets/blog_1.png'
import blog_2 from '../../assets/blog_2.png'
import side_blog_1 from '../../assets/side_blog_1.png'
import side_blog_2 from '../../assets/side_blog_2.png'

import arrow from '../../assets/arrow-left.svg'
import { useState } from 'react'

const Blog = ({isMobile}) => {

    const [selectedBlog,setSelectedBlog] = useState(0)

    const blogs = [
        {id:0, title:'the perfect gift', text:'Giving a gift is a way to show that you care about someone.With abcHome, your gift will be both personal, create coziness and certainly also joy.', image:blog_1},
        {id:1, title:'your childs safety', text:'Getting children to sleep safely and well at night can be a challenge for many parents.', image:blog_2}
    ]

    const side_blogs = [
        {id:0, title:'harmless & child friendly', text: 'our letters are not only a unique', image:side_blog_1},
        {id:1, title:'harmless & child friendly', text: 'our letters are not only a unique', image:side_blog_2},
    ]

    const handlePrev = () => {
        if(selectedBlog === 0){
            setSelectedBlog(blogs.length - 1)
        }else{
            setSelectedBlog(selectedBlog - 1)
        }
    }

    const handleNext = () => {
        if(selectedBlog === blogs.length - 1){
            setSelectedBlog(0)
        }else{
            setSelectedBlog(selectedBlog + 1)
        }
    }

  return (
    <div className='blogs-div'>
        <div className='blogs-container'>
            <div className='main-blogs-container'>
                <div className={`arrow-place-blogs ${isMobile ? '' : 'hide'}`} onClick={handlePrev}>
                    <img className='arrow-blogs' src={arrow} />
                </div>
                {blogs.map((blog) => {
                    if(isMobile && blog.id !== selectedBlog) return null
                    return (
                        <div key={blog.id} className='main-blog'>
                            <div className='main-blog-img-place'>
                                <img className='main-blog-img' src={blog.image}/>
                            </div>
                            <p className='main-blog-title'>{blog.title}</p>
                            <p className='main-blog-content'>{blog.text}</p>
                            <div className='main-blog-read-more'>
                                <button className='read-more-btn'>read blog</button>
                            </div>
                        </div>
                    )
                })}
                <div className={`arrow-place-blogs right ${isMobile ? '' : 'hide'}`} onClick={handlePrev}>
                    <img className='arrow-blogs' src={arrow} />
                </div>
            </div>
            <div className='side-blogs-container'>
            {side_blogs.map((side_blog) => (
                <div key={side_blog.id} className='side-blog'>
                    <div className='side-blog-img-place'>
                        <img className='side-blog-img' src={side_blog.image}/>
                    </div>
                    <div className='side-blog-info-container'>
                        <p className='side-blog-title'>{side_blog.title}</p>
                        <p className='side-blog-content'>{side_blog.text}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Blog
