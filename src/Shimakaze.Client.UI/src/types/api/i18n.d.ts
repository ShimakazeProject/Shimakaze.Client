declare namespace ApiTypes {
  export interface I18nMetadata {
    language: string
    author: string
  }
  export interface I18n {
    metadata: I18nMetadata
    lang: Record<string, string>
  }
}
