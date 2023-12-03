import './CustomerVideos.css'

const CustomerVideos = () => {

    const videos = []

  return (
    <div className='videos-div'>
        <div className='videos-container'>
            <p className='videos-heading'>videos from our customers</p>
            <div className='videos-holder'>
                {videos.map((video) => (
                    <div key={video.id} className='video-white-boundary'>
                        <div className='video-dotted-boundary'>
                            <div className='video-'></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default CustomerVideos
