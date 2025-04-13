export default function ProgressBar({ progress }) {
  return (
    <div>
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