import React from 'react';
import './videoPage.css';
import Calculate from './Calculate';

const VideoPage = () => {
  const [videos, setVideos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const fetchData = async() =>{
    const url = 'https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=25';

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'aa984f8a54msh4494b711b6fab90p189f7djsn3c739b768da9',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
      },
    };
    try{
      const response = await fetch(url, options);
      const result = await response.json();
      setVideos(result.items);

      // console.log(result.items)
    }
    catch (error){
      // console.log(error);
    }
    finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    fetchData();
  },[]);

  return (
    <div className='video-list'>
      {loading && (
        <div className='loader'></div>
      )}
      {videos.length > 0 &&(
        <div className='video'>
          {videos.map((video) => (
              <div key={video.id.videoId} className='video-item'>
                <iframe 
                width="400"
                height="235"
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                title={video.snippet.title}
                allowFullScreen
                ></iframe>
              <div className='video-details'>
                <h3>{video.snippet.title}</h3>
                <div>{video.snippet.channelTitle}  • <Calculate publishedAt={video.snippet.publishedAt}/></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default VideoPage