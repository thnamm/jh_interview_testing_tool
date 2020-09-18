import React from "react";
import * as css from "./SetOfQA.module.scss";

// Component
import AnswerContent from "./AnswerContent/AnswerContent";

// Assets
import arrowRight from "../../../../assets/icons/arrow-right.png";
import arrowLeft from "../../../../assets/icons/arrow-left.png";

class SetOfQA extends React.Component {
  render() {
    return (
      <div className={css.setOfQA}>
        <h3 className={css.currentQuestion}>Question: <span>{this.props.isBigScreen ? this.props.currentQA.questionContent : this.props.limitedQuestionContent}</span></h3>
        <AnswerContent currentQA={this.props.currentQA} />
        <div className={css.navigation}>
          <div className={css.arrowButton} onClick={() => this.props.navigateQA(-1)}>
            <img src={arrowLeft} alt="arrow left navigation" />
          </div>
          <div className={css.arrowButton} onClick={() => this.props.navigateQA(1)}>
            <img src={arrowRight} alt="arrow right navigation" />
          </div>
        </div>
      </div>
    )
  }
}

export default SetOfQA;