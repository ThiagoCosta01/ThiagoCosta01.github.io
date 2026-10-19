
export const certificationIds = [
  "english-it",
  "sap-abap",
  "clean-code-abap",
] as const;

export type CertificationId =
  (typeof certificationIds)[number];

type CredentialBase = {
  id: CertificationId;
  title?: string;
  issuer: string;
  description?: string;
  image?: string;
  issuedOn?: `${number}-${number}`;
  credentialUrl?: string;
  skills?: string[];
};

export type Certification = CredentialBase & {
  type: "certification";
  expiresOn?: `${number}-${number}`;
};

export type Course = CredentialBase & {
  type: "course";
  workloadHours?: number;
  startedOn?: `${number}-${number}`;
};

export type AcademicDegree = CredentialBase & {
  type: "degree";
  institution: string;
  startedOn?: `${number}-${number}`;
  workloadHours?: number;
};

export type Credential =
  | Certification
  | Course
  | AcademicDegree;
