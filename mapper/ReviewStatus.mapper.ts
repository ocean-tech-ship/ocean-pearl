import ReviewStatusEnum from '@/enums/ReviewStatus.enum';

export const ReviewStatusMap: { [key in ReviewStatusEnum]: string } = {
  [ReviewStatusEnum.Pending]: 'Pending',
  [ReviewStatusEnum.Declined]: 'Declined',
  [ReviewStatusEnum.Accepted]: 'Accepted',
  [ReviewStatusEnum.Reported]: 'Reported',
};
