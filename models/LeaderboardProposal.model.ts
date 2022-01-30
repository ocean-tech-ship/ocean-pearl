import EarmarkTypeEnum from '../enums/EarmarkType.enum';

export interface LeaderboardProject {
    id: string;
    completedProposals: number;
    logoUrl: string;
    title: string;
  }
  
  export type GrantPoolShare = {
    [key in EarmarkTypeEnum]: number;
  };
  
  export interface NeededVotes {
    fullyFunded: number;
    partiallyFunded?: number;
  }
  
  export interface LeaderboardProposal {
    id: string;
    title: string;
    project: LeaderboardProject;
    requestedFunding: number;
    receivedFunding: number;
    grantPoolShare: GrantPoolShare;
    yesVotes: number;
    noVotes: number;
    effectiveVotes: number;
    isEarmarked: boolean;
    earmarkType: EarmarkTypeEnum;
    tags: string[];
    voteUrl: string;
    neededVotes: NeededVotes;
  }