/// <reference path="../../js/jquery.d.ts" />
/// <reference path="../../js/extensions.d.ts" />
import coreProvider = require("../uv-seadragon-extension/iiifProvider");
import utils = require("../../utils");
import IBLSeadragonProvider = require("./iBLSeadragonProvider");
import BootStrapper = require("../../bootstrapper");

export class Provider extends coreProvider.Provider implements IBLSeadragonProvider{

    constructor(bootstrapper: BootStrapper, config: any, manifest: any) {
        super(bootstrapper, config, manifest);

        $.extend(true, this.config.options, {

        });
    }
}