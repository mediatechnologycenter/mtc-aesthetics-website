import './App.css';
import Typography from '@mui/material/Typography';
import ReactPlayer from 'react-player'
import GitHubIcon from '@mui/icons-material/GitHub';

const abstract = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
`


const authors = `Marc Willhaus Media Technology Center ETH Zürich, Switzerland - marc.willhaus@inf.ethz.ch
Clara Fernandez-Labrador Media Technology Center ETH Zürich, Switzerland - clabrador@inf.ethz.ch
Severin Klingler Media Technology Center ETH Zürich, Switzerland - severin.klingler@inf.ethz.ch`


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h3">What’s the Fairest of Them All? Aesthetic Assessment of Visuals</Typography>
        <Typography variant="h5">Abstract</Typography>
        <div className='abstract-wrapper'>
          <Typography
            variant="h6"
            display="inline"
            style={{ whiteSpace: 'pre-line' }}>{abstract}</Typography>
        </div>
        <Typography variant="h5">Authors</Typography>
        <div className='text-wrapper'>
          <Typography
            variant="h6"
            display="inline"
            style={{ whiteSpace: 'pre-line' }}>{authors}</Typography>
        </div>
        <Typography variant="h5">Preview</Typography>
        <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
        <Typography variant="h5">Contact</Typography>
        <div>
          <GitHubIcon></GitHubIcon>
        </div>

      </header>
    </div>
  );
}

export default App;
