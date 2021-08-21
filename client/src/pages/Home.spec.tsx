import { mount } from "enzyme";
import Home from "./Home";

describe("Home", () => {
  it("Should match props and snapshot", () => {
    const component = mount(<Home {...{ title: "test-title" }} />);

    expect(component).toMatchSnapshot();
    expect(component.find("Home").prop("title")).toEqual("test-title");
  });
});
