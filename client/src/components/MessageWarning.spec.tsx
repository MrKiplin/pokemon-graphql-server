import { mount } from "enzyme";
import MessageWarning from "./MessageWarning";

describe("MessageWarning", () => {
  it("Should match props and snapshot", () => {
    const component = mount(
      <MessageWarning {...{ message: "test-message" }} />
    );

    expect(component).toMatchSnapshot();
    expect(component.find("MessageWarning").prop("message")).toEqual(
      "test-message"
    );
  });
});
