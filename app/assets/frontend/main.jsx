import TweetBox from './components/TweetBox.jsx';
import TweetsList from './components/TweetsList.jsx';

let mockTweets = [
  { id: 1, name: 'Sid Ngeth', body: 'My #FirstTweet' },
  { id: 2, name: 'Sid Ngeth', body: 'My #SeconndTweet' },
  { id: 3, name: 'Sid Ngeth', body: 'My #ThirdTweet' },
];

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <TweetBox />
        <TweetsList tweets={mockTweets}/>
      </div>
    );
  }
}

let documentReady = () => {
  ReactDOM.render(
    <Main />,
    document.getElementById('react')
  );
};

$(documentReady);
