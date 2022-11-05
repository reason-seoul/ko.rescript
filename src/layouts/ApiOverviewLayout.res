module Sidebar = SidebarLayout.Sidebar

let categoriesOf: (~lang: LangUtil.language) => array<Sidebar.Category.t> = 
  (~lang: LangUtil.language) => {
  let docPath = LangUtil.langDocBase(lang)
  [
    {
      name: "Introduction",
      items: [{name: "Overview", href: `/${docPath}/manual/latest/api`}],
    },
    {
      name: "Modules",
      items: [
        {name: "Js Module", href: `/${docPath}/manual/latest/api/js`},
        {name: "Belt Stdlib", href: `/${docPath}/manual/latest/api/belt`},
        {name: "Dom Module", href: `/${docPath}/manual/latest/api/dom`},
      ],
    },
  ]
}

/* Used for API docs (structured data) */
module Docs = {
  @react.component
  let make = (~lang=LangUtil.English, ~components=ApiMarkdown.default, ~children) => {
    let title = "API"
    let version = "latest"
    let categories = categoriesOf(~lang)
    <ApiLayout title categories version components> children </ApiLayout>
  }
}

/*
 This layout is used for structured prose text with proper H2 headings.
 We cannot really use the same layout as with the Docs module, since they
 have different semantic styling and do things such as hiding the text
 of H2 nodes.
 */
/* module Prose = { */
/* @react.component */
/* let make = (~children) => <Docs components=Markdown.default> children </Docs> */
/* } */
