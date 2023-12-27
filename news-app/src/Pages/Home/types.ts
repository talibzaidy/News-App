export enum ChipFilterEnum {
  APPLE = "apple",
  META = "meta",
  NETFLIX = "netflix",
  GOOGLE = "google",
  TWITTER = "twitter",
  TESLA = "tesla",
}

export type ChipFilterType =
  | ChipFilterEnum.APPLE
  | ChipFilterEnum.META
  | ChipFilterEnum.NETFLIX
  | ChipFilterEnum.GOOGLE
  | ChipFilterEnum.TWITTER
  | ChipFilterEnum.TESLA;
