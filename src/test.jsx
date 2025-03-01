import React from "react";
import ReactToPrint from "react-to-print";

class Test extends React.Component {
  render() {
    return (
      <div>
        <div ref={(refer) => (this.componentRef = refer)}>
          Export my HTMl component to a PDF File
        </div>

        <ReactToPrint
          content={() => this.componentRef}
          trigger={() => (
            <button className="btn btn-primary">Print to PDF!</button>
          )}
        />
      </div>
    );
  }
}

export default Test;
