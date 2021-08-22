import { mount } from "enzyme";
import PageHeader from "./PageHeader";

describe("PageHeader", () => {
  it("Should match props and snapshot", () => {
    const component = mount(
      <PageHeader
        {...{ header: "test-header", subHeader: "test-sub-header" }}
      />
    );

    expect(component).toMatchSnapshot();
    expect(component.find("PageHeader").prop("header")).toEqual("test-header");
    expect(component.find("PageHeader").prop("subHeader")).toEqual(
      "test-sub-header"
    );
  });
});
