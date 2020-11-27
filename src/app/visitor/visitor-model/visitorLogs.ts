


export class visitorLogs {

    date: string;
    dateInTime: any;
    dateOutTime: string;
    whomToMeet:  string;
    purpose: string
    activityStatus: string
    visitor: {
        visitorId: number,
        visitorName: string,
        phoneNo: number,
        address: string,
        companyName: string,
        visitorType: {
            tid: number,
            type: string
        }
    }
}


