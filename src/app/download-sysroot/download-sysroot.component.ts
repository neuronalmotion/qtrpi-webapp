import { Component, OnInit } from '@angular/core';
import { SysrootVersion } from '../sysroot-version';

@Component({
  selector: 'app-download-sysroot',
  templateUrl: './download-sysroot.component.html',
})
export class DownloadSysrootComponent implements OnInit {

  sysrootVersions: SysrootVersion[] = [
        {
            versionName: '2017-03-02-raspbian-jessie',
            binaries: [
                {
                    type: 'minimal',
                    url: '/downloads/sysroot/qtrpi-sysroot-minimal-2017-03-02-raspbian-jessie.zip',
                    releaseDate: '2017-03-02'
                }
            ]
        }
    ]

  ngOnInit() {
  }

}
