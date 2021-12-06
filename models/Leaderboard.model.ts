import PaymentOptionEnum from '@/enums/PaymentOption.enum';
import RoundStatusEnum from '@/enums/RoundStatus.enum';
import EarmarkTypeEnum from '@/enums/EarmarkType.enum';

export interface LeaderboardProject {
  id: string;
  completedProposals: number;
  logoUrl: string;
  title: string;
}

export interface LeaderboardProposal {
  id: string;
  title: string;
  project: LeaderboardProject;
  requestedFunding: number;
  receivedFunding: number;
  yesVotes: number;
  noVotes: number;
  effectiveVotes: number;
  isEarmarked: boolean;
  earmarkType: EarmarkTypeEnum;
  tags: string[];
  voteUrl: string;
  neededVotes: number;
}

export interface LeaderboardEarmark {
  type: EarmarkTypeEnum;
  remainingFunding: number;
}

export type LeaderboardEarmarks = {
  [key in EarmarkTypeEnum]: LeaderboardEarmark;
};

export interface Leaderboard {
  fundedProposals: LeaderboardProposal[];
  notFundedProposals: LeaderboardProposal[];
  amountProposals: number;
  maxVotes: number;
  earmarks: LeaderboardEarmarks;
  remainingGeneralFunding: number;
  paymentOption: PaymentOptionEnum;
  voteStartDate: Date;
  voteEndDate: Date;
  status: RoundStatusEnum;
  round: number;
  overallFunding: number;
  overallRequestedFunding: number;
  totalVotes: number;
}
