// Brand convention for nominal typing
export interface MajorCredits {
  credits: number;
  readonly __brand: "MajorCredits"; // unique marker
}

export interface MinorCredits {
  credits: number;
  readonly __brand: "MinorCredits"; // unique marker
}

export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "MajorCredits",
  };
}

export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "MinorCredits",
  };
}
