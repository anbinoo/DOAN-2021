import Home from "pages/Home";
import NotFound from "pages/NotFound";
import JobDetail from "pages/JobDetail";
import CandidateAppliedJobs from "pages/candidate/AppliedJobs";
import Candidate from "pages/candidate";
import Recruiter from "pages/recruiter";
import JobsManagement from "pages/recruiter/JobsManagement";

export const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/candidate",
    component: Candidate,
    exact: true,
  },
  {
    path: "/applied-jobs",
    component: CandidateAppliedJobs,
    exact: true,
  },
  {
    path: "/recruiter",
    component: Recruiter,
    exact: true,
  },
  {
    path: "/recruiter/jobs-management",
    component: JobsManagement,
    exact: true,
  },
  {
    path: "/jobs/:id",
    component: JobDetail,
    exact: true,
  },
  {
    path: "*",
    component: NotFound,
  },
];
