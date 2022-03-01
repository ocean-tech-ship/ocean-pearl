import { Funding } from './Funding.model';

export interface Metrics {
  fundingRound: number;
  totalDaoProposals: number;
  startDate: Date;
  submissionEndDate: Date;
  votingStartDate: Date;
  endDate: Date;
  totalRequestedFunding: Funding;
  totalVotes: number;
}
