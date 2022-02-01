import PaymentOptionEnum from '@/enums/PaymentOption.enum';
import RoundStatusEnum from '@/enums/RoundStatus.enum';
import EarmarkTypeEnum from '@/enums/EarmarkType.enum';
import { LeaderboardProposal } from './LeaderboardProposal.model';

export type LeaderboardGrantPools = {
  [key in EarmarkTypeEnum]: GrantPool;
};

export interface GrantPool {
  type: EarmarkTypeEnum;
  totalFunding: number;
  remainingFunding: number;
  potentialRemainingFunding?: number;
}

export interface Leaderboard {
  fundedProposals: LeaderboardProposal[];
  partiallyFundedProposals: LeaderboardProposal[];
  notFundedProposals: LeaderboardProposal[];
  amountProposals: number;
  maxVotes: number;
  grantPools: LeaderboardGrantPools;
  paymentOption: PaymentOptionEnum;
  votingStartDate: Date;
  votingEndDate: Date;
  status: RoundStatusEnum;
  round: number;
  overallFunding: number;
  overallRequestedFunding: number;
  totalVotes: number;
}
