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
      items: ["programming/style-guide"],
    },

    {
      type: "category",
      label: "Templates",
      collapsed: false,
      items: [
        "programming/templates/sdtm",
        "programming/templates/adam",
        "programming/templates/table",
        "programming/templates/listing",
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
      label: "General",
      collapsed: false,
      items: [
        "macros/macros-general/setup",
        "macros/macros-general/batch",
        "macros/macros-general/style-guide-checks",
        "macros/macros-general/nobs",
        "macros/macros-general/progcheck",
      ],
    },
    {
      type: "category",
      label: "SDTM",
      collapsed: false,
      items: ["macros/macros-sdtm/presdtm", "macros/macros-sdtm/postsdtm"],
    },
    {
      type: "category",
      label: "ADaM",
      collapsed: false,
      items: [
        "macros/macros-adam/preadam",
        "macros/macros-adam/postadam",
        "macros/macros-adam/suppadd",
      ],
    },
    {
      type: "category",
      label: "TFL",
      collapsed: false,
      items: [
        "macros/macros-tfl/footnotes",
        "macros/macros-tfl/pagebrkchk",
        "macros/macros-tfl/rtfbreak",
        "macros/macros-tfl/primarydata",
      ],
    },
    {
      type: "category",
      label: "Validation",
      collapsed: false,
      items: [
        "macros/macros-validation/comparenobs",
        "macros/macros-validation/proc-compare",
        "macros/macros-validation/qc-tracker",
      ],
    },
    {
      type: "category",
      label: "Lead",
      collapsed: false,
      items: ["macros/macros-lead/batch_qc"],
    },
  ],
  settingsSidebar: [
    {
      type: "category",
      label: "Settings",
      collapsed: false,
      items: ["settings/saving-settings"],
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
      items: ["settings/environment/layout", "settings/environment/appearance"],
    },
  ],
};

module.exports = sidebars;
