/// <reference path="../../js/jquery.d.ts" />

import baseFooter = require("../uv-shared-module/footerPanel");
import baseExtension = require("../uv-shared-module/baseExtension");
import utils = require("../../utils");
import embed = require("../uv-dialogues-module/embedDialogue");

// adds download button
export class FooterPanel extends baseFooter.FooterPanel {

    $downloadButton: JQuery;

    static DOWNLOAD: string = 'footer.onDownload';

    constructor($element: JQuery) {
        super($element);
    }

    create(): void {
        this.setConfig('footerPanel');

        super.create();

        this.$downloadButton = $('<a class="download" title="' + this.content.download + '">' + this.content.download + '</a>');
        this.$options.prepend(this.$downloadButton);

        this.$downloadButton.on('click', (e) => {
            e.preventDefault();

            $.publish(FooterPanel.DOWNLOAD);
        });

        if (!utils.Utils.getBool(this.options.downloadEnabled, true)){
            this.$downloadButton.hide();
        }
    }

    resize(): void {
        super.resize();
    }
}