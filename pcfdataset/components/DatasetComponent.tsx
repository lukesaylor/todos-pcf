import * as React from "react";
import { ServiceProvider } from "pcf-react";
export interface DatasetComponentProps {
  serviceProvider: ServiceProvider;
}
export class DatasetComponent extends React.Component<DatasetComponentProps> {
  render(): JSX.Element {
    return <>Foo</>;
  }
}
