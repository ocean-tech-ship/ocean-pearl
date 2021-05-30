export class SocialMedia {
  public static parse(id: string): SocialMedia | null {
    switch (id.toLowerCase()) {
      case 'website':
        return this.WEBSITE
      case 'github':
        return this.GITHUB
      case 'twitter':
        return this.TWITTER
      case 'linkedin':
        return this.LINKEDIN
      case 'reddit':
        return this.REDDIT
      case 'facebook':
        return this.FACEBOOK
      case 'telegram':
        return this.TELEGRAM
      case 'discord':
        return this.DISCORD
      default:
        return null
    }
  }

  public static WEBSITE = new SocialMedia('Website')
  public static GITHUB = new SocialMedia('GitHub')
  public static TWITTER = new SocialMedia('Twitter')
  public static LINKEDIN = new SocialMedia('LinkedIn')
  public static REDDIT = new SocialMedia('Reddit')
  public static FACEBOOK = new SocialMedia('Facebook')
  public static TELEGRAM = new SocialMedia('Telegram')
  public static DISCORD = new SocialMedia('Discord')

  public get Id(): string {
    return this.title.toUpperCase()
  }

  public get Title(): string {
    return this.title
  }

  public get Icon(): string {
    return require(`@/assets/images/social/${this.title.toLowerCase()}.svg`)
  }

  // eslint-disable-next-line no-useless-constructor
  constructor(private title: string) {}
}
