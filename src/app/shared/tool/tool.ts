import { Response } from '@angular/http';
export function isEmpty(response:Response):boolean{
    if (response.text().length>0){
      return false;
    }
    return true;
}