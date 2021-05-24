export class SocialMedia {
  public static parse(id: string): SocialMedia {
    switch (id) {
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
        throw new Error('Provided social media ´' + id + '` cannot be resolved')
    }
  }

  public static WEBSITE = new SocialMedia(
    'WEBSITE',
    'Website',
    require('@/assets/images/social/website.svg')
  )

  public static GITHUB = new SocialMedia(
    'GITHUB',
    'GitHub',
    require('@/assets/images/social/github.svg')
  )

  public static TWITTER = new SocialMedia(
    'TWITTER',
    'Twitter',
    require('@/assets/images/social/twitter.svg')
  )

  public static LINKEDIN = new SocialMedia(
    'LINKEDIN',
    'LinkedIn',
    require('@/assets/images/social/linkedin.svg')
  )

  public static REDDIT = new SocialMedia(
    'REDDIT',
    'Reddit',
    require('@/assets/images/social/reddit.svg')
  )

  public static FACEBOOK = new SocialMedia(
    'FACEBOOK',
    'Facebook',
    require('@/assets/images/social/facebook.svg')
  )

  public static TELEGRAM = new SocialMedia(
    'TELEGRAM',
    'Telegram',
    require('@/assets/images/social/telegram.svg')
  )

  public static DISCORD = new SocialMedia(
    'DISCORD',
    'Discord',
    require('@/assets/images/social/discord.svg')
  )

  public get Id(): string {
    return this.id
  }

  public get Title(): string {
    return this.title
  }

  public get Icon(): string {
    return this.icon
  }

  // eslint-disable-next-line no-useless-constructor
  constructor(
    private id: string,
    private title: string,
    private icon: string
  ) {}
}
