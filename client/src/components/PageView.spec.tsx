import { mount } from "enzyme";
import PageView from "./PageView";

describe("PageView", () => {
  it("Should match props and snapshot", () => {
    const component = mount(<PageView {...{ title: "test-title" }} />);

    expect(component).toMatchSnapshot();
    expect(component.find("PageView").prop("title")).toEqual("test-title");
  });
});
