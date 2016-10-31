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
                    urlRPi1: '/downloads/qt/rpi1/none',
                    urlRPi2: '/downloads/qt/rpi2/qtrpi-linux-rasp-pi2-g%2B%2B_qt-5.7_20161031.zip',
                    urlRPi3: '/downloads/qt/rpi3/none'
                }
            ]
        }
    ]

    ngOnInit() {
    }

}
