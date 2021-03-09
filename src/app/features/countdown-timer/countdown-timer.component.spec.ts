import { noop } from "rxjs";
import { CountdownTimerComponent } from "./countdown-timer.component";

describe("CountdownTimerComponent", () => {
  const component = new CountdownTimerComponent({ emit: noop });

  it("should init component", () => {
    expect(component).toBeDefined();
  });
});
