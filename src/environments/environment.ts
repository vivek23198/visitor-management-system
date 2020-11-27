// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


const base_URL = "https://rocky-journey-49618.herokuapp.com"

export const getVisitor = ( id:string )=> `${base_URL}/visitor/${id}`
export const updateVisitor = ( id:string )=> `${base_URL}/visitor/${id}`
export const deleteVisitor = ( id:string )=> `${base_URL}/visitor/${id}`
export const postVisitorLog = ( id:string ) => `${base_URL}/log/${id}`
export const getVisitorLogById = ( id:string ) => `${base_URL}/log/${id}`
export const updateLogById = (id:string) => `${base_URL}/log/${id}`
export const activityStatus = (id:string) => `${base_URL}/log/activityStatus/${id}`

export const environment = {
  production: false,
  authenticate: `${base_URL}/authenticate`,
  registration: `${base_URL}/register`,
  getVisitors: `${base_URL}/visitors`,
  postVisitor: `${base_URL}/visitor`,
  getVisitorType: `${base_URL}/type`,
  getVisitorById: getVisitor,
  updateVisitorById: updateVisitor,
  deleteVisitorById: deleteVisitor,
  postVisitorLog: postVisitorLog,
  getVisitorLogById: getVisitorLogById,
  getAllVisitorLogs: `${base_URL}/logs`,
  updateLogById : updateLogById,
  changePassword: `${base_URL}/changePassword`,
  activityStatus: activityStatus,
  resetPassword: `${base_URL}/forgotPassword`

};


