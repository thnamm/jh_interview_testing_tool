import React from "react";
import * as css from "./ReviewPageWarning.module.scss";

class ReviewPageWarning extends React.Component {
  closeWarning() {
    document.getElementById("reviewPageWarning").style.display = "none";
  }

  render() {
    return (
      <div id="reviewPageWarning" className={css.container}>
        <div className={css.warningText}>
          If you want to write down your reviews or scores for this interviewee, please visit us on a bigger screen (laptop, PC)
        </div>
        <div className={css.closeButton} onClick={this.closeWarning}>
          Get it. Go through!
        </div>
      </div>
    )
  }
}

export default ReviewPageWarning;