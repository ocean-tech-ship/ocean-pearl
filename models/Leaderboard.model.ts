export interface LeaderboardProposal {
  id: string;
  title: string;
  requestedFunding: number;
  receivedFunding: number;
  yesVotes: number;
  noVotes: number;
  effectiveVotes: number;
  isEarmarked: boolean;
  tags: string[];
  completedProposals: number;
  voteUrl: string;
  neededVotes: number;
}

export interface Leaderboard {
  fundedProposals: LeaderboardProposal[];
  notFundedProposals: LeaderboardProposal[];
  maxVotes: number;
  voteEndDate: Date;
}
