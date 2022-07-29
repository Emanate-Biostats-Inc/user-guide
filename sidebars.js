/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  programmingSidebar: [
    {
      type: "category",
      label: "Programming",
      items: ["programming/programming-intro", "programming/style-guide"],
    },

    {
      type: "category",
      label: "Templates",
      collapsed: false,
      items: [
        "programming/templates/sdtm",
        "programming/templates/adam",
        "programming/templates/table",
      ],
    },
    {
      type: "category",
      label: "Set Up",
      collapsed: false,
      items: ["programming/set-up/init"],
    },
    {
      type: "category",
      label: "Listings",
      collapsed: false,
      items: ["programming/listings/cell-width"],
    },
  ],
  macrosSidebar: [
    {
      type: "category",
      label: "Macros",
      collapsed: false,
      items: ["macros/macros-intro", "macros/using-this-guide"],
    },
    {
      type: "category",
      label: "Validation",
      collapsed: false,
      items: [
        "macros/macros-validation/comparenobs",
        "macros/macros-validation/proc-compare",
        {
          type: "category",
          label: "Listings",
          collapsed: false,
          items: ["macros/macros-validation/listings/primarydata"],
        },
      ],
    },
    {
      type: "category",
      label: "SDTM",
      collapsed: false,
      items: ["macros/macros-sdtm/sdtm-pre", "macros/macros-sdtm/sdtm-post"],
    },
    {
      type: "category",
      label: "ADaM",
      collapsed: false,
      items: ["macros/macros-adam/mergesupp"],
    },
  ],
  settingsSidebar: [
    {
      type: "category",
      label: "Settings",
      collapsed: false,
      items: ["settings/settings-intro"],
    },
    {
      type: "category",
      label: "Shortcuts",
      collapsed: false,
      items: ["settings/shortcuts/keys", "settings/shortcuts/abbreviations"],
    },
    {
      type: "category",
      label: "Environment",
      collapsed: false,
      items: [
        "settings/environment/saving-settings",
        "settings/environment/layout",
        "settings/environment/appearance",
      ],
    },
    {
      type: "category",
      label: "Preferences",
      collapsed: false,
      items: ["settings/preferences/results"],
    },
  ],
};

module.exports = sidebars;
