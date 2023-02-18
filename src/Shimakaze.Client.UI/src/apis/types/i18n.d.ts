declare namespace ApiTypes{
  export interface I18n {
    metadata: {
      language: string
      author: string
    }
    lang: {
      uid: Record<string, string>
    }
  }
}
