import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import { PageTitle } from "../../index";
import notes from "./PageTitle.md";

export default {
  title: "Components / PageTitle",
  component: PageTitle,
  decorators: [withKnobs, withA11y],
  parameters: {
    notes: { notes },
    propTypes: PageTitle,
  },
};

export const Default = () => (
  <div>
    <PageTitle title={text("title", "Page Title 1")} ctdetails={() => {
      return <span className="PageTitle--ct_name"> CT Title </span>
    }}></PageTitle>
  </div>
);
