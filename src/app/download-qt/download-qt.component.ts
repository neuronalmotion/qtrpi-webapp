import { Component, OnInit } from '@angular/core';
import { QtVersion } from '../qt-version';

@Component({
    selector: 'app-download-qt',
    templateUrl: './download-qt.component.html'
})
export class DownloadQtComponent implements OnInit {

    qtVersions: QtVersion[] = [
        {
            versionName: '5.7.0',
            binaries: [
                {
                    modules: 'Qt Base, Qt Declarative (Quick 2), Qt Quick Controls, Qt Quick Controls 2, Qt 3D',
                    urlRPi1: '/download/1',
                    urlRPi2: '/download/2',
                    urlRPi3: '/download/3'
                }
            ]
        }
    ]

    ngOnInit() {
    }

}
