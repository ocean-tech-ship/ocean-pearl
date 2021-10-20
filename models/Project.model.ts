import { DaoProposal } from './DaoProposal.model';
import { SocialMedia } from './SocialMedia.model';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  socialMedia: SocialMedia;
  logo?: string;
  pictures?: string[];
  daoProposals: DaoProposal;
  teamName: string;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProjectTier {
  src: string,
  alt: string,
}
