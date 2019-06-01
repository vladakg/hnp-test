////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import {Component} from '@angular/core';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    objHeaderData: {title: string};

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    constructor() {
        this.objHeaderData = {
                title: 'Home'
            };
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
