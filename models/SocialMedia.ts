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
  public static list(): SocialMedia[] {
    const socials: { [index: string]: any } = this;
    return Object.keys(socials).map((id) => socials[id]);
  }

  public static parse(id: string): SocialMedia | undefined {
    const socials: { [index: string]: any } = this;
    return socials[id.toUpperCase()];
  }

  public static WEBSITE = new SocialMedia('Website', web);
  public static GITHUB = new SocialMedia('GitHub', github, ['github.com']);
  public static TWITTER = new SocialMedia('Twitter', twitter, ['twitter.com']);
  public static LINKEDIN = new SocialMedia('LinkedIn', linkedin, [
    'linkedin.com',
  ]);

  public static REDDIT = new SocialMedia('Reddit', reddit, ['reddit.com']);
  public static FACEBOOK = new SocialMedia('Facebook', facebook, [
    'facebook.com',
  ]);

  public static TELEGRAM = new SocialMedia('Telegram', telegram, [
    'telegram.org',
    't.me',
  ]);

  public static DISCORD = new SocialMedia('Discord', discord, [
    'discord.com',
    'discord.gg',
  ]);

  public static MEDIUM = new SocialMedia('Medium', medium, ['medium.com']);
  public static YOUTUBE = new SocialMedia('YouTube', youtube, ['youtube.com']);

  public get Id(): string {
    return this.title.toUpperCase();
  }

  public get Title(): string {
    return this.title;
  }

  public get Icon(): object {
    return this.icon;
  }

  public get Domains(): string[] {
    return this.domains ?? [];
  }

  // eslint-disable-next-line no-useless-constructor,no-empty-function
  constructor(
    private title: string,
    private icon: object,
    private domains?: string[],
  ) {}
}
