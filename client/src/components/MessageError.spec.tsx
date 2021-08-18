import { mount } from "enzyme";
import MessageError from "./MessageError";

describe("MessageError", () => {
  it("Should match props and snapshot", () => {
    const component = mount(<MessageError {...{ message: "test-message" }} />);

    expect(component).toMatchSnapshot();
    expect(component.find("MessageError").prop("message")).toEqual(
      "test-message"
    );
  });
});
