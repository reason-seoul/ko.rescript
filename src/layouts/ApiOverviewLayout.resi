module Docs: {
  @react.component
  let make: (~lang: LangUtil.language=?, ~components: Mdx.Components.t=?, 
             ~children: React.element) => React.element
}
