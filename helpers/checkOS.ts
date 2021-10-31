import iOSEnum from '~/enums/iOS.enum';

export default function checkForiOS(): boolean {
  return (
    Object.values(iOSEnum).includes(navigator.platform as iOSEnum) ||
    // iPad on iOS 13 detection
    (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
  );
}
