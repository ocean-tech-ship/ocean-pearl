import DaoProposalStatusEnum from '../enums/DaoProposalStatus.enum';
import { Deliverable } from './Deliverable.model';
import { Funding } from './Funding.model';
import { Project } from './Project.model';
import { Round } from './Round.model';

export interface DaoProposal {
  id: string;
  fundingRound: Round;
  project: Project;
  yesVotes: number;
  noVotes: number;
  requestedFunding: Funding;
  receivedFunding: Funding;
  status: DaoProposalStatusEnum;
  walletAddress: string;
  paymentWalletsAddresses: string[];
  title: string;
  description: string;
  category: string;
  oceanProtocolPortUrl: string;
  deliverables: Deliverable[];
  fundamentalMetric: string;
  ipfsHash: string;
  snapshotBlock: number;
  voteUrl: string;
  images?: string[];
  createdAt: Date;
  updatedAt: Date;
}
