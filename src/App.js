import './App.css';
import Typography from '@mui/material/Typography';
import ReactPlayer from 'react-player';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';

const abstract = `Attractive images and videos are the visual backbone of journalism and social media. From trailers to teaser images to image galleries,appealing visuals have only grown in importance over the past years. Especially online, eye-catching visual content can signifi-cantly impact user engagement. However, selecting the best shots from a long video or selecting the perfect image from a vast image collection is a challenging and time-consuming task. This work presents a full-stack multimedia retrieval system for the aesthetic assessment of images and video content, leveraging deep learning models trained on photographers’ expertise. Our system assesses the aesthetic qualities of images and videos basedon features identified by experts from the media industry. The system is composed of two main components: a back-end component that extracts aesthetic features and a web front-end that allows the user to input the visuals and interact with the extracted features.The system is built into a containerized application to guarantee reproducibility. 
`



const authors = `Marc Willhaus Media Technology Center ETH Zürich, Switzerland - marc.willhaus@inf.ethz.ch
Daniel Vera Nieto Media Technology Center ETH Zürich, Switzerland - daniel.veranieto@inf.ethz.ch
Clara Fernandez-Labrador Media Technology Center ETH Zürich, Switzerland - clabrador@inf.ethz.ch
Severin Klingler Media Technology Center ETH Zürich, Switzerland - severin.klingler@inf.ethz.ch,`


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='main-title-wrapper'>
          <Typography variant="h4">What’s the Fairest of Them All? Aesthetic Assessment of Visuals</Typography>
        </div>
        <Typography variant="h5" className='title-wrapper'>Abstract</Typography>
        <div className='abstract-wrapper'>
          <Typography
            variant="body1"
            display="inline"
            style={{ whiteSpace: 'pre-line' }}>{abstract}</Typography>
        </div>
        <Typography variant="h5" className='title-wrapper'>Image Application</Typography>
        <ReactPlayer url='https://www.youtube.com/watch?v=7-l6ZCE8Zyg&list=PLhPHmj8KlJnT1GuAi9nJMiakica8DW0is&index=1' />
        <Typography variant="h5" className='title-wrapper'>Video Application</Typography>
        <ReactPlayer url='https://www.youtube.com/embed/LVDERhykDOA' />
        <Typography variant="h5" className='title-wrapper'>Authors</Typography>
        <div className='text-wrapper'>
          <Typography
            variant="body1"
            display="inline"
            style={{ whiteSpace: 'pre-line' }}>{authors}</Typography>
        </div>
        <Typography variant="h5" className='title-wrapper'>Linked Repos</Typography>
        <div style={{ paddingBottom: 20 }}>
          <IconButton aria-label="home-icon" href='https://github.com/mediatechnologycenter/docker-compose-ssl-service'>
            <GitHubIcon></GitHubIcon>
          </IconButton>
          <Typography>SSL Docker Service</Typography>
          <IconButton aria-label="email-icon" href="https://github.com/mediatechnologycenter/neural-network-dockerfile" >
            <GitHubIcon></GitHubIcon>
          </IconButton>
          <Typography>Machine Learning Dockerfiles</Typography>
        </div>
        <Typography variant="h5" className='title-wrapper'>Contact</Typography>
        <div style={{ paddingBottom: 20 }}>
          <IconButton aria-label="home-icon" href='https://mtc.ethz.ch'>
            <HomeIcon></HomeIcon>
          </IconButton>
          <IconButton aria-label="email-icon" href="mailto:clabrador@inf.ethz.ch" >
            <EmailIcon></EmailIcon>
          </IconButton>
        </div>
      </header>
    </div>
  );
}

export default App;
