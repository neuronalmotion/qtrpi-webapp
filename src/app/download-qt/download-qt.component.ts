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
                    urlRPi1: '/downloads/qtrpi/rpi1/none',
                    urlRPi2: '/downloads/qtrpi/rpi2/qtrpi-rpi2_qt-5.7.0.zip',
                    urlRPi3: '/downloads/qtrpi/rpi3/none',
                    releaseDate: '2016-11-02'
                }
            ]
        }
    ]

    ngOnInit() {
    }

}
