import { checkListDataType, servicesDataType } from "./dataTypes";

export const checkListData:checkListDataType[] = [ 
    {
        id: 1,
        title: "Mr. Joseph Agunbiade",
        pending: true,
        description: "Benz 2014 EClass",
        time: "14 July, 4:00pm - 7:00pm"
    },
    {
        id: 2,
        title: "Mr. Joseph Agunbiade",
        pending: false,
        description: "Benz 2014 EClass",
        time: "14 July, 4:00pm - 7:00pm"
    }
]

export const servicesData: servicesDataType[] = [
    {
        id: 1,
        title: "Inspection",
        description: "Contrary to popular belief, Lorem Ipsum dior",
        img: require("../assets/inspection.png")
    },
    {
        id: 2,
        title: "Maintenance",
        description: "Contrary to popular belief, Lorem Ipsum dior",
        img: require("../assets/maintenance.png")
    }
]