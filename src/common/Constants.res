// This is used for the version dropdown in the manual layouts
let allManualVersions = [("latest", "v9.1 - v10.0"), ("v9.0.0", "v8.2 - v9.0"), ("v8.0.0", "v6.0 - v8.2")]

// Used for the DocsOverview and collapsible navigation
let languageManual = version => {
  [
    ("概览", j`/docs-cn/manual/$version/introduction`),
    ("语言特性", j`/docs-cn/manual/$version/overview`),
    ("与 JS 互操作", j`/docs-cn/manual/$version/embed-raw-javascript`),
    ("构建系统", j`/docs-cn/manual/$version/build-overview`),
  ]
}

let ecosystem = [
  ("Package Index", "/packages"),
  ("rescript-react", "/docs/react/latest/introduction"),
  ("GenType", "/docs/gentype/latest/introduction"),
  ("Reanalyze", "https://github.com/reason-association/reanalyze"),
]

let tools = [("Syntax Lookup", "/syntax-lookup")]
