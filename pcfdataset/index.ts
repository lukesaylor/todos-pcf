import { IInputs, IOutputs } from "./generated/ManifestTypes";
import { StandardControlReact } from "pcf-react";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { DatasetComponent } from "./components/DatasetComponent";

export class pcfdataset extends StandardControlReact<IInputs, IOutputs> {
  constructor() {
    super();
    this.renderOnParametersChanged = false;
    this.renderOnDatasetChanged = false;
    this.reactCreateElement = (container, width, height, serviceProvider): void => {
      ReactDOM.render(
        React.createElement(DatasetComponent, {
          serviceProvider: serviceProvider,
        }),
        container,
      );
    };
  }
}
