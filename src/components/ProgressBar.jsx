export default function ProgressBar({ progress }) {
    return (
      <div>
        <div className="author-info">
          <h2>Mohamed Lakssir</h2>
          <p className="username">@Thejokers69ML</p>
        </div>
        <h1>Progress Bar</h1>
        <div className="progress-container">
          <div
            className="progress-bar"
            style={{ "--progress-width": `${progress}%` }}
          ></div>
        </div>
        <p className="progress-text">{progress}% Complete</p>
      </div>
    );
  }