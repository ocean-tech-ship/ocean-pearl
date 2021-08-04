export interface Round {
    id: string;
    round: number;
    maxGrant: number;
    earmarked: number;
    availableFunding: number;
    submissionEndDate: Date;
    votingStartDate: Date;
    votingEndDate: Date;
}