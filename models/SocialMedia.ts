import web from '@iconify/icons-mdi/web';
import github from '@iconify/icons-la/github';
import twitter from '@iconify/icons-la/twitter';
import linkedin from '@iconify/icons-la/linkedin';
import reddit from '@iconify/icons-la/reddit';
import facebook from '@iconify/icons-la/facebook';
import telegram from '@iconify/icons-la/telegram';
import discord from '@iconify/icons-la/discord';
import medium from '@iconify/icons-la/medium';
import youtube from '@iconify/icons-la/youtube';

export class SocialMedia {
  public static parse(id: string): SocialMedia | null {
    switch (id.toLowerCase()) {
      case 'website':
        return this.WEBSITE;
      case 'github':
        return this.GITHUB;
      case 'twitter':
        return this.TWITTER;
      case 'linkedin':
        return this.LINKEDIN;
      case 'reddit':
        return this.REDDIT;
      case 'facebook':
        return this.FACEBOOK;
      case 'telegram':
        return this.TELEGRAM;
      case 'discord':
        return this.DISCORD;
      case 'medium':
        return this.MEDIUM;
      case 'youtube':
        return this.YOUTUBE;
      default:
        return null;
    }
  }

  public static WEBSITE = new SocialMedia('Website', web);
  public static GITHUB = new SocialMedia('GitHub', github);
  public static TWITTER = new SocialMedia('Twitter', twitter);
  public static LINKEDIN = new SocialMedia('LinkedIn', linkedin);
  public static REDDIT = new SocialMedia('Reddit', reddit);
  public static FACEBOOK = new SocialMedia('Facebook', facebook);
  public static TELEGRAM = new SocialMedia('Telegram', telegram);
  public static DISCORD = new SocialMedia('Discord', discord);
  public static MEDIUM = new SocialMedia('Medium', medium);
  public static YOUTUBE = new SocialMedia('YouTube', youtube);

  public get Id(): string {
    return this.title.toUpperCase()
  }

  public get Title(): string {
    return this.title
  }

  public get Icon(): object {
    return this.icon;
  }

  // eslint-disable-next-line no-useless-constructor,no-empty-function
  constructor(private title: string, private icon: object) {}
}
