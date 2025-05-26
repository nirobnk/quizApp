import { useState } from "react";
import QUIZ_DATA from "./Questions";


export default function SoftwareTestingQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);

    const isCorrect = answerIndex === QUIZ_DATA[currentQuestion].correctAnswer;
    const newAnswer = {
      questionId: QUIZ_DATA[currentQuestion].id,
      selected: answerIndex,
      correct: QUIZ_DATA[currentQuestion].correctAnswer,
      isCorrect: isCorrect,
    };

    setUserAnswers([...userAnswers, newAnswer]);

    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < QUIZ_DATA.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setUserAnswers([]);
    setQuizCompleted(false);
  };

  const getScoreColor = () => {
    const percentage = (score / QUIZ_DATA.length) * 100;
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  if (quizCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Quiz Completed! 🎉
              </h1>
              <div className={`text-6xl font-bold mb-4 ${getScoreColor()}`}>
                {score}/{QUIZ_DATA.length}
              </div>
              <p className="text-xl text-gray-600">
                You scored {Math.round((score / QUIZ_DATA.length) * 100)}%
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Review Your Answers:
              </h2>
              <div className="space-y-4">
                {QUIZ_DATA.map((question, index) => {
                  const userAnswer = userAnswers[index];
                  return (
                    <div key={question.id} className="border rounded-lg p-4">
                      <h3 className="font-semibold text-gray-800 mb-2">
                        {index + 1}. {question.question}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {question.options.map((option, optionIndex) => {
                          let bgColor = "bg-gray-50";
                          if (optionIndex === question.correctAnswer) {
                            bgColor = "bg-green-100 border-green-500";
                          } else if (
                            optionIndex === userAnswer.selected &&
                            !userAnswer.isCorrect
                          ) {
                            bgColor = "bg-red-100 border-red-500";
                          }

                          return (
                            <div
                              key={optionIndex}
                              className={`p-2 rounded border ${bgColor}`}
                            >
                              {option}
                              {optionIndex === question.correctAnswer && (
                                <span className="ml-2 text-green-600 font-semibold">
                                  ✓ Correct
                                </span>
                              )}
                              {optionIndex === userAnswer.selected &&
                                !userAnswer.isCorrect && (
                                  <span className="ml-2 text-red-600 font-semibold">
                                    ✗ Your Answer
                                  </span>
                                )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={resetQuiz}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Take Quiz Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestionData = QUIZ_DATA[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-3xl font-bold text-gray-800">
                Software Testing & QA Quiz
              </h1>
              <div className="text-sm text-gray-500">
                Question {currentQuestion + 1} of {QUIZ_DATA.length}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${((currentQuestion + 1) / QUIZ_DATA.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              {currentQuestionData.question}
            </h2>

            {/* Answer Options */}
            <div className="grid grid-cols-1 gap-4">
              {currentQuestionData.options.map((option, index) => {
                let buttonClass =
                  "w-full p-4 text-left border-2 rounded-lg transition-all duration-200 hover:border-blue-300";

                if (showResult) {
                  if (index === currentQuestionData.correctAnswer) {
                    buttonClass +=
                      " bg-green-100 border-green-500 text-green-800";
                  } else if (
                    index === selectedAnswer &&
                    selectedAnswer !== currentQuestionData.correctAnswer
                  ) {
                    buttonClass += " bg-red-100 border-red-500 text-red-800";
                  } else {
                    buttonClass += " bg-gray-50 border-gray-200";
                  }
                } else {
                  buttonClass += " border-gray-200 hover:bg-blue-50";
                }

                return (
                  <button
                    key={index}
                    onClick={() => !showResult && handleAnswerSelect(index)}
                    className={buttonClass}
                    disabled={showResult}
                  >
                    <div className="flex items-center">
                      <span className="font-semibold mr-3 text-gray-500">
                        {String.fromCharCode(65 + index)}.
                      </span>
                      <span>{option}</span>
                      {showResult &&
                        index === currentQuestionData.correctAnswer && (
                          <span className="ml-auto text-green-600 font-bold">
                            ✓
                          </span>
                        )}
                      {showResult &&
                        index === selectedAnswer &&
                        selectedAnswer !==
                          currentQuestionData.correctAnswer && (
                          <span className="ml-auto text-red-600 font-bold">
                            ✗
                          </span>
                        )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Result Display */}
          {showResult && (
            <div className="mb-6">
              <div
                className={`p-4 rounded-lg ${
                  selectedAnswer === currentQuestionData.correctAnswer
                    ? "bg-green-100 border border-green-300"
                    : "bg-red-100 border border-red-300"
                }`}
              >
                <div className="flex items-center mb-2">
                  {selectedAnswer === currentQuestionData.correctAnswer ? (
                    <>
                      <span className="text-green-600 font-bold text-lg mr-2">
                        ✓
                      </span>
                      <span className="text-green-800 font-semibold">
                        Correct!
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="text-red-600 font-bold text-lg mr-2">
                        ✗
                      </span>
                      <span className="text-red-800 font-semibold">Wrong!</span>
                    </>
                  )}
                </div>
                <p className="text-gray-700">
                  <strong>Explanation:</strong>{" "}
                  {currentQuestionData.explanation}
                </p>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <div className="text-gray-600">
              Score: {score}/{currentQuestion + (showResult ? 1 : 0)}
            </div>

            {showResult && (
              <button
                onClick={handleNextQuestion}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                {currentQuestion === QUIZ_DATA.length - 1
                  ? "Finish Quiz"
                  : "Next Question"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
