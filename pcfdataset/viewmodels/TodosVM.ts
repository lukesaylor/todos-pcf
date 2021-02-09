import { decorate } from "mobx";
import { ControlContextService, ServiceProvider } from "pcf-react";

export class TodosVM {
    static serviceProviderName = "TodosVM";
    private serviceProvider: ServiceProvider;
    private controlContext: ControlContextService;

    constructor(serviceProvider: ServiceProvider) {
        this.serviceProvider = serviceProvider;
        this.controlContext = this.serviceProvider.get(ControlContextService.serviceProviderName)
    }
}

decorate(TodosVM, {
    ...
})