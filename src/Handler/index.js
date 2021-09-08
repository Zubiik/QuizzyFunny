import MockQuizz from '../Component/MockQuizz';


function App() {
if (MockQuizz.question.questionOne[1] === MockQuizz.answer.answerOne) {
  console.log("coucou");
}

  return (
    <div >
      <button>
        Test
      </button>
    </div>
  );
}

export default App;
