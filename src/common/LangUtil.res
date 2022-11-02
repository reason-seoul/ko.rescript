type language = 
    | English
    | Chinese

let langDocBase = (lang) => 
    switch lang {
    | English => "docs"
    | Chinese => "docs-cn"
    }


let whichLang = (url: Url.t) => 
    if Array.length(url.base) > 0 {
        switch url.base[0] {
        | "docs-cn" => Chinese
        | _ => English
        }
    }
    else{
        English
    }
