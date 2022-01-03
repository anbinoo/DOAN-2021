const { BigNumber } = require("@ethersproject/bignumber");

export const JOB_CORE_ADDRESS = "0xb833A55b1C6036E24ec7dd13AcBE4d059C146eb5",
                                0xE4208e98727E64691c7b399703592dE888d46387;

export const JOB_CORE_METHODS = {
  getLatestRecruiterId: "getLatestRecruiterId",
  recruiters: "recruiters",
  getLatestJobId: "getLatestJobId",
  getJob: "getJob",
  getJobs: "getJobs(uint256,uint256)",
  jobOwner: "jobOwner",
  recruiterToId: "recruiterToId",
  addJob: "addJob",
  getOwnerJobs: "getOwnerJobs",
  jobs: "jobs",
  updateCurrentResume: "updateCurrentResume",
  getCurrentResume: "getCurrentResume",
  addResume: "addResume",
  getOwnerResumes: "getOwnerResumes",
  isAppliedJob: "isAppliedJob",
  isResumeApplied: "isResumeApplied",
  applyJob: "applyJob",
  getAppliedJobs: "getAppliedJobs",
};

export const OneBigNumber = BigNumber.from("1");
export const ZeroBigNumber = BigNumber.from("0");

export const LOCATIONS = {
  ALL: "Tất cả",
  HA_NOI: "Hà Nội",
  HO_CHI_MINH: "Hồ Chí Minh",
  DA_NANG: "Đà Nẵng",
  OTHER: "Khác",
};

export const SKILLS = {
  BLOCKCHAIN: "Blockchain",
  JAVASCRIPT: "Javascript",
  HTML_CSS: "HTML & CSS",
  DATABASE: "Database",
  GIT: "Git",
  OTHER: "Other",
};

export const CANDIDATE_MODAL_TITLE = {
  ADD_EDUCATION: "Thêm học vấn",
  ADD_EXPERIENCE: "Thêm kinh nghiệm",
  ADD_SKILL: "Thêm kỹ năng",
  ADD_PROJECT: "Thêm sản phẩm",
  ADD_CERTIFICATE: "Thêm chứng chỉ",
  ADD_PRIZE: "Thêm giải thưởng",
};

export const CANDIDATE_INFO_TYPE = {
  PERSONAL_INFO: "personalInfo",
  EDUCATION: "education",
  EXPERIENCES: "experiences",
  SKILLS: "skills",
  CERTIFICATES: "certificates",
  PROJECTS: "projects",
  PRIZES: "prizes",
};
