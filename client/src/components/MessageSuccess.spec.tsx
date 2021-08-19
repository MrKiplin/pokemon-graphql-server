import { mount } from "enzyme";
import MessageSuccess from "./MessageSuccess";

describe("MessageError", () => {
  it("Should match props and snapshot", () => {
    const component = mount(
      <MessageSuccess {...{ message: "test-message" }} />
    );

    expect(component).toMatchSnapshot();
    expect(component.find("MessageSuccess").prop("message")).toEqual(
      "test-message"
    );
  });
});
