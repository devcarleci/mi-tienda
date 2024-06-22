import { Month } from "../../models/month"
import{ monthsList } from "../../../assets/data/month.json"


export class HelperFunction {

  public static GetMonths() {
    let list:Month[]= monthsList
   return list
  }

}
