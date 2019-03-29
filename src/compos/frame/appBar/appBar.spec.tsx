import * as React from "react";
import { mount } from "enzyme";

import ButtonAppBar from "./appBar";

it("renders the heading", () => {
    const result = mount(<ButtonAppBar/>).contains('News');
    expect(result).toBeTruthy();
});
