export default class TweetBox extends React.Component {
  render() {
    return (
      <div className="input-field">
        <form>
          <textarea className="materialize-textarea" />
          <label>What's happening?</label>
          <button className="btn right">Tweet</button>
        </form>
      </div>
    );
  }
}

