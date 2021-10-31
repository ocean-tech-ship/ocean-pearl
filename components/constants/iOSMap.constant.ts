import iOSEnum from '../../enums/iOS.enum';

export const iOSMap: { [key in iOSEnum]: string } = {
  [iOSEnum.iPadSimulator]: 'iPad Simulator',
  [iOSEnum.iPhoneSimulator]: 'iPhone Simulator',
  [iOSEnum.iPodSimulator]: 'iPod Simulator',
  [iOSEnum.iPad]: 'iPad',
  [iOSEnum.iPhone]: 'iPhone',
  [iOSEnum.iPod]: 'iPod',
};
