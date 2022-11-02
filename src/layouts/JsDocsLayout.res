// Structure defined by `scripts/extract-indices.js`
let indexData: Js.Dict.t<{
  "moduleName": string,
  "headers": array<{
    "name": string,
    "href": string,
  }>,
}> = %raw("require('index_data/latest_js_api_index.json')")

module Category = SidebarLayout.Sidebar.Category
module NavItem = SidebarLayout.Sidebar.NavItem

let overviewNavs = (lang: LangUtil.language) => {
  let docPath = LangUtil.langDocBase(lang)
  [
    {
      open NavItem
      {name: "JS", href: "/" ++ docPath ++ "/manual/latest/api/js"}
    },
  ]
}

let apiNavs = lang => {
  let docPath = LangUtil.langDocBase(lang)
  [
    {
      open NavItem
      {name: "Array2", href: "/" ++ docPath ++ "/manual/latest/api/js/array-2"}
    },
    {name: "Array", href: "/" ++ docPath ++ "/manual/latest/api/js/array"},
    {name: "Console", href: "/" ++ docPath ++ "/manual/latest/api/js/console"},
    {name: "Date", href: "/" ++ docPath ++ "/manual/latest/api/js/date"},
    {name: "Dict", href: "/" ++ docPath ++ "/manual/latest/api/js/dict"},
    {name: "Exn", href: "/" ++ docPath ++ "/manual/latest/api/js/exn"},
    {name: "Float", href: "/" ++ docPath ++ "/manual/latest/api/js/float"},
    {name: "Global", href: "/" ++ docPath ++ "/manual/latest/api/js/global"},
    {name: "Int", href: "/" ++ docPath ++ "/manual/latest/api/js/int"},
    {name: "Json", href: "/" ++ docPath ++ "/manual/latest/api/js/json"},
    {name: "List", href: "/" ++ docPath ++ "/manual/latest/api/js/list"},
    {name: "Math", href: "/" ++ docPath ++ "/manual/latest/api/js/math"},
    {name: "NullUndefined", href: "/" ++ docPath ++ "/manual/latest/api/js/null-undefined"},
    {name: "Null", href: "/" ++ docPath ++ "/manual/latest/api/js/null"},
    {name: "Nullable", href: "/" ++ docPath ++ "/manual/latest/api/js/nullable"},
    {name: "Obj", href: "/" ++ docPath ++ "/manual/latest/api/js/obj"},
    {name: "Option", href: "/" ++ docPath ++ "/manual/latest/api/js/option"},
    {name: "Promise", href: "/" ++ docPath ++ "/manual/latest/api/js/promise"},
    {name: "Re", href: "/" ++ docPath ++ "/manual/latest/api/js/re"},
    {name: "Result", href: "/" ++ docPath ++ "/manual/latest/api/js/result"},
    {name: "String2", href: "/" ++ docPath ++ "/manual/latest/api/js/string-2"},
    {name: "String", href: "/" ++ docPath ++ "/manual/latest/api/js/string"},
    {
      name: "TypedArrayArrayBuffer",
      href: "/" ++ docPath ++ "/manual/latest/api/js/typed-array_array-buffer",
    },
    {name: "TypedArrayDataView", href: "/" ++ docPath ++ "/manual/latest/api/js/typed-array_data-view"},
    {
      name: "TypedArrayFloat32Array",
      href: "/" ++ docPath ++ "/manual/latest/api/js/typed-array_float-32-array",
    },
    {
      name: "TypedArrayFloat64Array",
      href: "/" ++ docPath ++ "/manual/latest/api/js/typed-array_float-64-array",
    },
    {
      name: "TypedArrayInt8Array",
      href: "/" ++ docPath ++ "/manual/latest/api/js/typed-array_int-8-array",
    },
    {
      name: "TypedArrayInt16Array",
      href: "/" ++ docPath ++ "/manual/latest/api/js/typed-array_int-16-array",
    },
    {
      name: "TypedArrayInt32Array",
      href: "/" ++ docPath ++ "/manual/latest/api/js/typed-array_int-32-array",
    },
    {name: "TypedArrayTypeS", href: "/" ++ docPath ++ "/manual/latest/api/js/typed-array_type-s"},
    {
      name: "TypedArrayUint8Array",
      href: "/" ++ docPath ++ "/manual/latest/api/js/typed-array_uint-8-array",
    },
    {
      name: "TypedArrayUint8ClampedArray",
      href: "/" ++ docPath ++ "/manual/latest/api/js/typed-array_uint-8-clamped-array",
    },
    {
      name: "TypedArrayUint16Array",
      href: "/" ++ docPath ++ "/manual/latest/api/js/typed-array_uint-16-array",
    },
    {
      name: "TypedArrayUint32Array",
      href: "/" ++ docPath ++ "/manual/latest/api/js/typed-array_uint-32-array",
    },
    {
      name: "TypedArray2ArrayBuffer",
      href: "/" ++ docPath ++ "/manual/latest/api/js/typed-array-2_array-buffer",
    },
    {
      name: "TypedArray2DataView",
      href: "/" ++ docPath ++ "/manual/latest/api/js/typed-array-2_data-view",
    },
    {
      name: "TypedArray2Float32Array",
      href: "/" ++ docPath ++ "/manual/latest/api/js/typed-array-2_float-32-array",
    },
    {
      name: "TypedArray2Float64Array",
      href: "/" ++ docPath ++ "/manual/latest/api/js/typed-array-2_float-64-array",
    },
    {
      name: "TypedArray2Int8Array",
      href: "/" ++ docPath ++ "/manual/latest/api/js/typed-array-2_int-8-array",
    },
    {
      name: "TypedArray2Int16Array",
      href: "/" ++ docPath ++ "/manual/latest/api/js/typed-array-2_int-16-array",
    },
    {
      name: "TypedArray2Int32Array",
      href: "/" ++ docPath ++ "/manual/latest/api/js/typed-array-2_int-32-array",
    },
    {
      name: "TypedArray2Uint8Array",
      href: "/" ++ docPath ++ "/manual/latest/api/js/typed-array-2_uint-8-array",
    },
    {
      name: "TypedArray2Uint8ClampedArray",
      href: "/" ++ docPath ++ "/manual/latest/api/js/typed-array-2_uint-8-clamped-array",
    },
    {
      name: "TypedArray2Uint16Array",
      href: "/" ++ docPath ++ "/manual/latest/api/js/typed-array-2_uint-16-array",
    },
    {
      name: "TypedArray2Uint32Array",
      href: "/" ++ docPath ++ "/manual/latest/api/js/typed-array-2_uint-32-array",
    },
    {name: "TypedArray2", href: "/" ++ docPath ++ "/manual/latest/api/js/typed-array-2"},
    {name: "TypedArray", href: "/" ++ docPath ++ "/manual/latest/api/js/typed-array"},
    {name: "Types", href: "/" ++ docPath ++ "/manual/latest/api/js/types"},
    {name: "Undefined", href: "/" ++ docPath ++ "/manual/latest/api/js/undefined"},
    {name: "Vector", href: "/" ++ docPath ++ "/manual/latest/api/js/vector"},
  ]
}

let categoriesOf = lang => [
  {
    open Category
    {name: "Overview", items: overviewNavs(lang)}
  },
  {name: "Submodules", items: apiNavs(lang)},
]

module Docs = {
  @react.component
  let make = (~components=ApiMarkdown.default, ~children) => {
    let router = Next.Router.useRouter()
    let route = router.route

    // Gather data for the CollapsibleSection
    let headers = {
      open Belt.Option
      Js.Dict.get(indexData, route)
      ->map(data =>
        data["headers"]->Belt.Array.map(header => (header["name"], "#" ++ header["href"]))
      )
      ->getWithDefault([])
    }

    let moduleName = {
      open Belt.Option
      Js.Dict.get(indexData, route)->map(data => data["moduleName"])->getWithDefault("?")
    }

    let url = route->Url.parse

    let lang = LangUtil.whichLang(url)

    let version = switch url.version {
    | Version(version) => version
    | NoVersion => "latest"
    | Latest => "latest"
    }
    let docPath =  LangUtil.langDocBase(lang)
    let prefix = {
      open Url
      {name: "API", href: "/" ++ docPath ++ "/manual/" ++ (version ++ "/api")}
    }

    let breadcrumbs = ApiLayout.makeBreadcrumbs(~prefix, route)

    let activeToc = {
      open SidebarLayout.Toc
      {
        title: moduleName,
        entries: Belt.Array.map(headers, ((name, href)) => {header: name, href: href}),
      }
    }

    let title = "JS Module"
    let version = "latest"
    let categories = categoriesOf(lang)
    <ApiLayout components title version activeToc categories breadcrumbs> children </ApiLayout>
  }
}

module Prose = {
  @react.component
  let make = (~children) => <Docs components=ApiMarkdown.default> children </Docs>
}
