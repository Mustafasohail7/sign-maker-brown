import './CustomerVideos.css'

import video_img from '../../assets/banner-img.jpg'

const CustomerVideos = () => {

    const videos = [
        {id:0, image:video_img},
        {id:1, image:video_img},
        {id:2, image:video_img},
    ]

  return (
    <div className='videos-div'>
        <div className='videos-container'>
            <p className='videos-heading'>videos from our customers</p>
            <div className='videos-holder'>
                {videos.map((video) => (
                    <div key={video.id} className={`video-white-boundary ${video.id===1 ? 'center' : ''}`}>
                        <div className='video-dotted-boundary'>
                            <div className='video-holder'>
                                <img src={video.image} className='video-img' />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default CustomerVideos
