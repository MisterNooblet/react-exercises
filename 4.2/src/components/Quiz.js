import QuizTitle from "./QuizTitle";
import Q1 from "./Q1/Q1";
import Q2 from "./Q2/Q2";
import "./Quiz.css"
function Quiz() {
    return (
        <div className="quizContainer">
            <QuizTitle />
            <Q1 />
            <Q2 />
        </div>
    );
}

export default Quiz;