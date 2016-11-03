export class SysrootVersion {
    versionName: string;
    binaries: SysrootBinary[];
}

export class SysrootBinary {
    type: string;
    url: string;
    releaseDate: string;
}

