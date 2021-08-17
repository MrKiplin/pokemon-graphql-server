import { mount } from "enzyme";
import MessageAlertError from "./message-error";

describe("MessageAlertError", () => {
  it("Should match props and snapshot", () => {
    const component = mount(
      <MessageAlertError {...{ message: "test-message" }} />
    );

    expect(component).toMatchSnapshot();
    expect(component.find("MessageAlertError").prop("message")).toBe(
      "test-message"
    );
  });
});
