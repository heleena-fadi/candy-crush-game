const ScoreBoard = ({ score }) => {
    return (
      <>
      <div className="container">
      <h1 className="title">your score</h1>
      <div className="score-board"> 
        <h2 className="score-point">{score}</h2>
      </div>

      </div>
      </>
    )
  }
  
  export default ScoreBoard;