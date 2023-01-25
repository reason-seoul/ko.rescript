// This is used for the version dropdown in the manual layouts
let allManualVersions = [
  ("latest", "v9.1 - v10.0"),
  ("v9.0.0", "v8.2 - v9.0"),
  ("v8.0.0", "v6.0 - v8.2"),
]
let allReactVersions = [("latest", "v0.11.0"), ("v0.10.0", "v0.10.0")]

// Used for the DocsOverview and collapsible navigation
let languageManual = version => {
  [
    ("언어 소개", j` /docs-ko/manual/${version}/introduction`),
    ("언어적 특징", j`/docs-ko/manual/${version}/overview`),
    ("JS 인터롭", j`/docs-ko/manual/${version}/embed-raw-javascript`),
    ("빌드 시스템", j`/docs-ko/manual/${version}/build-overview`),
  ]
}

let ecosystem = [
  ("Package Index", "/packages"),
  ("rescript-react", "/docs/react/latest/introduction"),
  ("GenType", "/docs/gentype/latest/introduction"),
  ("Reanalyze", "https://github.com/reason-association/reanalyze"),
]

let tools = [("문법 검색기", "/syntax-lookup")]
