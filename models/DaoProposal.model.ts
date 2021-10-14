import DaoProposalStatusEnum from '../components/enums/DaoProposalStatus.enum';
import { Deliverable } from './Deliverable.model';
import { Project } from './Project.model';
import { Round } from './Round.model';

export interface DaoProposal {
  id: string;
  fundingRound: Round;
  project: Project;
  votes: number;
  counterVotes: number;
  requestedGrantToken: number;
  grantedToken: number;
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
