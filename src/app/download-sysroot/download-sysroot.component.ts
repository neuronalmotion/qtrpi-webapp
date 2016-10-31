import { Component, OnInit } from '@angular/core';
import { SysrootVersion } from '../sysroot-version';

@Component({
  selector: 'app-download-sysroot',
  templateUrl: './download-sysroot.component.html',
})
export class DownloadSysrootComponent implements OnInit {

  sysrootVersions: SysrootVersion[] = [
        {
            versionName: '2016-09-23-raspbian-jessie',
            binaries: [
                {
                    type: 'minimal',
                    url: '/downloads/sysroot/qtrpi-sysroot-minimal-2016-09-23-raspbian-jessie.zip',
                    releaseDate: '2016-10-31'
                }
            ]
        }
    ]

  ngOnInit() {
  }

}
