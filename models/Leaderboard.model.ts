import PaymentOptionEnum from '@/enums/PaymentOption.enum';
import RoundStatusEnum from '@/enums/RoundStatus.enum';

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
  tags: string[];
  voteUrl: string;
  neededVotes: number;
}

export interface Leaderboard {
  fundedProposals: LeaderboardProposal[];
  notFundedProposals: LeaderboardProposal[];
  amountProposals: number;
  maxVotes: number;
  remainingEarmarkFunding: number;
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
