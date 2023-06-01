import {Topic} from "../topic";

export interface PageableTopic {
  content: Topic[];
  totalPages: number;
  totalElements: number;
}
