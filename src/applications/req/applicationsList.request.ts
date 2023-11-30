import {SortableRequest} from "../../common/request";

const sortBy = ['applyingDate'] as const

export class ApplicationsListRequest extends SortableRequest(sortBy){

}
