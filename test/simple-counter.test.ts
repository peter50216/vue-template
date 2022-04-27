import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";

import SimpleCounter from "/~/components/simple-counter.vue";

test("counter", async () => {
  expect(SimpleCounter).toBeTruthy();

  const wrapper = mount(SimpleCounter);

  expect(wrapper.text()).toContain("Here's a counter: 0");

  await wrapper.get("button").trigger("click");

  expect(wrapper.text()).toContain("Here's a counter: 1");

  await wrapper.get("button").trigger("click");

  expect(wrapper.text()).toContain("Here's a counter: 2");
});
