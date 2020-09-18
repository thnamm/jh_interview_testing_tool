import React from "react";
import * as css from "./MobileNavbar.module.scss";

// Assets
import menu from "../../../../assets/icons/menu.png";

class MobileNavbar extends React.Component {
  render() {
    return (
      <div className={css.mobileNavbar}>
        <div className={css.menuButton} onClick={this.props.showMenuBar}>
          <img src={menu} alt="menu" />
        </div>
        <div className={css.orderOfCurrentPage}><span>{this.props.currentQA.id + 1 || 0}</span>/{this.props.resultOfTest.answerList && this.props.resultOfTest.answerList.length}</div>
      </div>
    )
  }
}

export default MobileNavbar;