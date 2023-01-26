type language =
  | English
  | Chinese
  | Korean

let langDocBase = lang =>
  switch lang {
  | English => "docs"
  | Chinese => "docs-cn"
  | Korean => "docs-ko"
  }

let whichLang = (url: Url.t) =>
  if Array.length(url.base) > 0 {
    switch url.base[0] {
    | "docs-ko" => Korean
    | "docs-cn" => Chinese
    | _ => English
    }
  } else {
    English
  }
